import { Button, Container, Flex, Heading, Input } from "@chakra-ui/react";
import React from "react";
import Layout from "~/ui/layout";

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

type HandleType<Data> = (arg: Data) => Promise<void> | void;

type ConfigType = {
  channel?: string;
};

type SubscriptionsArrayType = {
  id: string;
  handle?: HandleType<any>;
  config?: ConfigType;
  values?: any;
};

class EventBus {
  private subscriptions: SubscriptionsArrayType[] = [];

  subscribe<Data>(
    eventId: string,
    handle?: HandleType<Data>,
    config?: ConfigType
  ) {
    if (!this.eventExist(eventId)) {
      this.subscriptions.push({
        id: eventId,
        handle,
        config,
      });
    }

    return {
      unsubscribe: () => this.unsubscribe(eventId),
    };
  }

  emit<Data>(eventId: string | string[], data: Data) {
    if (typeof eventId !== "string") {
      return eventId.forEach((id) => {
        this.emit(id, data);
      });
    }

    if (!this.eventExist(eventId)) return;

    const { handle } = this.subscriptions[this.eventIndex(eventId)];

    if (!handle) {
      console.log("nao passou o handle");

      return;
    }

    this.subscriptions[this.eventIndex(eventId)].values = data;

    const handleEvent = (arg?: Data) => {
      const handleResult = handle(arg);

      return handleResult;
    };

    return handleEvent(data);
  }

  emitAll<Data>(data: Data) {
    return this.subscriptions.forEach((event) => this.emit(event.id, data));
  }

  emitChannel<Data>(channelId: string, data: Data) {
    const channel = this.subscriptions.filter(
      (event) => event.config?.channel === channelId
    );

    return channel.forEach((event) => this.emit(event.id, data));
  }

  private unsubscribe(eventId: string) {
    delete this.subscriptions[this.eventIndex(eventId)]; // unsubscribe the event
  }

  private eventExist(eventId: string) {
    return this.subscriptions.some(
      (subscription) => subscription.id === eventId
    );
  }

  private eventIndex(eventId: string) {
    const index = this.subscriptions.findIndex(
      (subscription) => subscription.id === eventId
    );

    return index;
  }
}

const eventBus = new EventBus();

const useEventBus = <Data,>(event: string, callback?: any) => {
  const [data, setData] = React.useState<Data>();

  const { unsubscribe } = eventBus.subscribe<Data>(event, (args) => {
    setData(args);
    return callback?.(args);
  });

  React.useEffect(() => {
    return () => {
      unsubscribe();
    };
  }, [eventBus]);

  const message = (toEventId: string | string[], data: Data) => {
    const response = eventBus.emit<Data>(toEventId, data);

    console.log({ response });

    return response;
  };

  return {
    message,
    values: data,
  };
};

const ComponentA = () => {
  const { values } = useEventBus<string>("component-a", (args: any) => {
    return args + "-component-a";
  });

  return (
    <div>
      <h1>Component A</h1>

      <p>{values}</p>
    </div>
  );
};

const ComponentB = () => {
  const { message, values } = useEventBus<string | number>(
    "component-b",
    () => {
      return "joao";
    }
  );

  const handleMessage = (e: any) =>
    message(["component-a", "component-b", "component-c"], e.target.value);

  const send = (e: any) => {
    const response = message(["component-a", "component-c"], "asdasdasd");
  };
  return (
    <div>
      <h1>Component B</h1>
      <Button onClick={send}>send message</Button>
      <Input onChange={handleMessage} />
      {values}
    </div>
  );
};

const ComponentC = () => {
  const { values } = useEventBus<string>("component-c", (args: any) => {
    return "-component-c";
  });

  return (
    <div>
      <h1>Component C</h1>
      {values}
    </div>
  );
};

export default function Index() {
  return (
    <Layout>
      <Container mt="10">
        <Heading>Search</Heading>
        <Flex gap={100}>
          <ComponentA />
          <ComponentB />
        </Flex>
        <ComponentC />
      </Container>
    </Layout>
  );
}
