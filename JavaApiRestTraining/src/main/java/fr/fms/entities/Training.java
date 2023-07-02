package fr.fms.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;
import java.io.Serializable;

// import static javax.persistence.GenerationType.TABLE;

@Entity
@Table(name = "training")
@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Training implements Serializable {

    // public Training(String name, String description, double price, int quantity,
    // String imagePath) {
    // }

    private static final long serialVersionUID = 1L;
    // @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    // private Long id;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    private String name;
    private String description;

    private double price;
    private int quantity;
    private String imagePath;

}
