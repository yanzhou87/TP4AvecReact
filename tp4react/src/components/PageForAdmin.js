import Button from "./Button";
import {FaHandPointRight} from "react-icons/fa";
import {Link} from "react-router-dom";

const PageForAdmin =({admin,selectAdmin})=>{
    return(
        <div>
            <h2><span> <FaHandPointRight/></span> {admin.firstName}  {admin.lastName}</h2>
            <Link to='/addClient'><Button color={'LightBlue'} text={'Create Client'}/></Link>
            <Link to='/clientsInfosForAdmins'><Button color={'pink'} text={'List Clients'}/></Link>
        </div>
    )
}
export default PageForAdmin