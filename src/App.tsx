import { ApolloProvider } from "@apollo/client";
import {
  CssBaseline,
  StyledEngineProvider,
  ThemeProvider,
} from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserProvider } from "./context";
import { client } from "./graphql/client";
import { authRoutes, protectedRoutes } from "./routes";
import { MainLayout, PublicLayout } from "./layout";
import { theme } from "./theme";
function App() {
  return (
    <UserProvider>
      <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
          <StyledEngineProvider>
            <CssBaseline>
              <BrowserRouter>
                <Routes>
                  <Route element={<PublicLayout />}>
                    {authRoutes.map((route, index) => (
                      <Route
                        path={route.path}
                        element={route.element}
                        key={index}
                      />
                    ))}
                  </Route>
                  <Route element={<MainLayout />}>
                    {protectedRoutes.map((route, key) => (
                      <Route
                        path={route.path}
                        element={route.element}
                        key={key}
                      ></Route>
                    ))}
                  </Route>
                </Routes>
              </BrowserRouter>
            </CssBaseline>
          </StyledEngineProvider>
        </ThemeProvider>
      </ApolloProvider>
    </UserProvider>
  );
}

export default App;
