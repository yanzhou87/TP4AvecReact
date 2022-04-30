
import {Link} from "react-router-dom";
import Button from "./Button";
import PropTypes from "prop-types";
import Clients from "./Clients";
import {FaLaugh} from "react-icons/fa";

const ClientsInfosForAdmins =({clients,admin})=>{
    return (
        <>
            <table>
                <thead>
                <tr>
                    {/*<th>Empruns</th>*/}
                    <th>First Name</th>
                    <th>Last Name</th>
                </tr>
                {clients.map((client) => (
                    <tr  key={client.id}>
                        <td><Link to={`/emprunts/${client.lastName}`}><span><FaLaugh/></span></Link></td>
                        <td>{client.firstName}</td>
                        <td>{client.lastName}</td>
                    </tr>
                ))}
                </thead>
            </table>
            <Link to={`/admins/${admin.id}`}><Button color={'pink'} text={'Mon page'}/></Link>
        </>

    )
}
ClientsInfosForAdmins.propTypes = {
   // clients:PropTypes.object,
}
export default ClientsInfosForAdmins