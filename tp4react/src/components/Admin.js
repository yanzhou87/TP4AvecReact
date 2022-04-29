import {FaGithubAlt} from 'react-icons/fa'

const Admin = ({admin}) => {
    return (
        <tr className="admin" onClick={() => window.location.href = '/pageForAdmin'}>
            <td><span><FaGithubAlt/></span>{admin.firstName}</td>
            <td>{admin.lastName}</td>
        </tr>
    )
}

export default Admin
