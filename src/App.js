import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './Pages/Header/Header';
import Home from './Pages/Home/Home';
import Addproduct from './Pages/Addproduct/Addproduct';
import Allproducts from './Pages/Allproducts/Allproducts';
import Signin from './Pages/Signin/Signin';
import Signup from './Pages/Signup/Signup';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Authprovider from './Context/Authprovider';
import Purchase from './Pages/Purchase/Purchase';
import Orders from './Pages/Orders/Orders';
import Myorders from './Pages/Myorders/Myorders';
import Makeadmin from './Pages/Makeadmin/Makeadmin';
import Privateroute from './Privateroute/Privateroute';
import Adminroute from './Adminroute/Adminroute';
import Makereview from './Pages/Makereview/Makereview';
import Footer from './Pages/Footer/Footer';
import Manageproduct from './Pages/Manageproduct/Manageproduct';

function App() {
  return (
    <>
      <Authprovider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <Route path="/signin">
              <Signin></Signin>
            </Route>
            <Route path="/signup">
              <Signup></Signup>
            </Route>
            <Route exact path="/toys">
              <Allproducts></Allproducts>
            </Route>
            <Privateroute path="/toys/:id">
              <Purchase></Purchase>
            </Privateroute>
            <Privateroute path="/myorders">
              <Myorders></Myorders>
            </Privateroute>
            <Privateroute path="/makereviews">
              <Makereview></Makereview>
            </Privateroute>
            <Adminroute path="/makeadmin">
              <Makeadmin></Makeadmin>
            </Adminroute>
            <Adminroute path="/addproduct">
              <Addproduct></Addproduct>
            </Adminroute>
            <Adminroute path="/manageproduct">
              <Manageproduct></Manageproduct>
            </Adminroute>
            <Adminroute path="/orders">
              <Orders></Orders>
            </Adminroute>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </Authprovider>
    </>
  );
}

export default App;
