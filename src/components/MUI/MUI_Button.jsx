import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import SendIcon from "@mui/icons-material/Send";
import {
  Button,
  ButtonGroup,
  IconButton,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { ButtonsWrapper } from "./MUI.styled";

const MUI_Button = () => {
  const [formats, SetFormats] = useState(null);

  const handleFormatChange = (_e, updatedFormats) => {
    SetFormats(updatedFormats);
  };

  useEffect(() => {
    if (formats === null) return
    alert(`${formats} was selected`);
  }, [formats]);
  return (
    <Stack direction={"column"} spacing={10}>
      <Stack direction={"column"} spacing={4}>
        <Typography variant="h2">Buttons</Typography>

        <Typography variant="h5">Buttons variants</Typography>
        <ButtonsWrapper>
          <Button variant="text">Text</Button>
          <Button variant="text" href="http://google.com" target="_blank">
            Not button(see markup)
          </Button>
          <Button variant="contained">Contained</Button>
          <Button variant="outlined">Outlined</Button>
        </ButtonsWrapper>

        <Typography variant="h5">Buttons variants with colors</Typography>

        <Typography variant="subtitle1">Contained</Typography>
        <ButtonsWrapper>
          <Button variant="contained" color="primary">
            Primary
          </Button>
          <Button variant="contained" color="secondary">
            Secondary
          </Button>
          <Button variant="contained" color="error">
            Error
          </Button>
          <Button variant="contained" color="warning">
            Warning
          </Button>
          <Button variant="contained" color="info">
            Info
          </Button>
          <Button variant="contained" color="success">
            Success
          </Button>
        </ButtonsWrapper>

        <Typography variant="subtitle1">Outlined</Typography>
        <ButtonsWrapper>
          <Button variant="outlined" color="primary">
            Primary
          </Button>
          <Button variant="outlined" color="secondary">
            Secondary
          </Button>
          <Button variant="outlined" color="error">
            Error
          </Button>
          <Button variant="outlined" color="warning">
            Warning
          </Button>
          <Button variant="outlined" color="info">
            Info
          </Button>
          <Button variant="outlined" color="success">
            Success
          </Button>
        </ButtonsWrapper>

        <Typography variant="subtitle1">Text</Typography>
        <ButtonsWrapper>
          <Button variant="text" color="primary">
            Primary
          </Button>
          <Button variant="text" color="secondary">
            Secondary
          </Button>
          <Button variant="text" color="error">
            Error
          </Button>
          <Button variant="text" color="warning">
            Warning
          </Button>
          <Button variant="text" color="info">
            Info
          </Button>
          <Button variant="text" color="success">
            Success
          </Button>
        </ButtonsWrapper>

        <Typography variant="h5">Buttons size</Typography>

        <ButtonsWrapper>
          <Button variant="text" size="small">
            Text small
          </Button>
          <Button variant="contained" size="small">
            Contained small
          </Button>
          <Button variant="outlined" size="small">
            Outlined small
          </Button>
        </ButtonsWrapper>

        <ButtonsWrapper>
          <Button variant="text" size="medium">
            Text medium
          </Button>
          <Button variant="contained" size="medium">
            Contained medium
          </Button>
          <Button variant="outlined" size="medium">
            Outlined medium
          </Button>
        </ButtonsWrapper>

        <ButtonsWrapper>
          <Button variant="text" size="large">
            Text large
          </Button>
          <Button variant="contained" size="large">
            Contained large
          </Button>
          <Button variant="outlined" size="large">
            Outlined large
          </Button>
        </ButtonsWrapper>

        <Stack direction={"column"} spacing={4}>
          <Typography variant="h5">Buttons with icons</Typography>

          <Typography variant="subtitle1">startIcon</Typography>
          <ButtonsWrapper>
            <Button variant="text" color="primary" startIcon={<SendIcon />}>
              Send
            </Button>
            <Button
              variant="contained"
              color="primary"
              startIcon={<SendIcon />}
            >
              Send
            </Button>
            <Button variant="outlined" color="primary" startIcon={<SendIcon />}>
              Send
            </Button>
          </ButtonsWrapper>

          <Typography variant="subtitle1">endIcon</Typography>
          <ButtonsWrapper>
            <Button variant="text" color="primary" endIcon={<SendIcon />}>
              Send
            </Button>
            <Button variant="contained" color="primary" endIcon={<SendIcon />}>
              Send
            </Button>
            <Button variant="outlined" color="primary" endIcon={<SendIcon />}>
              Send
            </Button>
          </ButtonsWrapper>
        </Stack>

        <Stack direction={"column"} spacing={4}>
          <Typography variant="h5">
            Icon button using &lt;IconButton with colors and sizes/&gt;
          </Typography>
          <Stack direction={"row"} spacing={4}>
            <IconButton>
              <SendIcon />
            </IconButton>
            <IconButton color="error">
              <SendIcon />
            </IconButton>
          </Stack>
        </Stack>

        <Stack direction={"column"} spacing={4}>
          <Typography variant="h5">Buttons elevation</Typography>

          <Typography variant="subtitle1">With elevation</Typography>
          <ButtonsWrapper>
            <Button variant="contained" color="primary">
              Primary
            </Button>
            <Button variant="contained" color="secondary">
              Secondary
            </Button>
            <Button variant="contained" color="error">
              Error
            </Button>
            <Button variant="contained" color="warning">
              Warning
            </Button>
            <Button variant="contained" color="info">
              Info
            </Button>
            <Button variant="contained" color="success">
              Success
            </Button>
          </ButtonsWrapper>

          <Typography variant="subtitle1">Without elevation</Typography>
          <ButtonsWrapper>
            <Button variant="contained" color="primary" disableElevation>
              Primary
            </Button>
            <Button variant="contained" color="secondary" disableElevation>
              Secondary
            </Button>
            <Button variant="contained" color="error" disableElevation>
              Error
            </Button>
            <Button variant="contained" color="warning" disableElevation>
              Warning
            </Button>
            <Button variant="contained" color="info" disableElevation>
              Info
            </Button>
            <Button variant="contained" color="success" disableElevation>
              Success
            </Button>
          </ButtonsWrapper>
        </Stack>

        <Stack direction={"column"} spacing={4}>
          <Typography variant="h5">Buttons ripple(click effect)</Typography>

          <Typography variant="subtitle1">With ripple</Typography>
          <ButtonsWrapper>
            <Button variant="contained" color="primary">
              Primary
            </Button>
            <Button variant="contained" color="secondary">
              Secondary
            </Button>
            <Button variant="contained" color="error">
              Error
            </Button>
            <Button variant="contained" color="warning">
              Warning
            </Button>
            <Button variant="contained" color="info">
              Info
            </Button>
            <Button variant="contained" color="success">
              Success
            </Button>
          </ButtonsWrapper>

          <Typography variant="subtitle1">Without ripple</Typography>
          <ButtonsWrapper>
            <Button variant="contained" color="primary" disableRipple>
              Primary
            </Button>
            <Button variant="contained" color="secondary" disableRipple>
              Secondary
            </Button>
            <Button variant="contained" color="error" disableRipple>
              Error
            </Button>
            <Button variant="contained" color="warning" disableRipple>
              Warning
            </Button>
            <Button variant="contained" color="info" disableRipple>
              Info
            </Button>
            <Button variant="contained" color="success" disableRipple>
              Success
            </Button>
          </ButtonsWrapper>
        </Stack>

        <Typography variant="h2">ButtonGroup</Typography>

        <Typography variant="subtitle1">Without &lt;ButtonGroup&gt;</Typography>
        <ButtonsWrapper>
          <Stack direction={"row"}>
            <Button variant="contained">Left</Button>
            <Button variant="contained">Center</Button>
            <Button variant="contained">Right</Button>
          </Stack>
          <Stack direction={"row"}>
            <Button variant="outlined">Left</Button>
            <Button variant="outlined">Center</Button>
            <Button variant="outlined">Right</Button>
          </Stack>
          <Stack direction={"row"}>
            <Button variant="text">Left</Button>
            <Button variant="text">Center</Button>
            <Button variant="text">Right</Button>
          </Stack>
        </ButtonsWrapper>

        <Typography variant="subtitle1">With &lt;ButtonGroup&gt;</Typography>
        <ButtonsWrapper>
          <ButtonGroup variant="contained">
            <Button>Left</Button>
            <Button>Center</Button>
            <Button>Right</Button>
          </ButtonGroup>
          <ButtonGroup variant="outlined">
            <Button>Left</Button>
            <Button>Center</Button>
            <Button>Right</Button>
          </ButtonGroup>
          <ButtonGroup variant="text">
            <Button>Left</Button>
            <Button>Center</Button>
            <Button>Right</Button>
          </ButtonGroup>
        </ButtonsWrapper>

        <Typography variant="subtitle1">
          With &lt;ButtonGroup&gt; horizontal orientation
        </Typography>
        <ButtonsWrapper>
          <ButtonGroup variant="contained">
            <Button>Left</Button>
            <Button>Center</Button>
            <Button>Right</Button>
          </ButtonGroup>
          <ButtonGroup variant="outlined">
            <Button>Left</Button>
            <Button>Center</Button>
            <Button>Right</Button>
          </ButtonGroup>
          <ButtonGroup variant="text">
            <Button>Left</Button>
            <Button>Center</Button>
            <Button>Right</Button>
          </ButtonGroup>
        </ButtonsWrapper>

        <Typography variant="subtitle1">
          With &lt;ButtonGroup&gt; vertical orientation
        </Typography>
        <ButtonsWrapper>
          <ButtonGroup variant="contained" orientation="vertical">
            <Button>Left</Button>
            <Button>Center</Button>
            <Button>Right</Button>
          </ButtonGroup>
          <ButtonGroup variant="outlined" orientation="vertical">
            <Button>Left</Button>
            <Button>Center</Button>
            <Button>Right</Button>
          </ButtonGroup>
          <ButtonGroup variant="text" orientation="vertical">
            <Button>Left</Button>
            <Button>Center</Button>
            <Button>Right</Button>
          </ButtonGroup>
        </ButtonsWrapper>

        <Typography variant="subtitle1">
          With &lt;ButtonGroup&gt; sizes
        </Typography>
        <ButtonsWrapper>
          <ButtonGroup
            variant="contained"
            color="primary"
            size="small"
            aria-label="small button group"
          >
            <Button>Left</Button>
            <Button>Center</Button>
            <Button>Right</Button>
          </ButtonGroup>
          <ButtonGroup variant="contained" color="secondary" size="medium">
            <Button>Left</Button>
            <Button>Center</Button>
            <Button>Right</Button>
          </ButtonGroup>
          <ButtonGroup variant="contained" color="success" size="large">
            <Button>Left</Button>
            <Button>Center</Button>
            <Button>Right</Button>
          </ButtonGroup>
        </ButtonsWrapper>

        <Typography variant="h2">ToggleButton, ToggleButtonGroup </Typography>

        <ButtonsWrapper>
          <ToggleButtonGroup
            aria-label="text formatting"
            value={formats}
            onChange={handleFormatChange}
            exclusive
          >
            <ToggleButton value="bold" aria-label="bold">
              <FormatBoldIcon />
            </ToggleButton>
            <ToggleButton value="italic" aria-label="italic">
              <FormatItalicIcon />
            </ToggleButton>
            <ToggleButton value="underlined" aria-label="underlined">
              <FormatUnderlinedIcon />
            </ToggleButton>
          </ToggleButtonGroup>
        </ButtonsWrapper>
      </Stack>
    </Stack>
  );
};

export default MUI_Button;
