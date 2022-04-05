import { Center, Heading, Text, VStack } from "@chakra-ui/react";

export default function MyBox({ place }) {
  return (
    <Center bg="tomato" h="100%" color="white">
      <VStack>
        <Heading size="4xl">
          {place === "" ? "👋 Hi There" : `I'm in ${place["place"]}`}
        </Heading>
        <Text fontSize="xl">
          {place === "" ? "" : `📌 [${place["0"]}, ${place["1"]}]`}{" "}
        </Text>
      </VStack>
    </Center>
  );
}