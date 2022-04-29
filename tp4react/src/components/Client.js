import {Link} from "react-router-dom";
import {FaGithubAlt} from "react-icons/fa";

const Client = ({client, onClick}) => {
    return (
        <tr className="client" onClick={()=>onClick()}>
            <td><Link to='/pageForClient'><span><FaGithubAlt/></span></Link></td>
            <td>{client.firstName}</td>
            <td>{client.lastName}</td>
        </tr>
    )
}

export default Client
