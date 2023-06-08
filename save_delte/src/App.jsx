import style from "./styles.css";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

import Home from "./Home";
import Save from "./Save";
import Show from "./Show";

import Header from "./Header";

import RegistrationContext from "./Contexts/registrationContext";

import { initialState, reducer } from "./Contexts/registrationReducer";

import { useReducer } from "react";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="save" element={<Save />} />
          <Route path="show" element={<Show />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function AppLayout() {
  const [registrationData, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <Header />
      <RegistrationContext.Provider value={{ registrationData, dispatch }}>
        <Outlet />
      </RegistrationContext.Provider>
    </div>
  );
}
