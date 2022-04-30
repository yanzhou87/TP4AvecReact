import { FaHandPointRight} from 'react-icons/fa'
import {Link} from "react-router-dom";
import Button from "./Button";
import PropTypes from "prop-types";

const Admin = ({admin}) => {
console.log(admin)
    return (
        <div className="pageCenter">
            <h2><span> <FaHandPointRight/></span> {admin.firstName}  {admin.lastName}</h2>
            <Link to='/addClient'><Button color={'LightBlue'} text={'Create Client'}/></Link>
            {/*<Link to='/addBook'><Button color={'Plum'} text={'Create Book'}/></Link>*/}
            <Link to='/addArticle'><Button color={'CornflowerBlue'} text={'Create Article'}/></Link>
            <Link to='/clientsInfosForAdmins'><Button color={'pink'} text={'List Clients'}/></Link>
            <Link to='/emprunts'><Button color={'LightSlateGray'} text={'Emprunts'} /></Link>
            <Link to='/admins'><Button color={'red'} text={'Exit'}/></Link>
        </div>
    )
}

Admin.propTypes = {
   // admin:PropTypes.object,
}
export default Admin
