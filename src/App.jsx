import { NotificationContext } from "./context/Context";
import { MainRoutes } from "./MainRoutes";

function App() {
  return (
    <NotificationContext.Provider>
      <MainRoutes />
    </NotificationContext.Provider>
  );
}

export default App;
