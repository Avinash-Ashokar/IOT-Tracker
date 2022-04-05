import {
  Button,
  Heading,
  Container,
  Box,
  Link,
  Flex,
  Spacer,
  Center,
} from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";

export default function ComponentIdList({
  id,
  setId,
  resdata,
  setChoice,
  choice,
}) {
  const parcontstyle = {
    margin: "0px",
    padding: "0px",
    height: "60vh",
  };
  const style = {
    height: "100%",
    marginTop: "20px",
  };

  const ele = { padding: "10px" };

  const selected = {
    padding: "10px",
    backgroundColor: "tomato",
    color: "white",
  };

  const compid = [];

  const ids = Object.keys(resdata[id]);

  Object.keys(resdata[id]).map((data, i) => {
    compid.push(ids[i]);
  });

  return (
    <Container style={parcontstyle}>
      <Box bg="papayawhip" w="100%" p={4} color="Black">
        <Flex>
          <Button
            leftIcon={<ArrowBackIcon />}
            colorScheme="tomato"
            variant="outline"
            onClick={() => {
              setId("");
              setChoice("");
            }}
          ></Button>
          <Spacer />
          <Heading>{id}</Heading>
          <div style={{ marginRight: "190px" }}></div>
        </Flex>
      </Box>
      <Container style={style}>
        {compid.map((id1) => (
          <Center
            key={id1}
            style={id1 === choice ? selected : ele}
            onClick={() => {
              setChoice(id1);
            }}
          >
            <Heading color={id1 === choice ? "white" : "tomato"}>
              <Link>{id1 === choice ? `↪ ${id1} ↩` : `${id1}`}</Link>
            </Heading>
          </Center>
        ))}
      </Container>
    </Container>
  );
}
