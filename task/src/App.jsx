import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Home/Header";
import Footer from "./Home/Footer";
import Dashboard from "./Dashboard/Dashboard";
import Profile from "./Auth/Profile";
import Dribble from "./Auth/Dribble";
import Sign_up from "./Auth/Sign_up";

function App() {
  return (
    <>
    {/* <Header></Header> */}
    <div className="pt-24 sm:pt-20">
    <BrowserRouter>
    <Routes>
      <Route path="/profile" element={<Profile/>}/>
      <Route path='/Dashboard' element={<Dashboard/>}/>
      <Route path='/dribble' element={<Dribble/>}/>
      <Route path='/signup' element={<Sign_up/>}/>

    </Routes>
    </BrowserRouter>
    </div>
    {/* <Footer></Footer> */}
    </>
  );
}
export default App;
