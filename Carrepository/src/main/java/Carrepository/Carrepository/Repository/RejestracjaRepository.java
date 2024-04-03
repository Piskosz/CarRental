package Carrepository.Carrepository.Repository;


import Carrepository.Carrepository.Model.LoginPassword;
import Carrepository.Carrepository.Model.Rejestration;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public class RejestracjaRepository {

    @Autowired
    JdbcTemplate jdbcTemplate;

    public List<Rejestration> getAll_3(){

        return jdbcTemplate.query("SELECT * FROM Rejestracja;", BeanPropertyRowMapper.newInstance(Rejestration.class));
    }
    public List<LoginPassword> getAll_4() {
        return jdbcTemplate.query("SELECT login, haslo FROM Rejestracja;", (rs, rowNum) -> {
            LoginPassword loginPassword = new LoginPassword();
            loginPassword.setLogin(rs.getString("login"));
            loginPassword.setHaslo(rs.getString("haslo"));
            return loginPassword;
        });
    }

    public Rejestration getById_3(int id ){

        return jdbcTemplate.queryForObject("SELECT * from Rejestracja WHERE " + "id = ?",BeanPropertyRowMapper.newInstance(Rejestration.class),id);

    }


    public int save2(List<Rejestration> rejestrations) {
        rejestrations.forEach(rejestration ->  jdbcTemplate
                .update("INSERT INTO Rejestracja(login,haslo,mail) VALUES(?,?,?)",
                        rejestration.getLogin(), rejestration.getHaslo(), rejestration.getMail()

                ));


        return 1;
    }

    public Rejestration getByLogin(String login) {
        try {
            return jdbcTemplate.queryForObject(
                    "SELECT * FROM Rejestracja WHERE login = ?",
                    BeanPropertyRowMapper.newInstance(Rejestration.class),
                    login
            );
        } catch (org.springframework.dao.EmptyResultDataAccessException e) {
            return null;
        }
    }




}
