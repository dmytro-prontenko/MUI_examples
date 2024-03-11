import "./App.css";

import { Divider, Stack } from "@mui/material";
import MUITypography from "./components/MUI_Typography";
import MUI_Button from "./components/MUI_Button";
import MUI_TextField from "./components/MUI_TextField";

function App() {
  return (
    <>
      <Stack>
        <MUITypography />
        <Divider />
        <MUI_Button />
        <Divider />
        <MUI_TextField />
        <Divider />
      </Stack>
    </>
  );
}

export default App;
