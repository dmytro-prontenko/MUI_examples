import { InputAdornment, Stack, TextField, Typography } from "@mui/material";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const MUI_TextField = () => {
  return (
    <Stack direction={"column"} spacing={4}>
      <Typography variant="h2">TextField</Typography>
      <Stack direction={"column"} spacing={2}>
        <Typography variant="h5">TextField variants</Typography>
        <Stack direction={"row"} spacing={4}>
          <Stack direction={"column"} spacing={3}>
            <Typography variant="subtitle1">Outlined</Typography>
            <TextField label="Name" variant="outlined" />
          </Stack>
          <Stack direction={"column"} spacing={3}>
            <Typography variant="subtitle1">Filled</Typography>
            <TextField label="Name" variant="filled" />
          </Stack>
          <Stack direction={"column"} spacing={3}>
            <Typography variant="subtitle1">Standard</Typography>
            <TextField label="Name" variant="standard" />
          </Stack>
        </Stack>
      </Stack>

      <Stack direction={"column"} spacing={2}>
        <Typography variant="h5">TextField size and colors</Typography>
        <Stack direction={"row"} spacing={4}>
          <Stack direction={"column"} spacing={3}>
            <Typography variant="subtitle1">Small</Typography>
            <TextField
              label="Name"
              variant="outlined"
              size="small"
              color="success"
            />
          </Stack>
          <Stack direction={"column"} spacing={3}>
            <Typography variant="subtitle1">Medium</Typography>
            <TextField
              label="Name"
              variant="filled"
              size="medium"
              color="warning"
            />
          </Stack>
          <Stack direction={"column"} spacing={3}>
            <Typography variant="subtitle1">Large</Typography>
            <TextField
              label="Name"
              variant="standard"
              size="large"
              color="error"
            />
          </Stack>
        </Stack>
      </Stack>

      <Stack direction={"column"} spacing={2}>
        <Typography variant="h5">TextField form props</Typography>
        <Stack direction={"row"} spacing={4}>
          <Stack direction={"column"} spacing={3}>
            <Typography variant="subtitle1">Required</Typography>
            <TextField label="Form Input" required />
          </Stack>
          <Stack direction={"column"} spacing={3}>
            <Typography variant="subtitle1">Helper String</Typography>
            <TextField
              label="Helper String"
              helperText="Do not share your password"
            />
          </Stack>
          <Stack direction={"column"} spacing={3}>
            <Typography variant="subtitle1">Disabled</Typography>
            <TextField label="Disabled" disabled />
          </Stack>
          <Stack direction={"column"} spacing={3}>
            <Typography variant="subtitle1">Standard</Typography>
            <TextField label="Form Input" required />
          </Stack>
          <Stack direction={"column"} spacing={3}>
            <Typography variant="subtitle1">Read only</Typography>
            <TextField label="Read only" InputProps={{ readOnly: true }} />
          </Stack>
        </Stack>
        <Stack direction={"row"} spacing={4}>
          <Stack direction={"column"} spacing={3}>
            <Typography variant="subtitle1">startAdornment</Typography>
            <TextField
              label="startAdornment"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">$</InputAdornment>
                ),
              }}
            />
          </Stack>
          <Stack direction={"column"} spacing={3}>
            <Typography variant="subtitle1">endAdornment</Typography>
            <TextField
              label="endAdornment"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="end">kg</InputAdornment>
                ),
              }}
            />
          </Stack>
          <Stack direction={"column"} spacing={3}>
            <Typography variant="subtitle1">
              startAdornment with icon
            </Typography>
            <TextField
              label="startAdornment"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Visibility />
                  </InputAdornment>
                ),
              }}
            />
          </Stack>
          <Stack direction={"column"} spacing={3}>
            <Typography variant="subtitle1">endAdornment with icon</Typography>
            <TextField
              label="endAdornment"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="end">
                    <VisibilityOff />
                  </InputAdornment>
                ),
              }}
            />
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default MUI_TextField;
