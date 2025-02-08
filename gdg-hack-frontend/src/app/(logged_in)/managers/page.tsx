"use client"
import ManagerTable from "../../../components/managersTable";
import { managerMockData } from "../../../mockData/manager";
import { useState, useEffect } from "react";
import SettingsContent from "../../../components/managers/settingsContent";
export default function   Manager() {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        try {
            // Simulate fetching data
            setTimeout(() => {
                setIsLoading(false);
            }, 1000); // Simulated delay
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (err) {
            setError("Failed to load    manager");
            setIsLoading(false);
        }
    }, []);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return  (
<>
<SettingsContent/>
     <ManagerTable data={managerMockData} />
     
    </>
    );
    
   
}
