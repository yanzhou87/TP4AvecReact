
import Button from "./Button";
import {Link} from "react-router-dom";

const Dvds = ({dvds}) => {
    return (
        <>
            <table>
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Author</th>
                </tr>
                {dvds.map((dvd) => (
                    <tr  key={dvd.id}>
                        <td>{dvd.title}</td>
                        <td>{dvd.author}</td>
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
