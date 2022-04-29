
import Button from "./Button";
import {Link} from "react-router-dom";

const Cds = ({cds}) => {
    return (
        <>
            <table>
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Author</th>
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
Cds.propTypes = {
   // cds: PropTypes.object
}
export default Cds