import { FaHandPointRight} from 'react-icons/fa'
import {Link} from "react-router-dom";
import Button from "./Button";
import Header from "./Header";

const Admin = ({admin}) => {
    if(admin.firstName === undefined){
        return  <Header/>
    }
    return (
        <div className="pageCenter">
            <h2><span> <FaHandPointRight/></span> {admin.firstName}  {admin.lastName}</h2>
            <Link to='/addAdmin'><Button color={'SkyBlue'} text={'Add admin'} /></Link>
            <Link to='/addClient'><Button color={'LightBlue'} text={'Add Client'}/></Link>
            <Link to='/addArticle'><Button color={'CornflowerBlue'} text={'Add Article'}/></Link>
            <Link to='/clientsInfosForAdmins'><Button color={'pink'} text={'List Clients'}/></Link>
            <Link to='/articles'><Button color={'DarkSeaGreen'} text={'Show Articles'}/></Link>
            <Link to='/emprunts'><Button color={'LightSlateGray'} text={'Emprunts'} /></Link>
            <Link to='/admins'><Button color={'red'} text={'Exit'}/></Link>
        </div>
    )
}

Admin.propTypes = {
}
export default Admin
