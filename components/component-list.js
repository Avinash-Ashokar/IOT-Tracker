import { useState } from "react";
import ComponentNameList from "./component-name-list";
import ComponentIdList from "./component-id-list";

export default function ComponentList({
  id,
  setId,
  resdata,
  setChoice,
  setPlace,
  choice,
}) {
  var components = [];

  const names = Object.keys(resdata);
  const [color, setColor] = useState("papayawhip");
  Object.keys(resdata).map((data, i) => {
    if (i > 0) {
      components.push(names[i]);
    }
  });

  return id ? (
    <ComponentIdList
      id={id}
      setId={setId}
      resdata={resdata}
      setChoice={setChoice}
      setPlace={setPlace}
      color={color}
      setColor={setColor}
      choice={choice}
    />
  ) : (
    <ComponentNameList components={components} setId={setId} />
  );
}
