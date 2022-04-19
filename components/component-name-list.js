import { Heading, Box, Link } from "@chakra-ui/react";

export default function ComponentNameList({ components, setId }) {
  const style = {
    marginTop: "30px",
    marginLeft: "20px",
  };
  const divStyle = {
    padding: "10px",
  };

  return (
    <div style={style}>
      {components.map((component) =>
        component != "arg1" ? (
          <Box
            w="100%"
            style={divStyle}
            key={component}
            onClick={() => setId(component)}
          >
            <Heading color="tomato">
              🧰
              <Link> {component}</Link>
            </Heading>
          </Box>
        ) : (
          " "
        )
      )}{" "}
    </div>
  );
}
