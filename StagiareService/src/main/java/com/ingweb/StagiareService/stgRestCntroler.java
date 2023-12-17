package com.ingweb.StagiareService;

import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin("*")

@RestController
public class stgRestCntroler {
private StagiareRepository stagiareRepository;
public stgRestCntroler(StagiareRepository stagiareRepository){this.stagiareRepository = stagiareRepository;}
//http:localhost:8081/stagiares
    @GetMapping(path = "/stagiares")
    public List<Stagiare>getallStg(){
    return stagiareRepository.findAll();
    }
    @GetMapping(value = "/stagiares/{id}")
    public Stagiare getStg(@PathVariable(name = "id")Long id){
    return stagiareRepository.findById(id).get();
    }
    @PutMapping(value = "/stagiares/{id}")
    public Stagiare updateStg(@PathVariable(name = "id")Long id, @RequestBody Stagiare stg){
    stg.setId(id);
    return stagiareRepository.save(stg);
    }
    @PostMapping(value = "/stagiares")
    public Stagiare save(@RequestBody Stagiare stg){
    return stagiareRepository.save(stg);
    }
    @DeleteMapping(value = "/stagiares/{id}")
    public void delete(@PathVariable(name = "id")Long id){
        stagiareRepository.deleteById(id);
        }
    }

