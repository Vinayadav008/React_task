import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Home/Header";
import Footer from "./Home/Footer";
import Dashboard from "./Dashboard/Dashboard";
import Profile from "./Auth/Profile";
import Dribble from "./Auth/Dribble";

function App() {
  return (
    <>
    {/* <Header></Header> */}
    <BrowserRouter>
    <Routes>
      <Route path="" element={<Profile/>}/>
      <Route path='/home' element={<Dashboard/>}/>
      <Route path='/next' element={<Dribble/>}/>
    </Routes>
    </BrowserRouter>
    {/* <Footer></Footer> */}
    </>
  );
}
export default App;
