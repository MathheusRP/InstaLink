import { Dispatch, ReactNode, SetStateAction, createContext, useState } from "react";

interface IUserProviderProps {
    children: ReactNode
}

interface IUserContext {
    viewProfile: string | undefined
    setViewProfile: Dispatch<SetStateAction<string | undefined>>
    profileSection: string | undefined
    setProfileSection: Dispatch<SetStateAction<string | undefined>>
}




export const UserContext = createContext({} as IUserContext)

export const UserProvider = ({children}: IUserProviderProps) => {

    const [viewProfile, setViewProfile] = useState<string>()
    const [profileSection, setProfileSection] = useState<string>()

    return (
        <UserContext.Provider value = {{ viewProfile, setViewProfile, profileSection, setProfileSection}}>
            {children}
        </UserContext.Provider>
    )
}