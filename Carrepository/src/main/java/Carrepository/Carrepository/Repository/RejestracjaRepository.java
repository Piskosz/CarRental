package Carrepository.Carrepository.Repository;


import Carrepository.Carrepository.Model.LoginHaslo;
import Carrepository.Carrepository.Model.Rejestracja;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public class RejestracjaRepository {

    @Autowired
    JdbcTemplate jdbcTemplate;

    public List<Rejestracja> getAll_3(){

        return jdbcTemplate.query("SELECT * FROM Rejestracja;", BeanPropertyRowMapper.newInstance(Rejestracja.class));
    }
    public List<LoginHaslo> getAll_4() {
        return jdbcTemplate.query("SELECT login, haslo FROM Rejestracja;", (rs, rowNum) -> {
            LoginHaslo loginHaslo = new LoginHaslo();
            loginHaslo.setLogin(rs.getString("login"));
            loginHaslo.setHaslo(rs.getString("haslo"));
            return loginHaslo;
        });
    }

    public Rejestracja getById_3(int id ){

        return jdbcTemplate.queryForObject("SELECT * from Rejestracja WHERE " + "id = ?",BeanPropertyRowMapper.newInstance(Rejestracja.class),id);

    }


    public int save2(List<Rejestracja> rejestracjas) {
        rejestracjas.forEach(rejestracja ->  jdbcTemplate
                .update("INSERT INTO Rejestracja(login,haslo,mail) VALUES(?,?,?)",
                        rejestracja.getLogin(),rejestracja.getHaslo(),rejestracja.getMail()

                ));


        return 1;
    }

    public Rejestracja getByLogin(String login) {
        try {
            return jdbcTemplate.queryForObject(
                    "SELECT * FROM Rejestracja WHERE login = ?",
                    BeanPropertyRowMapper.newInstance(Rejestracja.class),
                    login
            );
        } catch (org.springframework.dao.EmptyResultDataAccessException e) {
            return null; // Jeśli nie ma użytkownika o podanym loginie
        }
    }




}
