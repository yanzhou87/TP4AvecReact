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
@DiscriminatorValue("CD")
public class CD extends Article{

    private double durationMovie;

    public CD(String title) {
        super(title);
    }

    public CD(long id, String title, String author, int nombreExemplaires, double durationMovie) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.nombreExemplaires = nombreExemplaires;
        this.durationMovie = durationMovie;
    }

    @Override
    public int dayEmprunt() {
        return 3;
    }

    @Override
    public String toString() {
        return "CD{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", author='" + author + '\'' +
                ", durationMovie=" + durationMovie +
                '}';
    }
}
