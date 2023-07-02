package fr.fms.web;

import fr.fms.business.IBusinessImpl;
import fr.fms.entities.Training;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ResourceLoader;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.StandardCopyOption;
import java.util.List;
import java.io.File;
import org.springframework.core.io.Resource;

@CrossOrigin("*")
@RestController
@RequestMapping("/api")
public class TrainingController {

    @Autowired
    private IBusinessImpl iBusiness;

    @Autowired
    private ResourceLoader resourceLoader;

    /**
     * Retourne une list de Training, "/api/trainings"
     * 
     * @return List Training
     */
    @GetMapping("/trainings")
    public List<Training> allTrainings() {

        Resource resource = resourceLoader.getResource("imageTraining/trainingImage.jpg");
        try {
            File file = resource.getFile();
            System.out.println("file : " + file);
        } catch (IOException e) {
            e.printStackTrace();
            System.out.println("ERRORE : " + e);
        }

        return iBusiness.getTrainings();
    }

    /**
     * Retourne un Training par son ID, "/api/trainings/{id}"
     * 
     * @param id
     * @return Training
     */
    @GetMapping("training/{id}")
    public Training trainingById(@PathVariable Long id) {
        return iBusiness.getTrainingById(id).get();
    }

    @PostMapping("/trainings")
    public ResponseEntity<Training> createTraining(
            @RequestParam("name") String name,
            @RequestParam("description") String description,
            @RequestParam("price") double price,
            @RequestParam("quantity") int quantity,
            @RequestParam(value = "imagePath", required = false) MultipartFile image) {
        System.out.println("image : " + image);

        // Vérifier si le fichier d'image est présent
        String imagePath = null;
        if (image != null && !image.isEmpty()) {
            try {

                // permet de récupérer le nom d'origine du fichier image téléchargé.
                String fileName = image.getOriginalFilename();

                // Chemin de stockage du fichier image
                String storageDirectory = "JavaApiRestTraining/src/main/resources/static/imageTraining/";

                // Chemin complet du fichier image
                String filePath = storageDirectory + fileName;

                // Créer le répertoire de stockage s'il n'existe pas
                File directory = new File(storageDirectory);
                if (!directory.exists()) {
                    directory.mkdirs();
                }

                // Enregistrer le fichier d'image sur le système de fichiers
                File file = new File(filePath);
                Files.copy(image.getInputStream(), file.toPath(), StandardCopyOption.REPLACE_EXISTING);

                // permet d'obtenir le chemin relatif souhaité pour le fichier image.
                storageDirectory = "imageTraining/";
                imagePath = filePath.substring(filePath.lastIndexOf(storageDirectory));

            } catch (IOException e) {
                System.out.println("INTERNAL_SERVER_ERROR : " + e);
                return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
            }
        }

        // Créer l'objet Training avec les données fournies
        Training training = new Training(null, name, description, price, quantity, imagePath);

        // Enregistrer le Training dans la base de données
        Training createdTraining = iBusiness.saveTraining(training);

        // Retourner la réponse avec le Training créé
        return ResponseEntity.status(HttpStatus.CREATED).body(createdTraining);
    }
}
