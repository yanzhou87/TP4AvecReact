package library.forms;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class SaveDvdForm {

    private long id;
    @NotNull
    @NotBlank
    @Size(min = 3)
    private String title;
    @NotNull
    private String author;
    private double durationMovie;


}
