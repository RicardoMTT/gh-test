import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { DashboardPage } from "./pages/DashboardPage";
import { HomePage } from "./pages/HomePage";
import { InitialPage } from "./pages/InitialPage";
import { ProductsPage } from "./pages/ProductsPage";
import { SecondaryPage } from "./pages/Secondary";
import { AuthProvider } from "./context/providers/AuthContext";
import { PublicRoute } from "./routes/PublicRoute";
import { LoginPage } from "./pages/LoginPage";
import { PrivateRoute } from "./routes/PrivateRoute";
function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          {/* <Route path="/login" element={<HomePage />}></Route>{" "} */}
          <Route path="*" element={<Navigate to="/login" />} />
          <Route
            path="/login"
            element={
              <PublicRoute>
                <LoginPage />
              </PublicRoute>
            }
          ></Route>
          <Route
            path="/dashboard/*"
            element={
              <PrivateRoute>
                <DashboardPage />
              </PrivateRoute>
            }
          >
            <Route path="" element={<InitialPage />}></Route>
            <Route path="initial" element={<InitialPage />}></Route>
            <Route path="secondary" element={<SecondaryPage />}></Route>
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
