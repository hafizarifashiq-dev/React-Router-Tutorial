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
import UserList from "./UserList";
import UserDetail from "./UserDetails";
function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Routes>
          <Route element={<Navbar />} >
            <Route path="/" element={<Home />} />
            <Route path="/user/about" element={<About />} />
            <Route path="/user/login" element={<Login />} />
            <Route path="/users" element={<UserList />} />
            <Route path="/users/:id" element={<UserDetail />} />
          </Route>

           <Route path="/college" element={<College />} >
             <Route index element={<Student />} />
             <Route path="department" element={<Department />} />
             <Route path="details" element={<Details/>} />

           </Route>

               <Route  path="/*" element={<PageNoteFound />} />
             {/* <Route path="*" element={<Navigate to="/Home" />} /> */}
      </Routes>
    </>
  );
}

export default App;
