import { useEffect, useState } from "react";
import axios from "axios";
import style from "./Home.module.css";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';



//let MetaApi = require("metaapi.cloud-sdk").default;


const Home =  ()  => {
    
       
    const [info, setInfo] = useState()

    const getInfo = async () => {
               
        //console.log(await axios.get("https://fx-auto-trade-1c1l.onrender.com/information"))
        console.log(await axios.get("https://fornix.onrender.com/information"))

        setInfo(
            //const  broker = await connection.getAccountInformation();
            //await axios.get("https://fx-auto-trade-1c1l.onrender.com/information")
            await axios.get("https://fornix.onrender.com/information")
        )
    }

    useEffect(()=> {
        getInfo()
    },[])

    

    console.log(info?.data ? info.data : "nada")
    return(  
        <div >
            
            <div className={style.fornix}>
            <h1 >Fornix</h1>
            </div>
            
            <div className={style.home}>
            <h3>Broker:</h3>
            <h5>{info?.data?.broker}</h5>
            <h3>Account:</h3>
            <h5>{info?.data?.login}</h5>
            <h3>Balance:</h3>
            <h5>{info?.data?.balance}</h5>
            <h3>Equity:</h3>
            <h5>{info?.data?.equity}</h5>
            </div>
            
            {/* <div className={style.home}>
            <h3>Trade ID:</h3>
            <h5>{info?.data?.pos.pos[0].id}</h5>
            <h3>Trade UnrealizedProfit:</h3>
            <h5>{info?.data?.pos.pos[0].unrealizedProfit}</h5>
            <Box sx={{ position: 'relative', display: 'inline-flex' }}>
            <CircularProgress variant="determinate" value={info?.data?.pos.pos[0].unrealizedProfit} />
            <Box
            sx={{
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                position: "absolute",
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
                >
                <Typography variant="caption" component="div" color="text.secondary">
                {`${(((info?.data?.pos.pos[0].unrealizedProfit)/info?.data?.balance)*100).toFixed(3)}%`}
                </Typography>
                </Box>
                
                </Box>
                
            </div> */}
            
            {/* <div className={style.home}>
            <h3>Trade ID:</h3>
            <h5>{info?.data?.pos.pos[1].id}</h5>
            <h3>Trade UnrealizedProfit:</h3>
            <h5>{info?.data?.pos.pos[1].unrealizedProfit}</h5>
            <Box sx={{ position: 'relative', display: 'inline-flex' }}>
                <CircularProgress variant="determinate" value={info?.data?.pos.pos[1].unrealizedProfit} />
                <Box
                sx={{
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    position: "absolute",
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
                >
                <Typography variant="caption" component="div" color="text.secondary">
                {`${(((info?.data?.pos.pos[1].unrealizedProfit)/info?.data?.balance)*100).toFixed(3)}%`}
                </Typography>
                </Box>
                
                </Box>
                
            </div> */}

            {/* <div className={style.home}>
            <h3>Trade ID:</h3>
            <h5>{info?.data?.pos.pos[2].id}</h5>
            <h3>Trade UnrealizedProfit:</h3>
            <h5>{info?.data?.pos.pos[2].unrealizedProfit}</h5>
            <Box sx={{ position: 'relative', display: 'inline-flex' }}>
            <CircularProgress variant="determinate" value={info?.data?.pos.pos[2].unrealizedProfit} />
            <Box
            sx={{
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                position: "absolute",
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
            >
            <Typography variant="caption" component="div" color="text.secondary">
            {`${(((info?.data?.pos.pos[2].unrealizedProfit)/info?.data?.balance)*100).toFixed(3)}%`}
            </Typography>
            </Box>
            
            </Box>
        </div> */}
            
            {/* <div className={style.home}>
            <h3>Trade ID:</h3>
            <h5>{info?.data?.pos.pos[3].id}</h5>
            <h3>Trade UnrealizedProfit:</h3>
            <h5>{info?.data?.pos.pos[3].unrealizedProfit}</h5>
            <Box sx={{ position: 'relative', display: 'inline-flex' }}>
            <CircularProgress variant="determinate" value={info?.data?.pos.pos[3].unrealizedProfit} />
            <Box
            sx={{
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                position: "absolute",
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
            >
            <Typography variant="caption" component="div" color="text.secondary">
            {`${(((info?.data?.pos.pos[3].unrealizedProfit)/info?.data?.balance)*100).toFixed(3)}%`}
            </Typography>
            </Box>
            
            </Box>
        </div> */}
            
            {/* <div className={style.home}>
            <h3>Trade ID:</h3>
            <h5>{info?.data?.pos.pos[4].id}</h5>
            <h3>Trade UnrealizedProfit:</h3>
            <h5>{info?.data?.pos.pos[4].unrealizedProfit}</h5>
            <Box sx={{ position: 'relative', display: 'inline-flex' }}>
            <CircularProgress variant="determinate" value={info?.data?.pos.pos[4].unrealizedProfit} />
            <Box
            sx={{
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                position: "absolute",
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
            >
            <Typography variant="caption" component="div" color="text.secondary">
            {`${(((info?.data?.pos.pos[4].unrealizedProfit)/info?.data?.balance)*100).toFixed(3)}%`}
            </Typography>
            </Box>
            
            </Box>
        </div> */}

            <div className={style.home}>
                <h3>Trade ID:</h3>
                {/* <h5>{info?.data?.pos.pos[5].id}</h5>
                <h3>Trade UnrealizedProfit:</h3>
                <h5>{info?.data?.pos.pos[5].unrealizedProfit}</h5>
                <Box sx={{ position: 'relative', display: 'inline-flex' }}>
                <CircularProgress variant="determinate" value={info?.data?.pos.pos[5].unrealizedProfit} />
                <Box
                sx={{
                    top: 0,
                    left: 0,
                    bottom: 0,
                        right: 0,
                        position: "absolute",
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                    >
                    <Typography variant="caption" component="div" color="text.secondary">
                    {`${(((info?.data?.pos.pos[5].unrealizedProfit)/info?.data?.balance)*100).toFixed(3)}%`}
                    </Typography>
                    </Box>
                    
                </Box> */}
            </div>

            
            {/* <h3>id:</h3>
            <h5>{info?.data?.id}</h5>
            <h3>Symbol:</h3>
            <h5>{info?.data?.symbol}</h5>
            <h3>Unrealized Profit:</h3>
        <h5>{info?.data?.unrealizedProfit}</h5> */}

        {/* <div>
            <h3>History</h3>
            <h5>{info?.data?.historyOrders?.historyOrders?.deals[0].id}</h5>
            <h3>Total Profit</h3>
            <h5>{info?.data?.historyOrders?.historyOrders?.deals[0].profit + info?.data?.historyOrders?.historyOrders?.deals[1].profit + info?.data?.historyOrders?.historyOrders?.deals[2].profit + info?.data?.historyOrders?.historyOrders?.deals[3].profit + info?.data?.historyOrders?.historyOrders?.deals[4].profit}  USD</h5>

        </div> */}
        </div> 
    )
}

export default Home;