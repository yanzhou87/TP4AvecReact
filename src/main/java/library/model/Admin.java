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
}
