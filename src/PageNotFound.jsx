import { Link } from "react-router";

function PageNoteFound() {
  return (
    <div style={{textAlign:"center"}}>
      <h2>Page Not Found</h2>
      <div> <Link to="/" >Go to Home Page</Link> </div>
      <img style={{width:"50%"}} src="https://png.pngtree.com/png-clipart/20220109/original/pngtree-404-error-page-not-found-png-image_7021505.png" alt="" />
    </div>
  );
}
export default PageNoteFound;
