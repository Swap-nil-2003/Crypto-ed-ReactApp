import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import btcSrc from "../assets/btc.png";

const Home = () => {
  return (
    <Box bgColor={"blackAlpha.700"} w={"full"} h={"90vh"}>
        <Image w={"full"} h={"full"} objectFit={"contain"} src={btcSrc} />
        <Text fontSize={"5xl"} textAlign={"center"} fontWeight={"bold"} color={"whiteAlpha.700"} mt={"-20"}>Crypto'ed</Text>
    </Box>
  )
}

export default Home;
