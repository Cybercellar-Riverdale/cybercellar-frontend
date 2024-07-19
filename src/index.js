import React from "react";
import ReactDOM from "react-dom";
import "assets/css/App.css";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import AuthLayout from "layouts/auth";
import AdminLayout from "layouts/admin";
import RTLLayout from "layouts/rtl";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "theme/theme";
import { AuthProvider } from "./auth-context/auth.context";
import { ProtectedRoute } from "./layouts/protected.route.js";
import { ThemeEditorProvider } from '@hypertheme-editor/chakra-ui';
import EmailAnalysisPage from "views/admin/emailAnalysis/EmailAnalysisPage";

// Retrieve user data from localStorage
let user = localStorage.getItem("user");
user = JSON.parse(user);

ReactDOM.render(
  <ChakraProvider theme={theme}>
    <AuthProvider userData={user}>
      <React.StrictMode>
        <ThemeEditorProvider>
          <HashRouter>
            <Switch>
              {/* Route for login/auth layout */}
              <Route path="/auth" component={AuthLayout} />

              {/* Protected routes for authenticated users */}
              <Route path="/admin" component={AdminLayout} />
              <Route path="/rtl" component={RTLLayout} />

              {/* Example of a specific protected route */}
              {/* <ProtectedRoute path="/admin/emailanalysis/:id" component={EmailAnalysisPage} /> */}

              {/* Redirect to /auth if user is not authenticated, else to /admin */}
              {user ? <Redirect from="/" to="/admin" /> : <Redirect from="/" to="/auth" />}
            </Switch>
          </HashRouter>
        </ThemeEditorProvider>
      </React.StrictMode>
    </AuthProvider>
  </ChakraProvider>,
  document.getElementById("root")
);
