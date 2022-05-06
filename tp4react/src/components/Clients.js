
import Button from "./Button";
import {Link} from "react-router-dom";
import {FaLaugh} from "react-icons/fa";
import PropTypes from "prop-types";

//TODO clique deux fois, l'emprunt de client rajouter l'autre fois, erreur(encountered two children with the same key)
const Clients = ({clients, selectClient}) => {
    return (
        <div className="pageCenter">
            <table>
                <thead>
                <tr>
                    <th>Click</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                </tr>
                {clients.map((client) => (
                    <tr  key={client.id} onClick={()=>selectClient(client.id)}>
                        <td><Link to={`/clients/${client.id}`}><span><FaLaugh/></span>   I'm </Link></td>
                        <td>{client.firstName}</td>
                        <td>{client.lastName}</td>
                    </tr>
                ))}
                </thead>
            </table>

            <Link to='/'> <Button color={'red'} text={'Exit'}/></Link>
        </div>
    )
}


Clients.propTypes = {
    selectClient: PropTypes.func,
}
export default Clients
