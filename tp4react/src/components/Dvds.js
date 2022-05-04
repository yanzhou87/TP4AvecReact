
import Button from "./Button";
import {Link} from "react-router-dom";

const Dvds = ({dvds}) => {
    return (
        <div className="pageCenter">
            <table>
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Duration Movie</th>
                </tr>
                {dvds.map((dvd) => (
                    <tr  key={dvd.id}>
                        <td>{dvd.title}</td>
                        <td>{dvd.author}</td>
                        <td>{dvd.durationMovie}</td>
                    </tr>
                ))}
                </thead>
            </table>

            <Link to='/'> <Button color={'red'} text={'Exit'}/></Link>
        </div>
    )
}
Dvds.propTypes = {
    // cds: PropTypes.object
}
export default Dvds
