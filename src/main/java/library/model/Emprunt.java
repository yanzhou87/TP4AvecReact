package library.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

@Entity
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "EMPRUNT")
public class Emprunt {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
   // @GeneratedValue(generator = "emprunt_seq")
    private long id;

    @ManyToOne
    @JoinColumn(name = "CLIENT_ID")
    private Client client;

    @OneToOne
    @JoinColumn(name = "EXEMPLAIRE_ID")
    private Article article;

    private LocalDate dateEmprunt = LocalDate.now();
    private LocalDate dateReturnAttendu;
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

    public Emprunt(long id, Client client, Article article) {
        this.id = id;
        this.client = client;
        this.article = article;
    }

    public Emprunt(long id, Client client, Article article, String dateEmprunt,  String dateReturnAttendu) {
        this.id = id;
        this.client = client;
        this.article = article;
        this.dateEmprunt = LocalDate.parse(dateEmprunt, DateTimeFormatter.ofPattern("yyyy-MM-dd"));
        this.dateReturnAttendu = LocalDate.parse(dateReturnAttendu, DateTimeFormatter.ofPattern("yyyy-MM-dd"));
    }


    @Override
    public String toString() {
        return "Emprunt{" +
                "id=" + id +
                ", client=" + client.firstName +
                ", article=" + article.title +
                ", dateEmprunt=" + dateEmprunt +
                ", dateReturnAttendu=" + dateReturnAttendu +
                ", dateReturn=" + dateReturn +
                ", returnEmprdunt=" + returnEmprdunt +
                '}';
    }
}
