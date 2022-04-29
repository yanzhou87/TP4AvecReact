import {FaGhost} from 'react-icons/fa'
import {Link} from "react-router-dom";
import Button from "./Button";

const Admin = ({admin, selectAdmin}) => {

    return (
        <>
            <tr className="admin" onClick={() => {
                selectAdmin(admin.id)
            }} >
                <td><Link to='/pageForAdmin'><span><FaGhost/></span></Link></td>
                <td>{admin.firstName}</td>
                <td>{admin.lastName}</td>
            </tr>

        </>

    )
}

export default Admin
