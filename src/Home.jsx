import "./App.css";
import Rou from "./route/Rou";
import Provider from './contexto/Provider'

function Home() {
  return (
    <>
      <Provider>
        <Rou />
      </Provider>
    </>
  );
}

export default Home;
