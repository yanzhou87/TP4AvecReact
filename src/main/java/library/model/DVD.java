package library.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;

@Entity
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@DiscriminatorValue("DVD")
public class DVD extends Article {

    private double durationMovie;

    public DVD(String title) {
        super(title);
    }

    public DVD(long id, String title, String author, int nombreExemplaires, double durationMovie) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.nombreExemplaires = nombreExemplaires;
        this.durationMovie = durationMovie;
    }

    public DVD(String title, String author, int nombreExemplaires, double durationMovie) {
        this.title = title;
        this.author = author;
        this.nombreExemplaires = nombreExemplaires;
        this.durationMovie = durationMovie;
    }

    @Override
    public int dayEmprunt() {
        return 7;
    }

    @Override
    public String toString() {
        return "DVD{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", author='" + author + '\'' +
                ", durationMovie=" + durationMovie +
                '}';
    }
}
