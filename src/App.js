import { Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import DetailsPage from "./components/Product/DetailsPage";
import Profile from "./components/Profile/index";
import UpdateProfile from "./components/Profile/UpdateProfile";
import ResetPassword from "./components/Settings/resetPassword";
import Settings from "./components/Settings/settings";
import AddEvent from "./components/User/AddUser";
import UpdateEvent from "./components/User/UpdateEvent";

// components
import DashboardLayout from "./layout/DashboardLayout";
import ErrorPage from "./pages/404";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Products from "./pages/Products";
import Register from "./pages/Register";
import User from "./pages/User";



const App = () => {

  return (
    <>
      {/* Dashboard Layout */}

      <DashboardLayout>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/login" />
          </Route>
          <Route path="/login" component={Login} />
          <Route path="/logout" component={Logout} />
          <Route path="/register" component={Register} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/user" component={User} />
          <Route path="/product" component={Products} />
          <Route path="/addEvent" component={AddEvent} />
          <Route path="/updateEvent/:id" component={UpdateEvent} />
          <Route path="/detailsPage/:id" component={DetailsPage} />
          <Route path="/profile" component={Profile} />
          <Route path="/updateProfile" component={UpdateProfile} />
          <Route path="/settings" component={Settings} />
          <Route path="/reset-password" component={ResetPassword} />

          <Route path="/404" component={ErrorPage} />

          <Route path="*" component={ErrorPage} />
        </Switch>
      </DashboardLayout>
    </>
  );
};

export default App;
