//등락률에 따른 필터링
export const getDataFilteredUpRate = (list,upRate,downRate) => {
    return list.filter((i)=>{
        const late = Number(i.rate);
        return late >= downRate && late <= upRate;
    })
}

//매출, 영업익에 따른 필터링
export const getDataFilteredSales = async (list) => {
    try{
       const data = [];
       await Promise.all(
        list.foreach(async (i) => {
            const code = i.code;
            const res = await fetch(`https://mammoth-coffee-project.onrender.com/api/sales/search?code=${code}`);
            console.log(res);
        })
       ) 
    }catch(e){
        console.error(e);
    }
}
