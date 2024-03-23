package Carrepository.Carrepository.Repository;

import Carrepository.Carrepository.Model.Auta;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;


import java.util.List;


@Repository
public class AutaRepository {
    @Autowired
    JdbcTemplate jdbcTemplate;

    public List<Auta> getAll(){

        return jdbcTemplate.query("SELECT * FROM Auta;", BeanPropertyRowMapper.newInstance(Auta.class));
    }

    public Auta getById(int id ){
        return jdbcTemplate.queryForObject("SELECT  from Auta WHERE " + "id = ?",BeanPropertyRowMapper.newInstance(Auta.class),id);

    }
    public Auta getByLogin(String login) {
        return jdbcTemplate.queryForObject("SELECT * FROM Auta WHERE login = ?",
                BeanPropertyRowMapper.newInstance(Auta.class), login);
    }



    public int save(List<Auta> autas) {
        autas.forEach(auta ->  jdbcTemplate
                .update("INSERT INTO Auta(Marka,Model,Rocznik,Czy_jest_wynajete) VALUES(?,?,?,?)",
                        auta.getMarka(),auta.getModel(),auta.getRocznik(),auta.getCzy_jest_wynajete()


                ));


        return 1;
    }
}
