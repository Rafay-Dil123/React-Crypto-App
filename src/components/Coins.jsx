
import React, { useEffect, useState } from "react";
import { server } from "../index";
import axios from "axios";
import {Link} from "react-router-dom";
import {motion} from "framer-motion";

const Coins = () => {
  const [arr, setarray] = useState([]);
  const [loading, setloading] = useState(false);
  //const [error, seterror] = useState(false);
  
  useEffect(() => {

    const fetchexchanges = async () => {
      const { data } = await axios.get(`${server}/coins/markets?vs_currency=usd`);
      setarray(data);
      setloading(true);
 
    }
    fetchexchanges();
  
  }, []);

  // useEffect(()=>{
  //    {error?" ":<h1>There is a error</h1>}

  // },[error])

  return (
    {loading}&&<div>
      <div className="row">
        {arr.map((exchange) => (
          <div className="col-md-2 mb-2" key={exchange.id}>
            <div className="card mx-auto my-4 border border-4 border-secondary" style={{ width: "12rem"}} >
            <div className="card mx-auto my-5 border-0" style={{ width: "4rem",height:"auto"}}>
             <motion.div style={{
             
             }}
             animate={{translateY:"20px",}}
            transition={{duration:"2",repeat:"Infinity",repeatType:"reverse"}}
           
             >
            
              <img src={exchange.image} className="card-img-top" alt="..." />
              </motion.div>
              </div>
              <div><p className="card-text text-center" style={{ color: "blue", ":hover": { color: "red" } }}>{`$`+exchange.current_price} </p></div>
              <div className="card-body">
                <h5 className="card-title text-center">{exchange.name}</h5>
                {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
               <Link to={`/coindetail/${exchange.id}`} className="color-primary"><p className="text-center">View Details</p></Link> 
              </div>
            </div>
            
        </div>
        ))}
        
        
      </div>
     
    </div>
  );
}

export default Coins
