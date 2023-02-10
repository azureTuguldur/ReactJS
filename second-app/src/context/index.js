import { createContext } from "react";

export const UserContext = createContext(null);

const UserProvider = ({children})=>{
    const [userName,setUserName] =useState("Naraa")

    const login = ()=>{}

    const login = ()=>{}

    const login = ()=>{}

    return <UserContext.Provider>
        {children}
    </UserContext>
}