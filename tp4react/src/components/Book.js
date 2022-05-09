
const Book = ({book}) => {
    return (
        <div className="pageCenter">
            <h3>Title : {book.title}</h3>
            <p>Author : {book.author}</p>
            <p>Year Publication : {book.yearPublication}</p>
            <p>articleType : {book.articleType}</p>
            <p>nombreExemplaires : {book.nombreExemplaires}</p>
            <p>editor : {book.editor}</p>
            <p>nombrePage : {book.nombrePage}</p>

        </div>

    )
}

Book.propTypes = {
}
export default Book

