import { Routes, Route } from "react-router-dom";
import Login from "../paginas/Login";
import Rou2 from "../route/Rou2";
import RutasPrivadas from "./RutasPrivadas";
import RutasPublicas from "./RutasPublicas";

const Rou = () => {
  return (
    <>
      <Routes>
        <Route
          path="login/*"
          element={
            <RutasPublicas>
              <Login />
            </RutasPublicas>
          }
        />

        <Route
          path="/*"
          element={
            <RutasPrivadas>
              <Rou2 />
            </RutasPrivadas>
          }
        />
      </Routes>
    </>
  );
};

export default Rou;
