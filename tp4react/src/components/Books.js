
import Button from "./Button";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import Book from "./Book";

const Books = ({books, selectBook}) => {
    return (
        <>
            <table>
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Author</th>
                </tr>
                {books.map((book) => (
                    <Book key={book.id}
                           book={book}
                           selectBook={selectBook}/>
                ))}
                </thead>
            </table>

            <Link to='/'> <Button color={'red'} text={'Exit'}/></Link>
        </>
    )
}

Books.propTypes = {
    selectBook: PropTypes.func,
}
export default Books

