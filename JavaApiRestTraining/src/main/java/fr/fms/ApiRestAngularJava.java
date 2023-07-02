package fr.fms;

import fr.fms.dao.TrainingRepository;
import fr.fms.entities.Training;

import javax.imageio.ImageIO;

// import org.jboss.jandex.Main;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import java.awt.image.BufferedImage;
import java.io.ByteArrayOutputStream;
import java.io.File;
// import java.io.File;
import java.io.FileWriter;
import java.io.IOException;

@SpringBootApplication
public class ApiRestAngularJava implements CommandLineRunner {

	@Autowired
	TrainingRepository trainingRepository;

	public static void main(String[] args) {

		SpringApplication.run(ApiRestAngularJava.class, args);
	}

	@Override
	public void run(String... args) {

		generateData();
	}

	private void generateData() {

		trainingRepository.save(new Training(null, "php", "programming de php", 2500, 1, "imageTraining/php1.jpg"));
		trainingRepository.save(new Training(null, "python", "programming de python",
				6200, 1, "imageTraining/python1.jpg"));
		trainingRepository.save(
				new Training(null, "JavaScript", "programming de JavaScript", 5400, 1,
						"imageTraining/javaScript1.jpg"));
		trainingRepository
				.save(new Training(null, "Java Spring Boot", "programming de Java 8 and Spring Boot", 7600, 1,
						"imageTraining/springBoot1.jpg"));
		trainingRepository.save(new Training(null, "Java", "programming de Java", 6425, 1, "imageTraining/java1.jpg"));
		trainingRepository.save(new Training(null, "php", "programming de php", 4650,
				1, "imageTraining/php2.png"));
		trainingRepository.save(new Training(null, "python", "programming de python",
				7425, 1, "imageTraining/python2.jpg"));
		trainingRepository.save(new Training(null, "JavaScript", "programming de JavaScript", 6425, 1,
				"imageTraining/javaScript2.jpg"));
		trainingRepository
				.save(new Training(null, "Java Spring Boot", "programming de Java 8 and Spring Boot", 3645, 1,
						"imageTraining/springBoot2.jpg"));
		trainingRepository.save(new Training(null, "Java", "programming de Java", 6425, 1, "imageTraining/java2.jpg"));
	}

}
