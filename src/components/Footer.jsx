import React from 'react';
import { Box, VStack,Text, Stack } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box bgColor={"blackAlpha.700"}
    color={"whiteAlpha.900"}
    minH={"48"}
    px={"16"}
    py={["16", "8"]}>
    <Stack direction={["column", "row"]} h={"full"} alignItems={"center"}>
        <VStack w={"100vw"} alignItems={["center"]}>
          <Text fontWeight={"bold"} fontSize={"3xl"}>About Crypto'Ed</Text>
          <Text
            fontSize={"sm"}
            letterSpacing={"widest"}
            textAlign={["center"]}>
            Get all details about the Crypto MarketPlace and latest trends about various Bitcoins.
          </Text>
        </VStack>
      </Stack>
    </Box>
  )
}

export default Footer;
