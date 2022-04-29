import Button from "./Button";
import {FaHandPointRight} from 'react-icons/fa'
import {Link} from "react-router-dom";

const PageForClient = ({client}) => {
    return (
        <div className="pageForClient">
            <h2> <span><FaHandPointRight/></span>{client.firstName}</h2>
            <Link to='/addEmprunt'><Button color={'pink'} text={'Create Emprunt'}/></Link>
        </div>
)
}
export default PageForClient