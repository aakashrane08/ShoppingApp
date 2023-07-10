import { createContext, useState } from "react";


export const AppContext = createContext();

export default function AppContextProvider({children}) {
    const [search, setSearch] = useState("");

    
  const handleChange = (event) => {
    setSearch(event.target.value);
    console.log(search);
  };

    const value = {
        search,
        setSearch,
        handleChange
    }

    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}

