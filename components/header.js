import { Box, Text } from "@chakra-ui/react";

export default function MyHeader() {
  return (
    <Box bg="#393E46" w="100%" p={4} h="10vh" color="Black">
      <Text fontSize="3xl" color="white">
        {" "}
        Track your Components here 🧭{" "}
      </Text>
    </Box>
  );
}
