import { Routes, Route, Navigate } from "react-router-dom";
import CP from "../paginas/CP";
import NO from "../paginas/NO";
import Nabvar from "../navbar/Navbar";
import Comprar from "../paginas/Comprar";
import MiViaje from "../paginas/MiViaje";

const Rou2 = () => {
  return (
    <>
      <Nabvar />
      <Routes>
        <Route path="cp" element={<CP />} />
        <Route path="no" element={<NO />} />
        <Route path="viaje" element={<MiViaje/>} />
        <Route path="destino/:nombre" element={<Comprar/>} />
        <Route path="/" element={<Navigate to="cp" />} />
      </Routes>
    </>
  );
};

export default Rou2;
