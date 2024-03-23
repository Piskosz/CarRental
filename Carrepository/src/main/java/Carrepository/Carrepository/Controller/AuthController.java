package Carrepository.Carrepository.Controller;

import Carrepository.Carrepository.Model.LoginHaslo;
import Carrepository.Carrepository.Model.Rejestracja;
import Carrepository.Carrepository.Repository.RejestracjaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@CrossOrigin(origins = "http://localhost:3000")

@RestController
public class AuthController {

    @Autowired
    private RejestracjaRepository rejestracjaRepository;

    @PostMapping("/testowy")
    public ResponseEntity<String> login(@RequestBody LoginHaslo loginRequest) {
        String login = loginRequest.getLogin();
        String haslo = loginRequest.getHaslo();

        Rejestracja user = rejestracjaRepository.getByLogin(login);

        if (user != null && user.getHaslo().equals(haslo)) {
            String token = generateJwtToken(login);

            return ResponseEntity.ok(token);
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Nieprawidłowy login lub hasło");
        }
    }

    private String generateJwtToken(String login) {
        return "wygenerowany_jwt_token";
    }
}
