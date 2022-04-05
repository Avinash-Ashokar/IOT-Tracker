import { Center, Heading, Text, VStack } from "@chakra-ui/react";

export default function MyBox({ place }) {
  return (
    <Center bg="tomato" h="100%" color="white">
      <VStack>
        <Heading size="4xl">
          {place === "" ? "👋 Hi There" : `📌 [${place["0"]}, ${place["1"]}]`}{" "}
        </Heading>
        <Text fontSize="xl">
          {place === "" ? "" : `I'm in ${place["place"]}`}
        </Text>
      </VStack>
    </Center>
  );
}
