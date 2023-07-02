package fr.fms.business;

import fr.fms.dao.TrainingRepository;

import fr.fms.entities.Training;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class IBusinessImpl implements IBusiness{

    @Autowired
    TrainingRepository trainingRepository;

    @Override
    public List<Training> getTrainings() {
        return trainingRepository.findAll();
    }

    @Override
    public Optional<Training> getTrainingById(Long id) {
        return trainingRepository.findById(id);
    }

    @Override
    public Training saveTraining(Training training) {
        return trainingRepository.save(training);
    }
}
