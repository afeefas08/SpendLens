import { createContext, useState } from "react";

const DataContext = createContext({})

export const DataProvider = ({Children}) => {
    return (
        <DataContext.Provider value={{

        }}>
            {Children}
        </DataContext.Provider>
    )
}

export default DataContext