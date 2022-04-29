import {FaGithubAlt} from 'react-icons/fa'
import {Link} from "react-router-dom";

const Admin = ({admin, selectAdmin}) => {

    return (
        <>
            <tr className="admin" onClick={() => {
                selectAdmin(admin.id)
            }} >
                <td><Link to='/pageForAdmin'><span><FaGithubAlt/></span></Link></td>
                <td>{admin.firstName}</td>
                <td>{admin.lastName}</td>
            </tr>

        </>

    )
}

export default Admin
