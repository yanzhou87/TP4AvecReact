import Admin from "./Admin";

const Admins = ({admins, onClickAdmin}) => {
    return (
            <table>
                <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                </tr>
                {admins.map((admin) => (
                    <Admin key={admin.id}
                           admin={admin}
                    />
                ))}
                </thead>
            </table>
    )
}

export default Admins

