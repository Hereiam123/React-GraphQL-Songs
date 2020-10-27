import React from "react";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import blueGrey from "@material-ui/core/colors/blueGrey";
import orange from "@material-ui/core/colors/orange";
import CssBaseline from "@material-ui/core/CssBaseline";

// A theme with custom primary and secondary color.
// It's optional.
const theme = createMuiTheme({
  palette: {
    primary: {
      light: blueGrey[500],
      main: blueGrey[700],
      dark: blueGrey[900],
    },
    secondary: {
      light: orange[200],
      main: orange[500],
      dark: orange[700],
    },
  },
  typography: {
    useNextVariants: true,
  },
});

const withRoot = (Component) => {
  const WithRoot = (props) => {
    // MuiThemeProvider makes the theme available down the React tree
    // thanks to React context.
    return (
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        {/* https://material-ui.com/getting-started/usage/#cssbaseline */}
        <CssBaseline />
        <Component {...props} />
      </ThemeProvider>
    );
  };

  return WithRoot;
};

export default withRoot;
