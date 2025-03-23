package com.anm.crud.projetocrud.controle;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.anm.crud.projetocrud.modelo.ProdutoModelo;
import com.anm.crud.projetocrud.modelo.RespostaModelo;
import com.anm.crud.projetocrud.servico.ProdutoServico;



@RestController
@CrossOrigin(origins = "*")
public class ProdutoControle{

    @Autowired

    private ProdutoServico ps;

    @DeleteMapping("/remover/{codigo}")

    public ResponseEntity<RespostaModelo> remover(@PathVariable Long codigo){

        return ps.remover(codigo);
    }

    @PostMapping("/cadastrar")
    public ResponseEntity<?> cadastro(@RequestBody ProdutoModelo pm){
        return ps.cadastrarAlterar(pm, "alterar");
    }

    @PutMapping("/alterar")
    public ResponseEntity<?> alterar(@RequestBody ProdutoModelo pm){
        return ps.cadastrarAlterar(pm, "alterar");
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

