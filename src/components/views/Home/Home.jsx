import { useState } from "react";

import axios from "axios";

const Home = () => {

    const [info, setInfo] = useState()

    const getInfo = async () => {
        setInfo(
            await axios.get("https://fx-auto-trade-1c1l.onrender.com/information")
        )
    }

    getInfo()

    console.log(info ? info : "nada")
    return(
        <div>
            <h1>Home</h1>
            <h3>Broker:</h3>
            <h5>{info?.broker}</h5>
            <h3>Balance:</h3>
            <h5>{info?.balance}</h5>
            <h3>Equity:</h3>
            <h5>{info?.equity}</h5>
        </div>
    )
}

export default Home;