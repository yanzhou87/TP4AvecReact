import {FaGithub, FaGithubAlt, FaTimes} from 'react-icons/fa'

const Admin = ({admin}) => {
    return (

        <tr className="admin">

            <td><span><FaGithubAlt/></span>{admin.firstName}</td>
            <td>{admin.lastName}</td>
        </tr>


    )
}

export default Admin
