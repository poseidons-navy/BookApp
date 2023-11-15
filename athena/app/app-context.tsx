"use client"
import { createContext, useState } from "react";

export let AppContext = createContext({
    user_address: "",
    set_user_address: (add: string) => {}
})

export default function AppContextProvider({children}) {
    const [address, setAddress] = useState("");

    function updateAddress(add: string) {
        setAddress(add);
    }

    return <AppContext.Provider value={{user_address: address, set_user_address: updateAddress}}>
        {children}
    </AppContext.Provider>
}