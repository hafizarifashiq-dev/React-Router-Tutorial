import { NavLink, Outlet } from "react-router";

function College() {
  return (
    <div className="college" style={{ textAlign: "center" }}>
      <h2> College page </h2>
      <NavLink className="link" to="student">
        Student
      </NavLink>
      <NavLink className="link" to="Department">
        Department
      </NavLink>
      <NavLink className="link" to="Details">
        College Detail
      </NavLink>
      <Outlet />
    </div>
  );
}

export default College;
