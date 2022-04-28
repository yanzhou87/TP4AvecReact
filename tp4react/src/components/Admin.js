const Admin = ({admin}) => {
    return (
        <div className="admin">
            <p>{admin.firstName}</p>
            <p>{admin.lastName}</p>
        </div>
    )
}

export default Admin
