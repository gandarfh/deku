import { useQuantumMessage } from "@logitao/react";
import { useMachine } from "@xstate/react";
import React from "react";
import { createMachine } from "xstate";
import { globalEvent } from "~/infrastructure/persistence/global-quantum";

export const enum menu_events {
  open = "open",
  close = "close",
}
export const enum menu_states {
  opened = "opened",
  closed = "closed",
}

export type ContextType = {};

export type EventsType = {
  type: menu_events;
};

export interface StatesType {
  value: menu_states;
  context: ContextType;
}

export const machine = createMachine<ContextType, EventsType, StatesType>({
  id: "menu-machine",
  context: {},
  initial: menu_states.closed,
  states: {
    [menu_states.closed]: {
      on: { [menu_events.open]: { target: menu_states.opened } },
    },
    [menu_states.opened]: {
      on: { [menu_events.close]: { target: menu_states.closed } },
    },
  },
});

type ValidType = {
  [key in menu_states]: boolean;
};

type MenuContextType = {
  state: menu_states;
  context: ContextType;
  valid: ValidType;
  send: <T = unknown>(evt: menu_events, payload?: T) => void;
  handleClosed: () => void;
  handleOpen: () => void;
};

interface MenuProviderProps {
  children?: React.ReactNode;
}

export const MenuContext = React.createContext({} as MenuContextType);
export const useMenuContext = () => React.useContext(MenuContext);

const MenuProvider = ({ children }: MenuProviderProps) => {
  const { handleClosed, handleOpen } = useMenu("menu-hook-context");
  useQuantumMessage(
    "menu-category",
    async ({ category, sender }: any) => {
      switch (category) {
        case menu_events.open:
          return send(menu_events.open);
        case menu_events.close:
          return send(menu_events.close);
      }
    },
    { eventBus: globalEvent }
  );

  const [current, send] = useMachine(machine);

  const valid: ValidType = {
    opened: current.matches(menu_states.opened),
    closed: current.matches(menu_states.closed),
  };

  const state = current.value as menu_states;
  const context = current.context;

  return (
    <MenuContext.Provider
      value={{ context, send, state, valid, handleClosed, handleOpen }}
    >
      {children}
    </MenuContext.Provider>
  );
};

export const useMenu = (key: string) => {
  const message = useQuantumMessage(key, async () => {}, {
    eventBus: globalEvent,
  });

  const handleOpen = () => message("menu-category", menu_events.open);
  const handleClosed = () => message("menu-category", menu_events.close);

  return {
    handleOpen,
    handleClosed,
  };
};

export default MenuProvider;
