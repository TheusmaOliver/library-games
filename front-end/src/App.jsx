import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes />
        <ToastContainer autoClose={3000} />
      </BrowserRouter>
    </div>
  );
}

export default App;
