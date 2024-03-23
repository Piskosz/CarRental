package Carrepository.Carrepository.Model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor

public class Auta {
    private int id;
    private String Marka;
    private String Model;
    private int Rocznik;
    private int Czy_jest_wynajete;

}

