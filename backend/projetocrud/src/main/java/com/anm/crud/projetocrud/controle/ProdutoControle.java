package com.anm.crud.projetocrud.controle;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.anm.crud.projetocrud.modelo.ProdutoModelo;
import com.anm.crud.projetocrud.servico.ProdutoServico;



@RestController
public class ProdutoControle{

    @Autowired
    private ProdutoServico ps;

    @GetMapping("/cadastra")
    public ResponseEntity<?> cadastro(@RequestBody ProdutoModelo pm){
        return ps.cadastrar(pm);
    }

    @GetMapping("/listar")
    public Iterable<ProdutoModelo> listar(){

        return ps.listar();
    }

    @GetMapping("/")
    public String rota() {
        return "A API está funcionado!";
    }
    
}

