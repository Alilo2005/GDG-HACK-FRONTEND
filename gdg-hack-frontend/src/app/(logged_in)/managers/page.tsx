"use client"
import ManagerTable from "../../../components/managersTable";
import { managerMockData } from "../../../mockData/manager";
import { useState, useEffect } from "react";

export default function Manager() {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        try {
            // Simulate fetching data
            setTimeout(() => {
                setIsLoading(false);
            }, 1000); // Simulated delay
        } catch (err) {
            setError("Failed to load manager");
            setIsLoading(false);
        }
    }, []);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return  (
    <>
     <ManagerTable data={managerMockData} />
    </>
    );
    
   
}
