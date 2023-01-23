import React, { useEffect, useState } from "react";
import axios from "axios";
import { server } from "../index";
import { Container, Heading, HStack, VStack, Image, Text} from "@chakra-ui/react";
import Loader from "./Loader";
import ErrorComponent from "./ErrorComponent";

const Trending = () => {

    const [trending, setTrending] = useState([]);
    const[loading, setLoading] = useState(true);
    const[error, setError] = useState(false);
    //const [page, setPage] = useState(1);
    //const [currency, setCurrency] = useState("inr");

    useEffect(() => {
        const fetchTrending = async () => {
        
            try {
                const { data } = await axios.get(`${server}/search/trending?vs_currency=inr`);
                setTrending(data);
                setLoading(false);
                console.log(data);
            } catch (error) {
                setError(true);
                setLoading(false);
            }
        
        };
        fetchTrending();
    }, []);

    if(error) return <ErrorComponent message={"Error While Fetching Trending Coins"} />;

    return <Container maxW={"container.xl"}>
        {loading ? <Loader /> : <>
            <Heading m={"5"}>Top 7 Trending Coins</Heading>
            
            <HStack wrap={"wrap"}>
                {trending.coins.map((i) => (
                    //<div>{i.item.name}</div>
                    <TrendingCard key={i.item.id} nme={i.item.name} img={i.item.small} rank={i.item.market_cap_rank} price={i.item.price_btc} />
                ))}
            </HStack>
        </>}
    </Container>;
};

const TrendingCard = ({nme, img, rank, price }) => 
<div>
<VStack w={"60"} bg={"blackAlpha.500"} shadow={"xl"}  p={"10"} alignItems={"center"} borderRadius={"lg"}
transition={"all 0.35s"} m={"5"} css={{"&:hover": {transform: "scale(1.1)",
  },
}}> 
  <Image
  src={img}
  w={"10"}
  h={"10"}
  objectFit={"contain"}
  alt={"Trending"}
/>
<Heading size={"md"} noOfLines={1} >
      {rank}
</Heading>
<Text noOfLines={1}>{nme}</Text>
<Text noOfLines={1}>{price.toFixed(8)} BTC</Text>
</VStack>
</div>

export default Trending;