import { Fragment } from "react";
import { ToastContainer } from "react-toastify";
import RouterApp from "./routes";
import Global from "./styles/Global";
import 'react-toastify/dist/ReactToastify.css';
import { AppContextProvider } from "./context/AppContext";

function App() {
  return (
    <Fragment>
      <AppContextProvider>
        <RouterApp />
      </AppContextProvider>
      <Global />
      <ToastContainer />
    </Fragment>
  );
}

export default App;
