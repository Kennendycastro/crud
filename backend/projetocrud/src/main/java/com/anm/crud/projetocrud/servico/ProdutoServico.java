package com.anm.crud.projetocrud.servico;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.anm.crud.projetocrud.modelo.ProdutoModelo;
import com.anm.crud.projetocrud.modelo.RespostaModelo;
import com.anm.crud.projetocrud.repositorio.ProdutoRepositorio;

@Service
public class ProdutoServico {

    @Autowired
    private ProdutoRepositorio pr;

    @Autowired
    private RespostaModelo rm;
    
    public Iterable<ProdutoModelo> listar(){

        return pr.findAll();
    }

    //Cadastrar produtos
    
    public ResponseEntity<?> cadastrar(ProdutoModelo pm){
       if(pm.getNome().equals("")){

            rm.setResposta("O nome do produto é obrigatorio");
            return new ResponseEntity<RespostaModelo>(rm, HttpStatus.BAD_REQUEST);

        }else if(pm.getNome().equals("")){
            
            rm.setResposta("O nome da marca do produto é obrigatoria");
            return new ResponseEntity<RespostaModelo>(rm, HttpStatus.BAD_REQUEST);
        }else{
            return new ResponseEntity<ProdutoModelo>(pr.save(pm),HttpStatus.CREATED);
        }
    }
}
