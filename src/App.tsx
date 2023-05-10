import { ApolloProvider } from '@apollo/client';
import { client } from './graphql/client';
import {theme} from './theme'
import './App.css';
import { CssBaseline, StyledEngineProvider, ThemeProvider } from '@mui/material';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import { PublicLayout } from './layout/public';
import { authRoutes } from './routes';
function App() {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
          <StyledEngineProvider>
            <CssBaseline>
             <BrowserRouter>
             <Routes>
                <Route element={<PublicLayout />}>
                  {authRoutes.map((route, index) => (
                    <Route path={route.path} element={route.element} key={index} />
                  ))}
                </Route>
              </Routes>              
             </BrowserRouter> 
            </CssBaseline>
          </StyledEngineProvider>
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;
