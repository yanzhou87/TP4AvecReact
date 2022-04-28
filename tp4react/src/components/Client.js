const Client = ({client}) => {
    return (
        <tr className="client">
            <td>{client.firstName}</td>
            <td>{client.lastName}</td>
        </tr>
    )
}

export default Client
