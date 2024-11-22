import { useEffect, useState } from "react"
import { Appbar } from "../components/Appbar"
import { Balance } from "../components/Balance"
import { User } from "../components/User"
import axios from "axios"



export const Dashboard = () =>{
    const [balance,setBalance]=useState(0);

    useEffect(() => {
        const fetchBalance = async () => {
            try {
                const response = await axios.get("http://localhost:3000/api/v1/account/balance", {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`
                    }
                });
                setBalance(response.data.balance);
            } catch (error) {
                console.error("Failed to fetch balance:", error);
            }
        };

        fetchBalance(); // Call the async function
    }, []);

    return <div>
        <Appbar></Appbar>
        <div className="m-8">
            <Balance value={balance}></Balance>
            <User></User>
        </div>
    </div>

    
}