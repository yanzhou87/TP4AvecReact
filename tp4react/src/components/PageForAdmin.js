import Button from "./Button";
import {FaHandPointRight} from "react-icons/fa";
import {Link} from "react-router-dom";

const PageForAdmin =({admin})=>{
    console.log(admin)
    return(
        <div>
            <h2>  <span> <FaHandPointRight/></span> admin.firstName</h2>
            <Link to='/addClient'><Button color={'pink'} text={'Create Client'}/></Link>
        </div>
    )
}
export default PageForAdmin