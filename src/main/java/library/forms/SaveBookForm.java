package library.forms;

import library.model.Book;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Data

@AllArgsConstructor
@NoArgsConstructor
public class SaveBookForm {
    private long id;

    @NotNull
    @NotBlank
    @Size(min=3)
    private String title;

    @NotNull
    private String author;
    private String articleType;
    private String yearPublication;
    private int nombreExemplaires = 0;
    private String editor;
    private int numbrePages;


}
