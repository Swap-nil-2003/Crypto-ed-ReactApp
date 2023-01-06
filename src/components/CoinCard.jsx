import { Heading, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const CoinCard=({id, name,img, symbol,price, currencySymbol = "₹"})=> (
    <Link to={`/coins/${id}`}>
        <VStack w={"60"} bg={"blackAlpha.500"} shadow={"xl"}  p={"10"} alignItems={"center"} borderRadius={"lg"}
      transition={"all 0.35s"} m={"5"} css={{"&:hover": {transform: "scale(1.1)",},}}>
        <Image
        src={img}
        w={"10"}
        h={"10"}
        objectFit={"contain"}
        alt={"Exchange"}
      />
      <Heading size={"md"} noOfLines={1} >
            {symbol}
      </Heading>
      <Text noOfLines={1}>{name}</Text>
      <Text noOfLines={1}>{price? `${currencySymbol}${price}`:"NA"}</Text>
    </VStack>
    </Link>
);
export default CoinCard;
