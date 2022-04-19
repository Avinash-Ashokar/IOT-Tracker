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
                    Description Units Values Maximum Machining Dia 12 mm Maximum
                    Machining Length 80 mm Spindle through Hole Dia 16 mm Max
                    Main Spindle Speed rpm 12000 Max Sub Spindle Speed rpm 12000
                    Max Spindle Speed of Gang Rotary Tool rpm 6000 X1 -Axis
                    Rapid Traverse m/min 24 Y1 -Axis Rapid Traverse m/min 24
                    X2,Z1,Z2 -Axis Rapid Traverse m/min 32 Main and Sub Spindle
                    Power kW 1.5/2.2 Spindle Motor Power kW 1.5/2.2 No of Tools
                    Maximum 20 Over all Dimensions (LxWxH) mm 1870 x 1170 x 1700
                  </PopoverHeader>
                  <PopoverCloseButton />
                </PopoverContent>
              </Portal>
            </Popover>
          </Center>
        ))}
      </Container>
    </Container>
  );
}
