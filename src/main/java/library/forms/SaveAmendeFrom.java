package library.forms;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class SaveAmendeFrom {
    private long id;
    private long clientId;
    private long amendeForDay = 2L;
    private long sommeAmende;
}
