import Admin from "./Admin";
import Button from "./Button";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

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
                    <Admin key={admin.id}
                           admin={admin}
                           selectAdmin={selectAdmin}/>
                ))}
                </thead>
            </table>

            <Link to='/'> <Button color={'red'} text={'Exit'}/></Link>
        </>
    )
}

Admins.propTypes = {
    selectAdmin: PropTypes.func,
}
export default Admins

