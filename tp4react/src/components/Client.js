const Client = ({client}) => {
    return (
        <div className="client">
            <p>{client.firstName}</p>
            <p>{client.lastName}</p>
        </div>
    )
}

export default Client
