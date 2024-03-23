package Carrepository.Carrepository.Model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Rejestracja {

    private int id;
    private String Login;
    private String Haslo;
    private String Mail;


}
