import {Link} from "react-router-dom";
import Button from "./Button";
import { useState} from "react";
const Exemplaires = ({exemplaires, admin}) => {
  return(
      <div className="pageCenter">
          <table>
              <thead>
              <tr>
                  <th>Title</th>
                  <th>Is Borrowed</th>
                  <th>Emrunt Id</th>
              </tr>
              {exemplaires.map((ex) => (
                  <tr key={ex.id}>
                      <td>{ex.article.title}</td>
                      <td>{ex.isBorrowed}</td>
                      <td>{ex.empruntId}</td>
                  </tr>
              ))}
              </thead>
          </table>
          <Link to={`/admins/${admin.id}`}><Button color={'pink'} text={'Mon page'}/></Link>

      </div>
  )

}
export default Exemplaires