import React, { useState } from "react";
import { Box, Button, Grid, TextField } from "@material-ui/core";
import { SkillProps } from "./Skill";
import { LegendDisplayProps } from "./LegendDisplay";
import Legend from "./Legend";

interface SkillFormProps {
  addSkillToState: (skillName: SkillProps) => void;
  updateLegendDisplay: (legend: LegendDisplayProps, position: string) => void;
}

const SkillFormComponent = (props: SkillFormProps) => {
  const [skillName, setSkillName] = useState<string>("");
  const [currentLevel, setCurrentLevel] = useState<number>(0);
  const [leftLegend, addLeftLegend] = useState<LegendDisplayProps | undefined>(
    undefined
  );
  const [middleLegend, addMiddleLegend] = useState<
    LegendDisplayProps | undefined
  >(undefined);
  const [rightLegend, addRightLegend] = useState<
    LegendDisplayProps | undefined
  >(undefined);

  const storeSkillName = (event: any) => {
    setSkillName(event.target.value);
  };

  const storeCurrentLevel = (event: any) => {
    setCurrentLevel(event.target.value);
  };

  const legendLabel = (position: string) => {
    switch (position) {
      case "left":
        return !!leftLegend ? leftLegend.label : "";
      case "middle":
        return !!middleLegend ? middleLegend.label : "";
      case "right":
        return !!rightLegend ? rightLegend.label : "";
      default:
        return "";
    }
  };

  const addNewSkill = () => {
    props.addSkillToState({
      name: skillName,
      level: currentLevel,
      noKnowledge: legendLabel("left"),
      average: legendLabel("middle"),
      competent: legendLabel("right"),
    });
  };

  const addLeftLegendToState = (legend: LegendDisplayProps) => {
    addLeftLegend(legend);

    props.updateLegendDisplay(legend, "left");
  };

  const addMiddleLegendToState = (legend: LegendDisplayProps) => {
    addMiddleLegend(legend);

    props.updateLegendDisplay(legend, "middle");
  };

  const addRightLegendToState = (legend: LegendDisplayProps) => {
    addRightLegend(legend);

    props.updateLegendDisplay(legend, "right");
  };

  return (
    <form noValidate autoComplete="off">
      <Box>
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
          type="number"
          onChange={storeCurrentLevel}
        />
      </Box>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Legend
          label="No Knowledge"
          updateLegendDisplay={addLeftLegendToState}
        ></Legend>
        <Legend
          label="Average"
          updateLegendDisplay={addMiddleLegendToState}
        ></Legend>
        <Legend
          label="Master"
          updateLegendDisplay={addRightLegendToState}
        ></Legend>
      </Grid>
      <Box>
        <Button onClick={addNewSkill} color="primary">
          Add new Skill
        </Button>
      </Box>
    </form>
  );
};

export default SkillFormComponent;
