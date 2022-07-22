import { Routes, Route, BrowserRouter } from "react-router-dom";

import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Profile } from "./pages/Profile";

import { Register } from "./pages/Register";
import { FinalForm } from "./components/FinalForm";
import { InitialForm } from "./components/InitialForm";

export function MainRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="profile" element={<Profile />}>
          <Route path=":id" />
          <Route path="edit" />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />}>
          <Route path="data1" element={<InitialForm />} />
          <Route path="data2" element={<FinalForm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
