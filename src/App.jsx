import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Headear from "./Componentes/Headear";
import CounterMidilText from "./Componentes/CounterMidilText";
import Container from "./Componentes/Container";
import Controls from "./Componentes/Controls";

function App() {
  return (
    <center>
      <div className="px-4 py-5 my-5 text-center">
        <Container>
          <Headear></Headear>
          <div className="col-lg-6 mx-auto">
            <CounterMidilText></CounterMidilText>
            <Controls></Controls>
          </div>
        </Container>
      </div>
    </center>
  );
}

export default App;
