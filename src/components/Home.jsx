import React from 'react'
import { Box } from '@chakra-ui/react'
import Header from "./Header";
import { Image } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { Text } from '@chakra-ui/react';
import { HStack } from '@chakra-ui/react';

const Home = () => {
  return (
   
      <Box bgColor="blackAlpha.900" width={"full"} height={"88vh"}>
       
       <motion.div style={{
        height:"80vh",
       }}
       animate={
        {
          translateY:"20px"
        }
       }
       transition={{
        duration:1,
        repeat:Infinity,
        repeatType:'reverse',
       }}
       >
       
       <Image src={"btc.png"} height={"full"} width={"full"} objectFit={"contain"} />
       
       
       </motion.div>

       <Text    fontSize={"6xl"}
        textAlign={"center"}
        fontWeight={"thin"}
        color={"whiteAlpha.700"}
        mt={"-16"}>
        Your crypto partner
       </Text>
      </Box>

  )
}

export default Home
