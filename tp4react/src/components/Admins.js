import Admin from "./Admin";
import Button from "./Button";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {FaGhost} from "react-icons/fa";

const Admins = ({admins, selectAdmin}) => {
    return (
        <>
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
                        <td><Link to='/admin'><span><FaGhost/></span></Link></td>
                        <td>{admin.firstName}</td>
                        <td>{admin.lastName}</td>
                    </tr>
                ))}
                </thead>
            </table>

            <Link to='/'> <Button color={'red'} text={'Exit'}/></Link>
        </>
    )
}

Admins.propTypes = {
  //  admins:PropTypes.object,
    selectAdmin: PropTypes.func,
}
export default Admins

