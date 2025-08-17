import { useEffect, useState } from "react";

const Kospi200 = () => {
    const [list, setList] = useState([]);
    useEffect(()=>{
        const fetchData = async () => {
            const res = await fetch('https://finance.naver.com/sise/entryJongmok.naver?order=change_rate&isRightDirection=false&page=1');
            const html = await res.text();
            console.log(html);
        }

        fetchData();
    },[])
    return(
        <div>test</div>
    )
}

export default Kospi200;