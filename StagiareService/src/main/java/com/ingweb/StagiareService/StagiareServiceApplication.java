package com.ingweb.StagiareService;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;


@SpringBootApplication
public class StagiareServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(StagiareServiceApplication.class, args);
	}

	@Bean
	CommandLineRunner star(StagiareRepository stagiareRepository){
		return args -> {
			stagiareRepository.save(new Stagiare(null,"Mohamed","Mahiouz","MahiouzMd@gmail.com"));
			stagiareRepository.save(new Stagiare(null,"Chahine","Selmane","ChahineSl@gmail.com"));
			stagiareRepository.save(new Stagiare(null,"Jawad","Gherab","JawadGh@gmail.com"));
			stagiareRepository.save(new Stagiare(null,"abdou","Illizi","AbdouIl@gmail.com"));
		};
	}
}
