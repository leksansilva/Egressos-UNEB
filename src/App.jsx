import { NotificationProvider } from "./context/Provider";
import { MainRoutes } from "./MainRoutes";

function App() {
  return (
    <NotificationProvider>
      <MainRoutes />
    </NotificationProvider>
  );
}

export default App;
