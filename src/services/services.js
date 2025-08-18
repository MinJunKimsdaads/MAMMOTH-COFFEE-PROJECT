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
       const result = [];
       await Promise.all(
        list.map(async (i) => {
            const code = i.code;
            const res = await fetch(`https://mammoth-coffee-project.onrender.com/api/sales/search?code=${code}`).then((result)=>{
                return result.json();
            }).then((data)=>{
                if(data.lastSales && data.lastProfit){
                    const lastSales = Number(data.lastSales);
                    const lastProfit = Number(data.lastProfit);
                    if(lastProfit > 0 && lastSales > 0){
                        result.push(i);
                    }
                }
            });
        })
       ) 
       return result;
    }catch(e){
        console.error(e);
    }
}
