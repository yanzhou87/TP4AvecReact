package library.forms;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class SaveArticleForm {

    private long id;
    private String title;
    private String author;
    private int nombreExemplaires = 0;

}
