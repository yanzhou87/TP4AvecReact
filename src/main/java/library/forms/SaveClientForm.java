package library.forms;

import library.model.Client;
import lombok.Data;

@Data
public class SaveClientForm {
    private long id;
    private  String firstName;
    private  String lastName;
    private  int age;

    public SaveClientForm(long id, String firstName, String lastName, int age) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    public SaveClientForm(){}
    public SaveClientForm(Client client){
        this(client.getId(),client.getFirstName(),client.getLastName(),client.getAge());
    }

    public Client toClient(){
        return new Client(firstName,lastName,age);
    }
}
