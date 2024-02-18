import { ReactNode, createContext, useState } from "react";

interface IUserProviderProps {
    children: ReactNode
}

interface IUserContext {

}


export const UserContext = createContext({} as IUserContext)

export const UserProvider = ({children}: IUserProviderProps) => {



    return (
        <UserContext.Provider value = {{}}>
            {children}
        </UserContext.Provider>
    )
}