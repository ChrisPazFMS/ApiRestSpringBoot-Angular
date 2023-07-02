package fr.fms.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.web.multipart.MultipartFile;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class TrainingDto {

    private Long id;
    private String name;
    private String description;
    private double price;
    private int quantity;
    private MultipartFile imagePath;

    public String getImageFileName() {
        if (imagePath != null) {
            return imagePath.getOriginalFilename();
        }
        return null;
    }

    // Autres propriétés et méthodes de la classe
}
