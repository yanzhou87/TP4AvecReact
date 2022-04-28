import Client from "./Client";

const Clients = ({clients, onClickClient}) => {
    return (

        <>
            {clients.map((client) => (
                <Client key={client.id}
                      client={client}
                      />
            ))}
        </>
    )
}

export default Clients
