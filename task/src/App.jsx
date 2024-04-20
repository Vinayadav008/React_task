import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard/Dashboard";
import Profile from "./Auth/Profile";
import Dribble from "./Auth/Dribble";
import Sign_up from "./Auth/Sign_up";

function App() {
  return (
    <>
      <div className="">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Sign_up />} />
            <Route path="/profile" element={<Profile />} />
            <Route path='/dribble' element={<Dribble />} />
            <Route path='/home' element={<Dashboard />} />

          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}
export default App;
