import React, { useEffect, useState } from "react";
import { server } from "../index";
import axios from "axios";
import { motion } from "framer-motion";

const Exchanges = () => {
  const [arr, setarray] = useState([]);
  const [loading, setloading] = useState(false);
  //const [error, seterror] = useState(false);

  useEffect(() => {
    const fetchexchanges = async () => {
      const { data } = await axios.get(`${server}/exchanges`);
      setarray(data);
      setloading(true);
    };
    fetchexchanges();
  }, []);

  // useEffect(()=>{
  //    {error?" ":<h1>There is a error</h1>}

  // },[error])

  return (
    { loading } && (
      <div>
        <div className="row">
          {arr.map((exchange) => (
            <div className="col-md-2 mb-2" key={exchange.id}>
              <motion.div
                style={{}}
                animate={{ translateY: "20px" }}
                transition={{
                  duration: "2",
                  repeat: "Infinity",
                  repeatType: "reverse",
                }}
              >
                <div
                  className="card mx-auto my-4 border border-4 border-success"
                  style={{ width: "12rem", height: "auto" }}
                >
                  <div
                    className="card mx-auto my-5  border border-0"
                    style={{ width: "4rem", height: "auto" }}
                  >
                    <img
                      src={exchange.image}
                      className="card-img-top"
                      alt="..."
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title text-center">{exchange.name}</h5>
                    {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                    {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    )
  );
};

export default Exchanges;
