package library.forms;

import library.model.Admin;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class SaveAdminForm {
    private long id;
    private  String firstName;
    private  String lastName;
    private  int age;

}
