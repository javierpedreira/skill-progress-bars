import React, { useState } from "react";
import { Box, TextField } from "@material-ui/core";
import { LegendDisplayProps } from "./LegendDisplay";

export interface LegendProps {
  label: string;
  updateLegendDisplay: (legend: LegendDisplayProps) => void;
}

const Legend = (props: LegendProps) => {
  const [legendName, setLegendName] = useState<string>("");
  const [legendDescription, setLegendDescription] = useState<string>("");

  const onChangeName = (event: any) => {
    setLegendName(event.target.value);

    updateLegendDisplay({
      label: legendName,
      description: legendDescription,
    });
  };

  const onChangeDesc = (event: any) => {
    setLegendDescription(event.target.value);

    updateLegendDisplay({
      label: legendName,
      description: legendDescription,
    });
  };

  const { label, updateLegendDisplay } = props;
  return (
    <Box>
      <TextField
        id="standard-basic"
        label={label}
        size="small"
        onChange={onChangeName}
      />
      <TextField
        id="standard-basic"
        label="Description"
        multiline
        rows={4}
        onChange={onChangeDesc}
      />
    </Box>
  );
};

export default Legend;
