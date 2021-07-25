import Box from "@material-ui/core/Box";
import React from "react";

export interface LegendDisplayProps {
  label: string;
  description?: string;
}

const LegendDisplay = (props: LegendDisplayProps) => {
  const { label, description } = props;
  return (
    <Box>
      <Box>{label}</Box>
      <Box>{description}</Box>
    </Box>
  );
};

export default LegendDisplay;
