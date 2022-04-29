
import Button from "./Button";
import {Link} from "react-router-dom";
import {FaLaugh} from "react-icons/fa";

const Cds = ({cds}) => {
    return (
        <>
            <table>
                <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                </tr>
                {cds.map((cd) => (
                    <tr  key={cd.id}>
                        <td>{cd.title}</td>
                        <td>{cd.author}</td>
                    </tr>
                ))}
                </thead>
            </table>

            <Link to='/'> <Button color={'red'} text={'Exit'}/></Link>
        </>
    )
}

export default Cds
