import { Box, MenuItem, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { SelectWrapper } from "./MUI.styled";

const MUI_Select = () => {
  const [value, setValue] = useState("");
  const [values, setValues] = useState([]);
  console.log({ value });
  console.log({ values });

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleMultiChange = (e) => {
    const value = e.target.value;
    setValues(typeof value === "string" ? value.split(", ") : value);
  };
  return (
    <SelectWrapper>
      <Typography variant="h2">Select</Typography>
      {/* // Box додавати не обовʼязково, але треба брати до уваги fullWidth на TextField */}
      <Typography variant="h5">
        Using &lt;TextField&gt; and <em>select</em> prop
      </Typography>

      <Box width={"250px"}>
        <Typography variant="subtitle1">Single value select</Typography>

        <TextField
          label="Select a country"
          select
          value={value}
          onChange={handleChange}
          fullWidth
        >
          <MenuItem value="value-1">Option 1</MenuItem>
          <MenuItem value="value-2">Option 2</MenuItem>
          <MenuItem value="value-3">Option 3</MenuItem>
        </TextField>
      </Box>
      <Box width={"250px"}>
        <Typography variant="subtitle1">Multi select</Typography>
        <TextField
          label="Select a country"
          select
          value={values}
          onChange={handleMultiChange}
          fullWidth
          SelectProps={{ multiple: true }}
          size="small"
          helperText={"Please choose options"}
          color="secondary"
          required
        >
          <MenuItem value="value-1">Option 1</MenuItem>
          <MenuItem value="value-2">Option 2</MenuItem>
          <MenuItem value="value-3">Option 3</MenuItem>
        </TextField>
      </Box>
      <Typography variant="body1">
        Всі властивості &lt;TextField&gt;, такі як size, color, helperText
        працюють тут теж
      </Typography>
    </SelectWrapper>
  );
};

export default MUI_Select;
