
import Button from "./Button";
import {Link} from "react-router-dom";

const Dvds = ({dvds}) => {
    return (
        <>
            <table>
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Duration Movie</th>
                </tr>
                {dvds.map((dvd) => (
                    <tr  key={dvd.id}>
                        <td>{dvd.title}</td>
                        <td>{dvd.durationMovie}</td>
                    </tr>
                ))}
                </thead>
            </table>

            <Link to='/'> <Button color={'red'} text={'Exit'}/></Link>
        </>
    )
}
Dvds.propTypes = {
    // cds: PropTypes.object
}
export default Dvds
