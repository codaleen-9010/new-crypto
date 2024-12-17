import { Box, Stack, Text, VStack, HStack, Icon, Link } from "@chakra-ui/react";
import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <Box
      bgGradient="linear(to-r, blackAlpha.900, gray.800)"
      color={"whiteAlpha.900"}
      minH={"48"}
      px={"16"}
      py={["16", "8"]}
    >
      <Stack
        direction={["column", "row"]}
        h={"full"}
        alignItems={"center"}
        justifyContent={"space-between"}
        spacing={8}
      >
        <VStack w={"full"} alignItems={["center", "flex-start"]} spacing={4}>
          <Text fontWeight={"bold"} fontSize={"2xl"} textTransform={"uppercase"} letterSpacing={"wider"}>
            About Us
          </Text>
          <Text
            fontSize={"md"}
            letterSpacing={"wider"}
            textAlign={["center", "left"]}
            maxW={"600px"}
            lineHeight={"taller"}
            color={"gray.400"}
            
            p={4}
            borderRadius={"md"}
            boxShadow={"md"}
          >
            <Text as="span" fontWeight={"bold"} color={"whiteAlpha.900"}>
              Crypto-Opus
            </Text>{" "}
            is a comprehensive platform designed for cryptocurrency enthusiasts, providing real-time data on exchanges and coins. Our mission is to offer users detailed insights and easy access to market trends, empowering them to make informed investment decisions. Explore top exchanges, track your favorite coins, and stay updated with dynamic price charts across various timeframes. Join us on the journey to navigate the dynamic world of digital currencies.
          </Text>
        </VStack>

        <VStack spacing={4} alignItems={"center"}>
          <Text fontWeight={"bold"} fontSize={"2xl"} textTransform={"uppercase"} letterSpacing={"wider"}>
            Follow Us
          </Text>
          <HStack spacing={6}>
            <Link href="https://www.facebook.com" isExternal>
              <Icon
                as={FaFacebook}
                boxSize={7}
                transition={"color 0.3s, transform 0.3s"}
                _hover={{ color: "blue.500", transform: "scale(1.2)" }}
              />
            </Link>
            <Link href="https://www.twitter.com" isExternal>
              <Icon
                as={FaTwitter}
                boxSize={7}
                transition={"color 0.3s, transform 0.3s"}
                _hover={{ color: "blue.400", transform: "scale(1.2)" }}
              />
            </Link>
            <Link href="https://www.linkedin.com" isExternal>
              <Icon
                as={FaLinkedin}
                boxSize={7}
                transition={"color 0.3s, transform 0.3s"}
                _hover={{ color: "blue.300", transform: "scale(1.2)" }}
              />
            </Link>
            <Link href="https://www.instagram.com" isExternal>
              <Icon
                as={FaInstagram}
                boxSize={7}
                transition={"color 0.3s, transform 0.3s"}
                _hover={{ color: "pink.400", transform: "scale(1.2)" }}
              />
            </Link>
          </HStack>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
