import { Navigate, Route, Routes } from "react-router";
import About from "./About";
import Home from "./Home";
import Login from "./Login";
import Navbar from "./Navbar";
import PageNoteFound from "./PageNotFound";
import College from "./College";
import Student from "./Student";
import Department from "./Department";
import Details from "./Details";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />

        <Route path="/college" element={<College />} >
             <Route path="student" element={<Student />} />
             <Route path="department" element={<Department />} />
             <Route path="details" element={<Details/>} />
        </Route>

        {/* <Route  path="*" element={<PageNoteFound />} /> */}
        <Route path="*" element={<Navigate to="/Home" />} />
      </Routes>
    </>
  );
}

export default App;
