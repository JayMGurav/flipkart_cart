import { createContext, ReactNode, useContext, useReducer } from "react";
import productReducer from "./productReducer";

import { StateType } from "@/types/store";

type IContextProps = {
  state: StateType;
  dispatch: ({ type }: { type: string; data?: any }) => any;
};

const Store = createContext({} as IContextProps);

export const useStore = () => useContext(Store);

function StoreProvider({
  children,
  initialState,
}: {
  children: ReactNode;
  initialState: StateType;
}) {
  const [state, dispatch] = useReducer(productReducer, initialState);
  return (
    <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>
  );
}

export default StoreProvider;
