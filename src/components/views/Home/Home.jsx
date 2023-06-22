import { useEffect, useState } from "react";

import axios from "axios";

const Home = () => {

    const [info, setInfo] = useState()

    const getInfo = async () => {
        console.log(await axios.get("https://fx-auto-trade-1c1l.onrender.com/information"))
        setInfo(
            await axios.get("https://fx-auto-trade-1c1l.onrender.com/information")
        )
    }

    useEffect(()=> {
        getInfo()
    },[])

    console.log(info?.data ? info.data : "nada")
    return(
        <div>
            <h1>Home</h1>
            <h3>Broker:</h3>
            <h5>{info?.data?.broker}</h5>
            <h3>Balance:</h3>
            <h5>{info?.data?.balance}</h5>
            <h3>Equity:</h3>
            <h5>{info?.data?.equity}</h5>
        </div>
    )
}

export default Home;