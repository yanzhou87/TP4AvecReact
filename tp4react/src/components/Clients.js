import Client from "./Client";
import Button from "./Button";

const Clients = ({clients, onClickClient}) => {
    return (
        <>
            <table>
                <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                </tr>
                {clients.map((client) => (
                    <Client key={client.id}
                            client={client}
                    />
                ))}
                </thead>
            </table>

            <Button color={'red'}
                    text={'Exit'} onClick={() => window.location.href = '/'}/>
        </>
    )
}

export default Clients
