import React, { useContext, useState, type ReactNode } from "react";

// Define the shape of your global data
interface GlobalData {
    backendUrl: string;
    isDisabled: boolean;
    [key: string]: any; // Allows adding extra properties dynamically
}

// Define the type for the setData function arguments
type SetDataInput = Partial<GlobalData> | ((oldData: GlobalData) => GlobalData);

const DataContext = React.createContext<GlobalData | undefined>(undefined);
const SetDataContext = React.createContext<((newData: SetDataInput) => void) | undefined>(undefined);

// Custom hook matching your old pattern: returning [data, setData]
export const useData = (): [GlobalData, (newData: SetDataInput) => void] => {
    const data = useContext(DataContext);
    const setData = useContext(SetDataContext);

    if (data === undefined || setData === undefined) {
        throw new Error("useData must be used within a DataContextProvider");
    }
    return [data, setData];
}

const DataContextProvider = ({ children }: { children: ReactNode }) => {
    // We initialize the defaults here directly for safety
    const [localData, setLocalData] = useState<GlobalData>({
        backendUrl: import.meta.env.VITE_BACKEND_URL ?? "http://localhost:8081",
        isDisabled: false,
    });

    /**
     * Custom hook usage for add/change and modify
     * add/change: setData({ letter: "d" });
     * modify: setData((oldData) => ({ ...oldData, letter: oldData.letter + "+" }));
     */
    const setData = (newData: SetDataInput) => {
        if (newData !== undefined) {
            if (typeof newData === "function") {
                // if arrow function is passed for modify data
                setLocalData((prev) => newData(prev));
            } else {
                // if object is passed for simple add/change data
                setLocalData((oldData) => ({ ...oldData, ...newData }));
            }
        } else {
            console.error("attempt to setData with undefined");
        }
    }

    return (
        <DataContext.Provider value={localData}>
            <SetDataContext.Provider value={setData}>
                {children}
            </SetDataContext.Provider>
        </DataContext.Provider>
    );
}

export default DataContextProvider;