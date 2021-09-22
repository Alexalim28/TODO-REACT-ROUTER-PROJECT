import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#8093F1",
      contrastText: "#fff",
    },
    secondary: {
      main: "#72DDF7",
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          [`&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline`]: {
            borderColor: "#560bad",
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          borderColor: "#8093F1",
        },
      },
    },
  },
});

export default theme;
