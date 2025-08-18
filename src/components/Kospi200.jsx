import { useEffect, useState } from "react";

const Kospi200 = () => {
    const [list, setList] = useState([]);
    useEffect(()=>{
        const fetchData = async () => {
            const res = await fetch('https://mammoth-coffee-project.onrender.com/api/kospi200/all');
            console.log(res);
        }

        fetchData();
    },[])
    return(
        <div>test</div>
    )
}

export default Kospi200;