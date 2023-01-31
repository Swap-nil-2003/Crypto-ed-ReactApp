import { Box, Stack, VStack, Heading} from "@chakra-ui/react";
import React from "react";

const Featured = () => {
    return (
    <Box bgColor={"blackAlpha.500"} w={"full"} p={"20"}>
        {/* <Text>Featured Section</Text> */}
        <Stack direction={["column", "row"]} h={"full"} alignItems={"center"}>
          <VStack w={"100vw"} alignItems={["center"]}  textAlign={"center"}>
            <>
              <i class="fa-solid fa-circle-check fa-4x f-icon"></i> 
              <Heading class="feature-title">Easy to use.</Heading>
              <p>So easy to use, even a layman could do it.</p>
            </>
          </VStack>
          <VStack w={"100vw"} alignItems={["center"]} textAlign={"center"}>
            <>
              <i class="fa-solid fa-bullseye fa-4x f-icon"></i>
              <h3 class="feature-title">Elite Clientele</h3>
              <p>We have all the real time data.</p>
            </>            
          </VStack>
          <VStack w={"100vw"} alignItems={["center"]} textAlign={"center"}>
            <>
              <i class="fa-solid fa-heart fa-4x f-icon"></i>
              <h3 class="feature-title">Guaranteed to work.</h3>
              <p>Find the suitable coins and exchange rates</p>
            </>            
          </VStack>
        </Stack>
    </Box>);
}

export default Featured;
