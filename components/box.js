import { Center, Heading, Text, VStack } from "@chakra-ui/react";

export default function MyBox({ place }) {
  return (
    <Center bg="tomato" h="100%" color="white">
      <VStack>
        <Heading size="4xl">
          {place === ""
            ? "👋 Hanon Asset Tracker"
            : `📌 [${place["0"].slice(0, 9)}, ${place["1"].slice(0, 9)}]`}{" "}
        </Heading>
        <Text fontSize="xl">
          {place === "" ? "" : `I'm in ${place["place"]}`}
        </Text>
      </VStack>
    </Center>
  );
}
