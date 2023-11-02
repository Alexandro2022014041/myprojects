package br.cesul.pedidoCesul.vendedor;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDateTime;
import java.util.UUID;

@Data
@Entity(name = "tb_vendedor")
public class VendedorModel {

    @Id
    @GeneratedValue(generator = "UUID")
    private UUID uuid;

    @Column(unique = true)
    private String email;
    private String nome;

    @Column(name = "password")
    private String senha;

    @CreationTimestamp
    private LocalDateTime dataCriacao;

    private LocalDateTime dataInativacao;
    private boolean situacao;
}
