import Button from "./Button";
import {FaHandPointRight} from 'react-icons/fa'
import {Link} from "react-router-dom";

const PageForClient = ({client, emprunts}) => {
    return (
        <div className="pageForClient">
            <h2><span><FaHandPointRight/></span>{client.firstName} {client.lastName}</h2>
            <Link to='/addEmprunt'><Button color={'pink'} text={'Create Emprunt'}/></Link>
            <Link to='/'><Button color={'red'} text={'Exit'}/></Link>
            <div>afichier emprunts</div>
        </div>
    )
}
export default PageForClient