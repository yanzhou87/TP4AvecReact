package library.model;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;

@Entity
@Data
@NoArgsConstructor
@DiscriminatorValue("admin")
public class Admin extends LibraryUser {

    public Admin(String firstName, String lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    public Admin(long id, String firstName, String lastName, int age) {
        this.id =id;
        this.firstName=firstName;
        this.lastName = lastName;
        this.age = age;
    }

    public void setId(long id){
        this.id =id;
    }
    public long getId(){
        return id;
    }
    @Override
    public String toString() {
        return "Admin{" +
                "id=" + id +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", age=" + age +
                ", address='" + address + '\'' +
                '}';
    }
}
