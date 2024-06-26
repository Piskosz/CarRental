package Carrepository.Carrepository.Controller;

import Carrepository.Carrepository.Model.Auta;
import Carrepository.Carrepository.Model.LoginPassword;
import Carrepository.Carrepository.Model.Rejestration;
import Carrepository.Carrepository.Repository.AutaRepository;
import Carrepository.Carrepository.Repository.RejestracjaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;


@RestController
@RequestMapping
@CrossOrigin(origins = "http://localhost:3000")
public class DemoControler {

    @Autowired
    AutaRepository autaRepository;

    @Autowired
    RejestracjaRepository rejestracjaRepository;


    @GetMapping("/AUTA")
    public List<Auta> getall(){
        return autaRepository.getAll();

    }

    @GetMapping("AUTA/{id}")
    public Auta getById(@PathVariable("id")int id){

        return autaRepository.getById(id);

    }

    @PostMapping("Auta/dodawanie/")
    public int add2(@RequestBody List<Auta> autas){
        return autaRepository.save(autas);

    }
    @GetMapping("/Rejestracja")
    public List<Rejestration> getall_3(){
        return rejestracjaRepository.getAll_3();
    }

    @GetMapping("Rejestracja/{id}")
    public Rejestration getById_3(@PathVariable("id")int id){

        return rejestracjaRepository.getById_3(id);

    }

    @PostMapping("Rejestracja/dodawanie/")
    public int add(@RequestBody List<Rejestration> rejestrations){
        return rejestracjaRepository.save2((List<Rejestration>) rejestrations);

    }

    @GetMapping("/Logowanie")
    public List<LoginPassword> getall_4(){
        return rejestracjaRepository.getAll_4();
    }




}




