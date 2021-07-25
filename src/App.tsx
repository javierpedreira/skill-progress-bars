import React, { useState } from "react";
import "./App.css";
import { Container } from "@material-ui/core";
import SkillForm from "./components/SkillForm";
import { SkillProps } from "./components/Skill";
import { LegendDisplayProps } from "./components/LegendDisplay";
import SkillLists from "./components/SkillListProps";

const App = () => {
  const [skills, addSkill] = useState<Array<SkillProps>>([]);
  const [leftLegend, addLeftLegend] = useState<LegendDisplayProps | undefined>(
    undefined
  );
  const [middleLegend, addMiddleLegend] = useState<
    LegendDisplayProps | undefined
  >(undefined);
  const [rightLegend, addRightLegend] = useState<
    LegendDisplayProps | undefined
  >(undefined);

  const createSkill = (skillName: SkillProps) => {
    return addSkill((oldArray) => [...oldArray, skillName]);
  };

  const addLegend = (legendDesc: LegendDisplayProps, position: string) => {
    switch (position) {
      case "left":
        return addLeftLegend(legendDesc);
      case "middle":
        return addMiddleLegend(legendDesc);
      case "right":
        return addRightLegend(legendDesc);
    }
  };

  const reset = () => {
    return addSkill(() => []);
  };

  return (
    <div className="App">
      <Container>
        <SkillForm
          addSkillToState={createSkill}
          updateLegendDisplay={addLegend}
        />
        <SkillLists
          leftLegend={leftLegend}
          middleLegend={middleLegend}
          rightLegend={rightLegend}
          resetSkills={reset}
          skills={skills}
        />
      </Container>
    </div>
  );
};

export default App;
