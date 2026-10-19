import { Link } from "react-router";

function UserList() {

    const userData = [
        { id:1, name:"Muhammad" },
        { id:2, name:"AbuBakr" },
        { id:3, name:"Ali" },
        { id:4, name:"Hassan" },
        { id:5, name:"Hussain" }
    ]

  return (
    <div style={{marginLeft:20}}>
      <h1> User List page  </h1>
      {
        userData.map((item , index)=>(
            <div key={index} >
               <h5> <Link to={"/users/"+item.id}> {item.name} </Link></h5>
            </div>
        ))
      }

<h1> User List page with URL </h1>
      {
        userData.map((item , index)=>(
            <div key={index} >
               <h5> <Link to={"/users/"+item.id+"/"+item.name}> {item.name} </Link></h5>
            </div>
        ))
      }
    </div>
  );
}

export default UserList;