import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Home/Header";
import Footer from "./Home/Footer";
import Dashboard from "./Dashboard/Dashboard";

function App() {
  return (
    <>
    <Header></Header>
    <BrowserRouter>
    <Routes>
      <Route path='/home' element={<Dashboard/>}/>
    </Routes>
    </BrowserRouter>
    <Footer></Footer>
    </>
  );
}
export default App;
