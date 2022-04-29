import {Link} from "react-router-dom";
import {FaLaugh} from "react-icons/fa";

const Book = ({book, selectBook}) => {
    return (
        <tr className="book" onClick={()=>selectBook(book.id)}>

            <td>{book.title}</td>
            <td>{book.author}</td>
        </tr>
    )
}

export default Book
