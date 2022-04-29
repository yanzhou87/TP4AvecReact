import {Link} from "react-router-dom";
import {FaLaugh} from "react-icons/fa";

const Client = ({client, selectClient}) => {
    return (
        <tr className="client" onClick={()=>selectClient(client.id)}>
            <td><Link to='/pageForClient'><span><FaLaugh/></span></Link></td>
            <td>{client.firstName}</td>
            <td>{client.lastName}</td>
        </tr>
    )
}

export default Client
