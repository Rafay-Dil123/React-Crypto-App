import React, { useEffect, useState } from "react";
import { RadioGroup, VStack, Box, Button } from "@chakra-ui/react";
import { Radio, Stat } from "@chakra-ui/react";
import { HStack, Text, Image } from "@chakra-ui/react";
import { StatLabel, Badge } from "@chakra-ui/react";
import { StatNumber, StatHelpText, StatArrow } from "@chakra-ui/react";
import Loader from "./Loader";
import Chart from "./Chart";
import { server } from "../index";
import axios, { HttpStatusCode } from "axios";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";



const CoinDetail = () => {
  const params = useParams();
  const [currency, setcurrency] = useState("pkr");
  const [days, setdays] = useState("24h");
  const [arr, setarray] = useState([]);
  const [loading, setloading] = useState(true);
  const [chartarray, setchartarray] = useState([]);
  const btns = ["24h", "7d", "14d", "30d", "60d", "200d", "365d"];


  console.log(params.id);
  useEffect(() => {
    const fetchexchanges = async () => {
      const { data } = await axios.get(`${server}/coins/${params.id}`);
      const { data: chartData } = await axios.get(
        `${server}/coins/${params.id}/market_chart?vs_currency=${currency}&days=${days}`
      );
      setarray(data);
      setchartarray(chartData.prices);
      console.log(chartData);
      setloading(false);
    };
    fetchexchanges();
  }, [params.id, currency, days]);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <>
          <RadioGroup value={currency} onChange={setcurrency} p={"8"} alignItems={"center"} justifyContent={"center"} justifyItems={"center"}>
            <HStack spacing={"4"} alignItems={"center"} justifyContent={"center"} justifyItems={"center"}>
              <Radio value={"pkr"}>PKR</Radio>
              <Radio value={"usd"}>USD</Radio>
              <Radio value={"eur"}>EURO</Radio>
            </HStack>
          </RadioGroup>
          <Box width={"auto"} borderwidth={"1"} alignItems={"center"}>
            <Chart arr={chartarray} currency={currency} days={days} />
          </Box>

          <HStack p="4" overflowX={"auto"}>
            {btns.map((i) => (
              <Button key={i}
                color="white"
                bgColor="black"
                onClick={() => {
                  setdays(i);
                }}
              >
                {i}
              </Button>
            ))}
          </HStack>

          <VStack spacing={"4"} p="16" alignItems={"center"}>
            <Text fontSize="small" alignSelf="center" opacity={"0.7"}>
              Last Updated on {Date(arr.market_data.last_updated).split("G")[0]}
              ;
            </Text>
            <HStack>
             
              <motion.div style={{
             
            }}
            animate={{translateY:"20px",}}
           transition={{duration:"2",repeat:"Infinity",repeatType:"reverse"}}
          
            >
               
              <Image
                src={arr.image.large}
                height={"16"}
                width={"16"}
                objectFit={"contain"}
              />
             </motion.div>
           
            </HStack>

            <Stat>
              <StatLabel>{arr.name}</StatLabel>
              <StatNumber>{arr.market_data.current_price[currency]+` ${currency.toUpperCase()}`}</StatNumber>
              <StatHelpText>
                <StatArrow
                  type={
                    arr.market_data.price_change_percentage_24h > 0
                      ? "increase"
                      : "decrease"
                  }
                />
                {arr.market_data.price_change_percentage_24h + "%"}
              </StatHelpText>
              <Badge fontSize="2xl" color={"white"} bgColor={"blackAlpha.800"} alignItems={"center"} justifyContent={"center"} >
                {`#${arr.market_cap_rank}`}
              </Badge>
            </Stat>
          </VStack>
        </>
      )}
    </div>
  );
};

export default CoinDetail;
