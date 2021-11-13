import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home/Home";
import Footer from "./pages/Shared/Header/Footer/Footer";
import Cars from "./pages/Home/Cars/Cars";
import Header from "./pages/Shared/Header/Header";
import Explores from "./pages/Explores/Explores/Explores";

import Login from "./pages/Login/Login/Login";
import Register from "./pages/Login/Register/Register";
import PlaceOrder from "./pages/Login/PlaceOrder/PlaceOrder";
import MakeAdmin from "./pages/Login/MakeAdmin/MakeAdmin";
import Payment from "./pages/Login/Payment/Payment";
import MissMatch from "./pages/MissMatch/MissMatch";
import ManageAllOrders from "./pages/Login/ManageAllOrders/ManageAllOrders";
import PrivateRoute from "./pages/Login/PrivateRoute/PrivateRoute";
import AuthProvider from "./contexts/AuthProvider";
import AddCar from "./pages/Login/AddCar/AddCar";
import ManageCars from "./pages/Login/ManageCars/ManageCars";
import MyOrders from "./pages/Login/MyOrders/MyOrders";

import AddReview from "./pages/Login/AddReview/AddReview";
import AdminRoute from "./pages/Login/AdminRoute/AdminRoute";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>

            <Route exact path="/home">
              <Home></Home>
            </Route>

            <Route path="/cars">
              <Cars></Cars>
            </Route>

            <Route path="/explore">
              <Explores></Explores>
            </Route>

            <PrivateRoute path="/placeorder/:id">
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>

            <PrivateRoute path="/pay">
              <Payment></Payment>
            </PrivateRoute>

            <PrivateRoute path="/order">
              <MyOrders></MyOrders>
            </PrivateRoute>
            <PrivateRoute path="/review">
              <AddReview></AddReview>
            </PrivateRoute>

            <AdminRoute path="/makeadmin">
              <MakeAdmin></MakeAdmin>
            </AdminRoute>

            <AdminRoute path="/manageorder">
              <ManageAllOrders></ManageAllOrders>
            </AdminRoute>

            <AdminRoute path="/managecars">
              <ManageCars></ManageCars>
            </AdminRoute>

            <AdminRoute path="/addcar">
              <AddCar></AddCar>
            </AdminRoute>

            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>

            <Route path="*">
              <MissMatch></MissMatch>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
