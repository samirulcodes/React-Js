import {useEffect, useState} from "react"


function useCurrencyInfo(currency){
    const [data, setData] = useState({}) //default value is empty object
    useEffect(() => {
        // api call
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        // convert into json
        .then((res) => res.json())
        // calling currency like inr, usd,etc
        .then((res) => setData(res[currency]))
        console.log(data);
        //whenever any chng in currency the we want call again bcause it dependency(dependency array) 
    }, [currency]) 
    console.log(data);
    return data
}

export default useCurrencyInfo;