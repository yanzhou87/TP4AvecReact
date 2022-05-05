import Admin from "./Admin";
import Button from "./Button";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {FaGhost} from "react-icons/fa";

const Admins = ({admins, selectAdmin}) => {
    return (
        <div className="pageCenter">
            <table>
                <thead>
                <tr>
                    <th>Click</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                </tr>
                {admins.map((admin) => (
                    <tr key={admin.id} onClick={() => {
                        selectAdmin(admin.id)
                    }}>
                        <td><Link to={`/admins/${admin.id}`}><span><FaGhost/></span>   I'm </Link></td>
                        <td>{admin.firstName}</td>
                        <td>{admin.lastName}</td>
                    </tr>
                ))}
                </thead>
            </table>

            <Link to='/'> <Button color={'red'} text={'Exit'}/></Link>
        </div>
    )
}

Admins.propTypes = {
    selectAdmin: PropTypes.func,
}
export default Admins

