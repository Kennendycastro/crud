package com.anm.crud.projetocrud.repositorio;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import com.anm.crud.projetocrud.modelo.ProdutoModelo;

@Repository
public interface ProdutoRepositorio extends CrudRepository<ProdutoModelo, Long> {
    
}
