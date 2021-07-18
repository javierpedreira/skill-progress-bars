import React, { useState } from "react";
import { Button, TextField } from "@material-ui/core";

interface SkillForm {
  addSkillToState: (skillName: string) => void;
}

const SkillFormComponent = (props: SkillForm) => {
  const [skillName, setSkillName] = useState<string>("");
  const [currentLevel, setCurrentLevel] = useState<number>(0);

  const storeSkillName = (event: any) => {
    setSkillName(event.target.value);
  };

  const storeCurrentLevel = (event: any) => {
    setCurrentLevel(event.target.value);
  };

  const addNewSkill = () => {
    props.addSkillToState(skillName);
  };

  return (
    <form noValidate autoComplete="off">
      <TextField
        id="standard-basic"
        label="Skill name"
        size="small"
        onChange={storeSkillName}
      />

      <TextField
        id="standard-basic"
        label="Current level"
        size="small"
        onChange={storeCurrentLevel}
      />

      <Button onClick={addNewSkill} color="primary">
        Add new Skill
      </Button>
    </form>
  );
};

export default SkillFormComponent;
