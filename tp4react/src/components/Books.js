
import Button from "./Button";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

const Books = ({books, selectBook}) => {
    return (
        <div className="pageCenter">
            <table>
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Year Publication</th>
                </tr>
                {books.map((book) => (
                    <tr key={book.id} onClick={()=>selectBook(book.id)}>
                        <td>{book.title}</td>
                        <td>{book.author}</td>
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
   // books : PropTypes.object,
    selectBook: PropTypes.func,
}
export default Books

