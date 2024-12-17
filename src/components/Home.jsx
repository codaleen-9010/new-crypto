import { Box, Image, Text,Heading } from "@chakra-ui/react";
import React from "react";
import btcSrc from "../assets/btc.png";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <Box
      bgGradient="linear(to-r, blackAlpha.900, gray.800)"
      w={"full"}
      h={"100vh"}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      overflow="hidden"
    >
      <motion.div
        style={{
          height: "60vh",
        }}
        animate={{
          translateY: "20px",
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <Image
          w={"full"}
          h={"full"}
          objectFit={"contain"}
          src={btcSrc}
          filter={"grayscale(1)"}
          mt={'-30'}

        />
      </motion.div>

      
      <Text
        fontSize={"6xl"}
        textAlign={"center"}
        fontWeight={"thin"}
        color={"whiteAlpha.700"}
        mt={"-16"}
        textShadow="2px 2px 10px rgba(0, 0, 0, 0.8)"
      >CryptoOpus
      </Text>
      <Text
        fontSize={"2xl"}
        textAlign={"center"}
        fontWeight={"light"}
        color={"whiteAlpha.700"}
        mt={"2"}
        textShadow="1px 1px 5px rgba(0, 0, 0, 0.8)"
      >
        Your Gateway to the Future of Finance
        
      </Text>

      

    </Box>
  );
};

export default Home;
