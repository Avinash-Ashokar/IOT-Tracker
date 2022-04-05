import { Grid, GridItem } from "@chakra-ui/react";
import MyTable from "../components/table";
import MyBox from "../components/box";
import ComponentList from "../components/component-list";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Home() {
  const [id, setId] = useState("");
  const [resdata, setResdata] = useState([]);

  const [choice, setChoice] = useState("");

  const [place, setPlace] = useState("");

  var chosen_one = "";
  var pl = "";

  if (choice != "" && id != "") {
    chosen_one = resdata[id][choice]["History"];
    pl = resdata[id][choice]["Curr_loc"];
  }

  const API_URL =
    "https://ap-south-1.aws.data.mongodb-api.com/app/application-2-ysiep/endpoint/iot";

  useEffect(() => {
    const fetch_data = setInterval(async () => {
      const { data } = await axios(API_URL);
      setResdata(data[1]);
      console.log(data[1]);
    }, 1000);
    return () => clearInterval(fetch_data);
  }, [resdata]);

  return (
    <Grid
      h="87vh"
      templateRows="repeat(2, 1fr)"
      templateColumns="repeat(6, 1fr)"
      gap={4}
      m={3}
    >
      <GridItem rowSpan={2} colSpan={2} bg="papayawhip">
        <ComponentList
          id={id}
          setId={setId}
          resdata={resdata}
          setChoice={setChoice}
          setPlace={setPlace}
          choice={choice}
        />
      </GridItem>
      <GridItem colSpan={4} bg="papayawhip">
        <MyBox place={pl} />
      </GridItem>
      <GridItem colSpan={4}>
        <MyTable chosen_one={chosen_one} />
      </GridItem>
    </Grid>
  );
}
