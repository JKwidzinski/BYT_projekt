import React from "react";
import {
    AppBar,
    Container,
    MenuItem,
    Select,
    Toolbar,
    Typography,
  } from "@material-ui/core";
  import {
    createTheme,
    makeStyles,
    ThemeProvider,
  } from "@material-ui/core/styles";
  import { useNavigate } from "react-router-dom";
  import { CryptoState } from "../CryptoContext";
  import SelectButton from "../components/SelectButton";
  
  const useStyles = makeStyles((theme) => ({
    title: {
      flex: 1,
      color: "gold",
      fontFamily: "Montserrat",
      fontWeight: "bold",
      cursor: "pointer",
    },
  }));
  
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#fff",
      },
      type: "dark",
    },
  });
  
  function Header({setLoginUser, user}) {
    const classes = useStyles();
    const { currency, setCurrency } = CryptoState();
  
    const navigate = useNavigate();
  
    return (
      <ThemeProvider theme={darkTheme}>
        <AppBar color="transparent" position="static">
          <Container>
            <Toolbar>
              <Typography
                onClick={() => navigate(`/`)}
                variant="h6"
                className={classes.title}
              >
                CryptoTrading
              </Typography>
              
              <Select
                variant="outlined"
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={currency}
                style={{ width: 100, height: 40, marginLeft: 15 }}
                onChange={(e) => setCurrency(e.target.value)}
              >
                <MenuItem value={"USD"}>USD</MenuItem>
                <MenuItem value={"PLN"}>PLN</MenuItem>
              </Select>
              <SelectButton color="inherit" onClick={() => navigate('/login')}>Log in</SelectButton>
              <SelectButton color="inherit" onClick={() => navigate('/register')}>Register</SelectButton>
            </Toolbar>
          </Container>
        </AppBar>
      </ThemeProvider>
    );
  }
  
  export default Header;