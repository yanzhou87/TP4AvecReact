package library.model;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.CascadeType;
import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.persistence.OneToMany;
import java.util.ArrayList;
import java.util.List;
import org.springframework.data.annotation.Id;
import javax.persistence.Entity;
@Entity
@Data
@NoArgsConstructor
@DiscriminatorValue("client")

public class Client extends LibraryUser {

    @OneToMany(mappedBy = "client", cascade = CascadeType.ALL)
    private List<Emprunt> emprunts = new ArrayList<>();

    @OneToMany(mappedBy = "client", cascade = CascadeType.ALL)
    private List<Amende> amendes = new ArrayList<>();

    public Client(String firstName, String lastName, int age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    public Client(long id, String firstName, String lastName, int age) {
        this.id =id;
        this.firstName=firstName;
        this.lastName = lastName;
        this.age = age;
    }

    @Override
    public String toString() {
        return "Client{" +
                "id=" + id +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", age=" + age +
                ", address='" + address + '\'' +
                ", emprunts='" + emprunts + '\'' +
                ", amendes='" + amendes + '\'' +
                '}';
    }

    public void addEmprunt(Emprunt emprunt) {
        emprunts.add(emprunt);
        emprunt.setClient(this);
    }

    public void addAmende(Amende amende) {
        amendes.add(amende);
        amende.setClient(this);
    }

    public void setId(long id){
        this.id =id;
    }
    public long getId(){
        return id;
    }
}
