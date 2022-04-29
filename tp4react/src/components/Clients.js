import Client from "./Client";
import Button from "./Button";
import {Link} from "react-router-dom";

const Clients = ({clients, selectClient}) => {
    return (
        <>
            <table>
                <thead>
                <tr>
                    <th>Click</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                </tr>
                {clients.map((client) => (
                    <Client key={client.id}
                            client={client}
                            selectClient={selectClient}
                    />
                ))}
                </thead>
            </table>

            <Link to='/'> <Button color={'red'} text={'Exit'}/></Link>
        </>
    )
}

export default Clients
