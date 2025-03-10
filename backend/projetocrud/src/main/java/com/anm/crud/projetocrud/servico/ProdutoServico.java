package com.anm.crud.projetocrud.servico;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.anm.crud.projetocrud.modelo.ProdutoModelo;
import com.anm.crud.projetocrud.repositorio.ProdutoRepositorio;

@Service
public class ProdutoServico {

    @Autowired
    private ProdutoRepositorio pr;

    public Iterable<ProdutoModelo> listar(){

        return pr.findAll();
    }
}
