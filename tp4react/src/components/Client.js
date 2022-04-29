import {Link} from "react-router-dom";
import {FaHandPointRight, FaLaugh} from "react-icons/fa";
import Button from "./Button";

const Client = ({client}) => {
    return (
        <div className="client">
            <h2><span><FaHandPointRight/></span>{client.firstName} {client.lastName}</h2>
            <Link to='/addEmprunt'><Button color={'pink'} text={'Create Emprunt'}/></Link>
            <Link to='/'><Button color={'red'} text={'Exit'}/></Link>
            <div>afichier emprunts</div>
        </div>
    )
}

export default Client
