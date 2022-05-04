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
    private boolean returnEmprdunt = false;

    public Emprunt(Client client, Article article) {
        this.client = client;
        this.article = article;
    }

    public Emprunt(Client client, LocalDate dateReturn,boolean ReturnEmprdunt) {
        this.client = client;
        this.dateEmprunt = dateReturn;
        this.returnEmprdunt = ReturnEmprdunt;
    }

    public Emprunt(Client client) {
        this.client = client;
    }

    @Override
    public String toString() {
        return "Emprunt{" +
                "id=" + id +
                ", client=" + client.firstName +
                ", article=" + article.title +
                ", dateEmprunt=" + dateEmprunt +
                ", dateReturn=" + dateReturn +
                ", returnEmprdunt=" + returnEmprdunt +
                '}';
    }
}
