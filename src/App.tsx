import React, { useState } from "react";
import "./App.css";
import { Button } from "@material-ui/core";
import { toPng } from "html-to-image";
import download from "downloadjs";
import SkillForm from "./components/SkillForm";
import Skill, { SkillProps } from "./components/Skill";

const Boton = () => {
  const [skills, addSkill] = useState<Array<SkillProps>>([]);

  const createSkill = (skillName: SkillProps) => {
    return addSkill((oldArray) => [...oldArray, skillName]);
  };

  const reset = () => {
    return addSkill(() => []);
  };

  const skillList = () => {
    return (
      <ul id="skills">
        {skills.map((s) => (
          <li key={s.name}>
            <Skill key={s.name} name={s.name} level={s.level} />
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
      <SkillForm addSkillToState={createSkill} />

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
