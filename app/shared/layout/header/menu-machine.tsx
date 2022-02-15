import { useMachine } from "@xstate/react";
import React from "react";
import { createMachine } from "xstate";

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
};

interface MenuProviderProps {
  children?: React.ReactNode;
}

export const MenuContext = React.createContext({} as MenuContextType);
export const useMenuContext = () => React.useContext(MenuContext);

const MenuProvider = ({ children }: MenuProviderProps) => {
  const [current, send] = useMachine(machine);

  const valid: ValidType = {
    opened: current.matches(menu_states.opened),
    closed: current.matches(menu_states.closed),
  };

  const state = current.value as menu_states;
  const context = current.context;

  return (
    <MenuContext.Provider value={{ context, send, state, valid }}>
      {children}
    </MenuContext.Provider>
  );
};

export default MenuProvider;
