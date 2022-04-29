
import Button from "./Button";
import {Link} from "react-router-dom";
import {FaLaugh} from "react-icons/fa";
import PropTypes from "prop-types";

const Clients = ({clients, selectClient}) => {
    return (
        <>
            <table>
                <thead>
                <tr>
                    <th>Click</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                </tr>
                {clients.map((client) => (
                    <tr  key={client.id} onClick={()=>selectClient(client.id)}>
                        <td><Link to='/client'><span><FaLaugh/></span></Link></td>
                        <td>{client.firstName}</td>
                        <td>{client.lastName}</td>
                    </tr>
                ))}
                </thead>
            </table>

            <Link to='/'> <Button color={'red'} text={'Exit'}/></Link>
        </>
    )
}


Clients.propTypes = {
    // clients:PropTypes.object,
    selectClient: PropTypes.func,
}
export default Clients
