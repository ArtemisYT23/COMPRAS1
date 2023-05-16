import { Suspense, lazy } from "react";
import { Provider } from "react-redux";
import { Navigate, Routes, Route, HashRouter } from "react-router-dom";
import { RoutesForm } from "./models/routes";
import store from "./Redux";
import LoadingApp from "./utilities/LoadingApp";

const Initial = lazy(() => import("./Pages/InitialForm"));
const Success = lazy(() => import("./Pages/SuccessForm"));

function App() {
  return (
    <div>
      <Suspense fallback={<LoadingApp />}>
        <Provider store={store()}>
          <HashRouter>
            <Routes>
              <Route path="/" element={<Navigate to={RoutesForm.INITIAL} />} />
              <Route path={RoutesForm.INITIAL} element={<Initial />} />
              <Route path={RoutesForm.SUCCESS} element={<Success />} />
            </Routes>
          </HashRouter>
        </Provider>
      </Suspense>
    </div>
  );
}

export default App;
