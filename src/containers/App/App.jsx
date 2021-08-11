import { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from "@components/Header";
import Container from "@material-ui/core/Container";
import routesConfig from "@routes/routesConfig";
import { createTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import { REPO_NAME } from '@constants/repo';






function App() {
  const [theme, setTheme] = useState(true);
  
  const appliedTheme = createTheme({
    palette: {
      type: theme ? 'light' : 'dark',
    },
  });
  

  return (
    <>
      <BrowserRouter basename={`/${REPO_NAME}/`}>

        <ThemeProvider theme={appliedTheme}>
          <CssBaseline />
          <Header theme={theme} setTheme={setTheme}/>
          <Toolbar /> 
          <Container>

            <Switch>
              {routesConfig.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  component={route.component}
                />
              ))}
            </Switch>

          </Container>

        </ThemeProvider>
      </BrowserRouter>
    </>
  );
}

export default App;




