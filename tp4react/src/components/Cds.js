
import Button from "./Button";
import {Link} from "react-router-dom";

const Cds = ({cds}) => {
    return (
        <div className="pageCenter">
            <table>
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Duration Movie</th>
                </tr>
                {cds.map((cd) => (
                    <tr  key={cd.id}>
                        <td>{cd.title}</td>
                        <td>{cd.durationMovie}</td>
                    </tr>
                ))}
                </thead>
            </table>

            <Link to='/'> <Button color={'red'} text={'Exit'}/></Link>
        </div>
    )
}
Cds.propTypes = {
   // cds: PropTypes.object
}
export default Cds
