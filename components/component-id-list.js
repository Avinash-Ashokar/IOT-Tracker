import {
  Button,
  Heading,
  Container,
  Box,
  Link,
  Flex,
  Spacer,
  Center,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  Portal,
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
          <div style={{ marginRight: "110px" }}></div>
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
            <Popover trigger="hover">
              <PopoverTrigger>
                <Heading color={id1 === choice ? "white" : "tomato"}>
                  <Link>{id1 === choice ? `↪ ${id1} ↩` : `${id1}`}</Link>
                </Heading>
              </PopoverTrigger>
              <Portal>
                <PopoverContent>
                  <PopoverArrow />
                  <PopoverHeader>
                    Machine Tool 500 X 300 / ZNC Work tank size 725 X 415 X 315
                    mm Work table size 500 X 300 mm T slots for fixing 3 of 10
                    mm Longitudinal travel (X) 280 mm Transverse travel (Y)
                    200mm Quill Travel (Z) 250 mm Max .permitted load on the
                    table 175 kg Max. electrode weight 50 kg Max. height above
                    the table 250mm Servo system (Z axis) DC servo / AC servo
                    for ZNC Filter element 10 μ paper filter Pimp motor rating
                    1HP, 3 phase Overall dimensions 1300 x 1100 x 2100 Pulse
                    Generator Max. working current 35 + 2 Amp Max. MRR(Copper to
                    Steel) (Graphite to Steel) 240 mm3/min 300 mm3/min
                  </PopoverHeader>
                </PopoverContent>
              </Portal>
            </Popover>
          </Center>
        ))}
      </Container>
    </Container>
  );
}
