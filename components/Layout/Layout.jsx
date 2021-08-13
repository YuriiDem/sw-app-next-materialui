import { useState } from 'react';
import Link from 'next/link'
// import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from "../Header";
import Container from "@material-ui/core/Container";
// import routesConfig from "@routes/routesConfig";
import { createTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
// import { REPO_NAME } from '@constants/repo';
import Head from 'next/head'





function Layout({ children }) {
  const [theme, setTheme] = useState(true);

  const appliedTheme = createTheme({
    palette: {
      type: theme ? 'light' : 'dark',
    },
  });


  return (
    <>

      <div>
        <Head>
          <title>SW NEXT App for QS</title>
        </Head>
      </div>

      <ThemeProvider theme={appliedTheme}>
        <CssBaseline />

        <Header theme={theme} setTheme={setTheme} />
        <Toolbar />

        <Container>
          {children}
        </Container>

      </ThemeProvider>

    </>
  );
}

export default Layout;




