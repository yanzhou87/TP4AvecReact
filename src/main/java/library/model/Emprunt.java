package library.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "EMPRUNT")
public class Emprunt {
    @Id
    @GeneratedValue(generator = "emprunt_seq")
    private long id;

    @ManyToOne
    @JoinColumn(name = "CLIENT_ID")
    private Client client;

    @OneToOne
    @JoinColumn(name = "EXEMPLAIRE_ID")
    private Article article;

    private LocalDate dateEmprunt;
    private LocalDate dateReturn;
    private boolean isReturn = false;

    public Emprunt(Client client, Article article) {
        this.client = client;
    }

    public Emprunt(Client client, LocalDate dateReturn,boolean isReturn) {
        this.client = client;
        this.dateEmprunt = dateReturn;
        this.isReturn = isReturn;
    }

    public Emprunt(Client client) {
        this.client = client;
    }

    @Override
    public String toString() {
        return "Emprunt{" +
                "id=" + id +
                ", client=" + client.firstName +
                ", date=" + dateEmprunt +
                ", isReturn=" + isReturn +
                '}';
    }
}
