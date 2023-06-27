import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import img from "../Assets/btc.png";
import { motion, reverseEasing } from "framer-motion";
const Home = () => {
  return (
    <Box bgColor={"blueviolet"} w={"full"} h={"85vh"}>
      <motion.div
        style={{
          height: "80vh",
        }}
        animate={{
          translateY: "30px",
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
          src={img}
          filter={"grayscale(1)"}
        />
      </motion.div>
      <Text
        fontSize={"6xl"}
        textAlign={"center"}
        fontWeight={"thin"}
        color={"whiteAlpha.700"}
        // m={"-20"}
      >
        CrptoDSCe
      </Text>
    </Box>
  );
};

export default Home;
