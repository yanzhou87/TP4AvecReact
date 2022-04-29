import Button from "./Button";
import {FaHandPointRight} from 'react-icons/fa'
import {Link} from "react-router-dom";

const PageForAdmin = ({client}) => {
    return (
        <div className="pageForClient">
            <h2>  <span> <FaHandPointRight/></span> client.firstName   client.lastName</h2>
            <Link to='/addEmprunt'><Button color={'pink'} text={'Create Client'}/></Link>
                <Button color={'pink'} text={'Add Emprunt'}/>
        </div>
)
}
export default PageForAdmin