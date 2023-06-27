import {
  VStack,
  Image,
  Heading,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const CoinKart = ({ id, name, img, price, symbol, currencySymbol = "₹" }) => (
  <Link to={`/coins/${id}`} >
    <VStack
      w={"52"}
      shadow={"lg"}
      padding={8}
      transition={"all 0.3s"}
      m={"4"}
      css={{
        "&:hover": {
          transform: "scale(1.1)",
        },
      }}
    >
      <Image
        src={img}
        w={"10"}
        h={"10"}
        objectFit={"contain"}
        alt={"exchange"}
      />
      <Heading size={"md"} noOfLines={1}>
        {symbol}
      </Heading>
      <Text noOfLines={1}>{name}</Text>
      <Text noOfLines={1}>{price ? `${currencySymbol}${price}` : "NA"}</Text>
    </VStack>
  </Link>
);
export default CoinKart;
