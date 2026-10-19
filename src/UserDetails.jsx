import { Link, useParams } from "react-router";

function UserDetail() {
    const paramsData = useParams();
    console.log(paramsData);
    

  return (
    <div style={{marginLeft:20}}>
      <h1> User Detail page </h1>
      <h2>User id is: {paramsData.id} </h2>
      <h3><Link to="/users">Back </Link></h3>
      
    </div>
  )
}

export default UserDetail;