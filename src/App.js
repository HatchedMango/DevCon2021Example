import UserView from "./components/UserView";
import { ServicesProvider } from "./contexts/ServicesContext";
import { UserIdProvider } from "./contexts/UserIdContext";
import UserService from "./services/userService";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <ServicesProvider
        services={{
          userService: new UserService()
        }}
      >
        <UserIdProvider>
          <UserView />
        </UserIdProvider>
      </ServicesProvider>
    </div>
  );
}
