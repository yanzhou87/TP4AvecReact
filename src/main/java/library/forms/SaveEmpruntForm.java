package library.forms;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@AllArgsConstructor
@NoArgsConstructor
public class SaveEmpruntForm {
    private long id;
    private long clientId;
    private long articleId;
    private String dateEmprunt;
    private String dateReturn;
    private boolean returnEmprdunt = false;

    public SaveEmpruntForm(long id, long clientId, long articleId, String dateEmprunt) {
         this.id =id;
         this.clientId = clientId;
         this.articleId = articleId;
         this.dateEmprunt = dateEmprunt;
    }
}
