import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddTodo from "./pages/AddTodo";
import Details from "./pages/Details";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./Theme";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import { Box } from "@material-ui/system";

const drawerWidth = 250;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Header drawerWidth={drawerWidth} />
          <SideBar drawerWidth={drawerWidth} />
          <Switch>
            <Route path="/" exact>
              <Home drawerWidth={drawerWidth} />
            </Route>
            <Route path="/addTodo/" component={AddTodo} />
            <Route path="/updateTodo/:id" component={AddTodo} />
            <Route path="/details/:id" component={Details} />
          </Switch>
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;
