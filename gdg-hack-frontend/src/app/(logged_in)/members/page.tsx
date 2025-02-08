/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"
import MemberTable from "../../../components/membersTable";
import { memberMockData } from "../../../mockData/member";
import { useState, useEffect } from "react";

export default function Members() {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        try {
            // Simulate fetching data
            setTimeout(() => {
                setIsLoading(false);
            }, 1000); // Simulated delay
        } catch (err) {
            setError("Failed to load members");
            setIsLoading(false);
        }
    }, []);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return <MemberTable data={memberMockData} />;
}
