
import Button from "./Button";
import {Link} from "react-router-dom";

const Articles = ({articles}) => {
    return (
        <div className="pageCenter">
            <table>
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Nombre Exemplaires</th>
                </tr>
                {articles.map((article) => (
                    <tr key={article.id}>
                        <td>{article.title}</td>
                        <td>{article.author}</td>
                        <td>{article.nombreExemplaires}</td>
                    </tr>
                ))}
                </thead>
            </table>
            <Link to='/'> <Button color={'red'} text={'Exit'}/></Link>
        </div>
    )
}

Articles.propTypes = {

}

export default Articles


