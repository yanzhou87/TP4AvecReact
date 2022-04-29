
import PropTypes from "prop-types";

const Book = ({book, selectBook}) => {
    return (
        <tr className="book" onClick={()=>selectBook(book.id)}>

            <td>{book.title}</td>
            <td>{book.author}</td>
        </tr>
    )
}

Book.propTypes = {
   // book:PropTypes.object,
}
export default Book
