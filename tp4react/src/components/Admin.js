import { FaHandPointRight} from 'react-icons/fa'
import {Link} from "react-router-dom";
import Button from "./Button";
import PropTypes from "prop-types";

const Admin = ({admin}) => {

    return (
        <div>
            <h2><span> <FaHandPointRight/></span> {admin.firstName}  {admin.lastName}</h2>
            <Link to='/addClient'><Button color={'LightBlue'} text={'Create Client'}/></Link>
            {/*<Link to='/addBook'><Button color={'Plum'} text={'Create Book'}/></Link>*/}
            <Link to='/addArticle'><Button color={'FloralWhite'} text={'Create Article Active'}/></Link>
            <Link to='/clientsInfosForAdmins'><Button color={'pink'} text={'List Clients'}/></Link>
            <Link to='/admins'><Button color={'red'} text={'Exit'}/></Link>
        </div>
    )
}

Admin.propTypes = {
   // admin:PropTypes.object,
}
export default Admin
