import React from "react";
import { LinearProgress } from "@material-ui/core";

export interface SkillProps {
  name: string;
  level: number;
}

const SkillComponent = (props: SkillProps) => {
  const { name, level } = props;

  return (
    <>
      <p>{name}</p>
      <LinearProgress variant="determinate" value={level} />
    </>
  );
};

export default SkillComponent;
