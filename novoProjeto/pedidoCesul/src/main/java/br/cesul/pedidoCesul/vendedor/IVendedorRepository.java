package br.cesul.pedidoCesul.vendedor;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface IVendedorRepository extends JpaRepository<VendedorModel, UUID> {
    VendedorModel findByEmail(String email);
}
