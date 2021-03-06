
import Button from "./Button";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

const Books = ({books}) => {
    return (
        <div className="pageCenter">
            <table>
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Article Type</th>
                    <th>Year Publication</th>
                </tr>
                {books.map((book) => (
                    <tr key={book.id} >
                        <td>{book.title}</td>
                        <td>{book.author}</td>
                        <td>{book.articleType}</td>
                        <td>{book.yearPublication}</td>
                    </tr>
                ))}
                </thead>
            </table>

            <Link to='/'> <Button color={'red'} text={'Exit'}/></Link>
        </div>
    )
}

Books.propTypes = {

}
export default Books

