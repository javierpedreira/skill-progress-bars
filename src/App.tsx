import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button } from "@material-ui/core";
import { LinearProgress } from "@material-ui/core";
import { toPng, toJpeg, toBlob, toPixelData, toSvg } from "html-to-image";
import download from "downloadjs";

const Skill = () => {
  return (
    <>
      <p>react</p>
      <LinearProgress variant="determinate" value={50} />
    </>
  );
};

const Boton = () => {
  const [skills, addSkill] = useState<Array<string>>([]);

  const createSkill = () => {
    return addSkill((oldArray) => [...oldArray, `Entry ${oldArray.length}`]);
  };

  const reset = () => {
    return addSkill((oldArray) => []);
  };

  const skillsRef = React.createRef();

  const skillList = () => {
    return (
      <ul id="skills">
        {skills.map((s) => (
          <li key={s}>
            <Skill key={s} />
          </li>
        ))}
      </ul>
    );
  };

  const stringSkills = () => {
    const data = document.getElementById("skills");

    return !!data
      ? toPng(data).then(function (dataUrl) {
          download(dataUrl, "my-node.png");
        })
      : null;
  };

  return (
    <>
      <Button onClick={createSkill} color="primary">
        Add new Skill
      </Button>
      {skillList()}
      <Button onClick={stringSkills} color="primary">
        Download
      </Button>
      <Button onClick={reset} color="primary">
        Reset
      </Button>
    </>
  );
};

const App = () => {
  return (
    <div className="App">
      <Boton />
    </div>
  );
};

export default App;
