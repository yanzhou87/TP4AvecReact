package library.forms;

import library.model.Admin;
import lombok.Data;

@Data
public class SaveAdminForm {
    private String id;
    private  String firstName;
    private  String lastName;
    private  int age;

    public SaveAdminForm(String id, String firstName, String lastName, int age) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    public SaveAdminForm(){}
    public SaveAdminForm(Admin admin){
        this(Long.toString(admin.getId()),admin.getFirstName(),admin.getLastName(),admin.getAge());
    }

    public Admin toAdmin(){
        return new Admin(firstName,lastName);
    }
}
