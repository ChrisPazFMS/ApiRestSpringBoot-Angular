package fr.fms.business;

import fr.fms.entities.Training;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public interface IBusiness {

    /**
     * Méthode qui retourne toutes les cours de la base de données.
     * 
     * @return
     */
    public List<Training> getTrainings();

    /**
     * Méthode qui retourne un cour de la base de données.
     *
     * @return
     */
    Optional<Training> getTrainingById(Long id);

    /**
     * Enregitre un Training en base de donnée
     * 
     * @param training
     * @return
     */
    Training saveTraining(Training training);
}
