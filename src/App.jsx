import React from "react";
import { Routes, Route} from "react-router-dom"; 
import Home from "./routes/Home/Home.component";
import Navigation from "./routes/navigation/navigation.component";
import SignIn from "./routes/SignIn/sign-in.component";

const Shop = () =>{
  return <h1>Welcome to Shop🚀</h1>
}
const App = () => {
  return (
    <Routes>
    <Route path="/" element={<Navigation />}>
    <Route path="/" element={<Home />} />
      <Route path="shop" element={<Shop />} />
      <Route path="sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  )
};


export default App;
