import React from "react";
import { Box, Grid, LinearProgress } from "@material-ui/core";

export interface SkillProps {
  name: string;
  level: number;
  noKnowledge: string;
  average: string;
  competent: string;
}

const SkillComponent = (props: SkillProps) => {
  const { name, level, noKnowledge, average, competent } = props;

  return (
    <Box>
      <Box>
        <p>{name}</p>
      </Box>
      <Box width={"100%"}>
        <Box>
          <LinearProgress variant="determinate" value={level} />
        </Box>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid>
            <p>{noKnowledge}</p>
          </Grid>
          <Grid item xs>
            <p>{average}</p>
          </Grid>
          <Grid>
            <p>{competent}</p>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default SkillComponent;
