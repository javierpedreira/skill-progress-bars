import React from "react";
import Skill, { SkillProps } from "./Skill";
import { Box, Button } from "@material-ui/core";

import { toPng } from "html-to-image";
import download from "downloadjs";
import LegendDisplay, { LegendDisplayProps } from "./LegendDisplay";

interface SkillListsProps {
  skills: SkillProps[];
  leftLegend: LegendDisplayProps | undefined;
  middleLegend: LegendDisplayProps | undefined;
  rightLegend: LegendDisplayProps | undefined;
  resetSkills: () => void;
}

const SkillLists = (props: SkillListsProps) => {
  const stringSkills = () => {
    const data = document.getElementById("skills");

    return !!data
      ? toPng(data).then(function (dataUrl) {
          download(dataUrl, "my-node.png");
        })
      : null;
  };

  return (
    <Box>
      <Box id="skills">
        {props.leftLegend && (
          <LegendDisplay
            label={props.leftLegend.label}
            description={props.leftLegend.description}
          />
        )}
        {props.middleLegend && (
          <LegendDisplay
            label={props.middleLegend.label}
            description={props.middleLegend.description}
          />
        )}
        {props.rightLegend && (
          <LegendDisplay
            label={props.rightLegend.label}
            description={props.rightLegend.description}
          />
        )}

        <ul>
          {props.skills.map((s) => (
            <li key={s.name}>
              <Skill
                key={s.name}
                name={s.name}
                level={s.level}
                noKnowledge={s.noKnowledge}
                average={s.average}
                competent={s.competent}
              />
            </li>
          ))}
        </ul>
      </Box>
      <Box>
        <Button onClick={stringSkills} color="primary">
          Download
        </Button>
        <Button onClick={props.resetSkills} color="primary">
          Reset
        </Button>
      </Box>
    </Box>
  );
};

export default SkillLists;
