import React from "react";

import { IReactChildren } from "@types";

export const Context = React.createContext({});

export const AppContext: React.FC<IReactChildren> = ({ children }) => {
    return (
        <Context.Provider value={{}}>
            {children}
        </Context.Provider>
    )
}