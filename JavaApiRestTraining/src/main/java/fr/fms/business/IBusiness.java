package fr.fms.business;

import fr.fms.entities.Training;
import org.springframework.stereotype.Service;
import java.util.List;

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
    Training getTrainingById(Long id);

    /**
     * Méthode qui enregitre un Training en base de données.
     * 
     * @param training
     * @return
     */
    Training saveTraining(Training training);

    /**
     * Méthode qui supprime un Training en base de donées.
     * 
     * @param id
     * @return
     */
    void deleteTraining(Long id);

    /**
     * Méthode qui modifie le Training en base de données.
     * 
     * @param training
     * @return
     */
    Training updateTraining(Training training);
}
