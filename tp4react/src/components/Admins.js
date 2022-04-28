import Admin from "./Admin";
import Button from "./Button";

const Admins = ({admins, onClickAdmin}) => {
    return (
        <>
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
            <Button color={'red'}
                    text={'Exit'} onClick={() => window.location.href = '/'}/>
        </>
    )
}

export default Admins

