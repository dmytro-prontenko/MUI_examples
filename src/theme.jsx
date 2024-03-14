import { createTheme } from "@mui/material";

export const theme = createTheme({
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          // Outlined
          "& .MuiOutlinedInput-root": {
            color: "#02101F",
            // колір рамки input
            "& .MuiOutlinedInput-notchedOutline": {
              borderRadius: "16px",
              border: "1px solid var(--secondary-accent-colour, #011B35)",
            },
            // колір активного input
            "&.Mui-focused": {
              "& .MuiOutlinedInput-notchedOutline": {
                borderRadius: "16px",
                border: "1.5px solid var(--accent-colour, #0E0ADB)",
              },
            },
            "&:hover:not(.Mui-focused)": {
              "& .MuiOutlinedInput-notchedOutline": {
                border: "1px solid var(--accent-colour, #0E0ADB)",
              },
            },
          },
          // label input
          "& .MuiInputLabel-outlined": {
            color: "#000",
            fontSize: "14px",
            fontStyle: "normal",
            fontWeight: "300",
            height: "auto",
            "&.Mui-focused": {
              color: "var(--accent-colour, #0E0ADB)",
              padding: "0 0 0 4px",
            },
          },
          "&.MuiInputLabel-root": {
            // top: "-3px",
            // left: 0,
          },
        },
      },
    },
  },
});
