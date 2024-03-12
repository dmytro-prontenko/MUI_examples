import {
  Box,
  FormControl,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
  Typography,
  FormHelperText,
} from "@mui/material";
import { useState } from "react";
import { RadioWrapper } from "./MUI.styled";

const MUI_Radio = () => {
  const [value, setValue] = useState("");
  console.log({ value });

  const handleChangeValue = (e) => {
    setValue(e.target.value);
  };
  return (
    <RadioWrapper>
      <Typography variant="h2">Radio</Typography>
      <Box width={"250px"}>
        <FormControl>
          <FormLabel id="job-experience-group-label">
            Years of experience
          </FormLabel>
          <RadioGroup
            name="job-experience-group"
            aria-labelledby="job-experience-group-label"
            value={value}
            onChange={handleChangeValue}
          >
            <FormControlLabel control={<Radio />} label="0-2" value="0-2" />
            <FormControlLabel control={<Radio />} label="3-5" value="3-5" />
            <FormControlLabel control={<Radio />} label="6-10" value="6-10" />
          </RadioGroup>
        </FormControl>
      </Box>

      <Box>
        <Typography variant="subtitle1">Radio in a row</Typography>
        <FormControl>
          <FormLabel id="job-experience-group-label">
            Years of experience
          </FormLabel>
          <RadioGroup
            name="job-experience-group"
            aria-labelledby="job-experience-group-label"
            value={value}
            onChange={handleChangeValue}
            row
          >
            <FormControlLabel control={<Radio />} label="0-2" value="0-2" />
            <FormControlLabel control={<Radio />} label="3-5" value="3-5" />
            <FormControlLabel control={<Radio />} label="6-10" value="6-10" />
          </RadioGroup>
        </FormControl>
      </Box>

      <Box>
        <Typography variant="subtitle1">Sizes and colors</Typography>
        <FormControl>
          <FormLabel id="job-experience-group-label">
            Years of experience
          </FormLabel>
          <RadioGroup
            name="job-experience-group"
            aria-labelledby="job-experience-group-label"
            value={value}
            onChange={handleChangeValue}
            row
          >
            <FormControlLabel
              control={<Radio size="small" color="success" />}
              label="0-2"
              value="0-2"
            />
            <FormControlLabel
              control={<Radio size="medium" color="secondary" />}
              label="3-5"
              value="3-5"
            />
            <FormControlLabel
              control={<Radio size="large" color="error" />}
              label="6-10"
              value="6-10"
            />
          </RadioGroup>
        </FormControl>
      </Box>

      <Box>
        <Typography variant="subtitle1">Helper text and FormControl error state</Typography>
        <FormControl error>
          <FormLabel id="job-experience-group-label">
            Years of experience
          </FormLabel>
          <RadioGroup
            name="job-experience-group"
            aria-labelledby="job-experience-group-label"
            value={value}
            onChange={handleChangeValue}
            row
          >
            <FormControlLabel
              control={<Radio size="small" color="primary" />}
              label="0-2"
              value="0-2"
            />
            <FormControlLabel
              control={<Radio size="medium" color="success" />}
              label="3-5"
              value="3-5"
            />
            <FormControlLabel
              control={<Radio size="large" color="warning" />}
              label="6-10"
              value="6-10"
            />
          </RadioGroup>
          <FormHelperText>Error occurred!</FormHelperText>
        </FormControl>
      </Box>
    </RadioWrapper>
  );
};

export default MUI_Radio;
