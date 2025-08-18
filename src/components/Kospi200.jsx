import { useEffect, useState } from "react";
import { get5DaysData, getDataFilteredSales, getDataFilteredUpRate } from "../services/services";

const Kospi200 = () => {
    const [list, setList] = useState([]);
    useEffect(()=>{
        const fetchData = async () => {
            await fetch('https://mammoth-coffee-project.onrender.com/api/kospi200/all').then((result)=>{
                return result.json();
            }).then(async (list)=>{
                const filteredUpRate = getDataFilteredUpRate(list,-0.2,-1.0);
                const filteredSales = await getDataFilteredSales(filteredUpRate);
                await get5DaysData(filteredSales);
            });
        }

        fetchData();
    },[])
    return(
        <>
            
        </>
    )
}

export default Kospi200;