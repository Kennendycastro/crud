import React, { useEffect, useState } from "react";
import './App.css';
import Formulario from './Formulario';
import Tabela from './Tabela';

function App() {
  //Objeto produto
  const produto = {
    codigo: null,
    nome: '',
    marca: ''
  }

  //UseState
  const [btnCadastrar, setBtnCadastrar] = useState(true);
  const [produtos, setProdutos] = useState([]);
  const [objProduto, setObjProduto] = useState(produto);
  const [loading, setLoading] = useState(true);

  //UseEffect
  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:8080/listar")
      .then(retorno => retorno.json())
      .then(retorno_convertido => {
        setProdutos(retorno_convertido);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  //Obter dados do formulário
  const aoDigitar = (e) => {
    setObjProduto({ ...objProduto, [e.target.name]: e.target.value });
  }

  //Cadastrar produto
  const cadastrar = () => {
    fetch('http://localhost:8080/cadastrar', {
      method: 'post',
      body: JSON.stringify(objProduto),
      headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json'
      }
    })
      .then(retorno => retorno.json())
      .then(retorno_convertido => {
        if (retorno_convertido.mensagem !== undefined) {
          alert(retorno_convertido.mensagem);
        } else {
          setProdutos([...produtos, retorno_convertido]);
          alert('Produto cadastrado com sucesso!');
          limparFormulario();
        }
      })
  }

  //Alterar produto
  const alterar = () => {
    fetch('http://localhost:8080/alterar', {
      method: 'put',
      body: JSON.stringify(objProduto),
      headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json'
      }
    })
      .then(retorno => retorno.json())
      .then(retorno_convertido => {
        if (retorno_convertido.mensagem !== undefined) {
          alert(retorno_convertido.mensagem);
        } else {
          alert('Produto alterado com sucesso!');
          
          //Cópia do vetor de produtos
          let vetorTemp = [...produtos];

          //Índice
          let indice = vetorTemp.findIndex((p) => {
            return p.codigo === objProduto.codigo;
          });

          //Alterar produto do vetorTemp
          vetorTemp[indice] = objProduto;

          //Atualizar o vetor de produtos
          setProdutos(vetorTemp);

          limparFormulario();
        }
      })
  }

  //Remover produto
  const remover = () => {
    fetch('http://localhost:8080/remover/' + objProduto.codigo, {
      method: 'delete',
      headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json'
      }
    })
      .then(retorno => retorno.json())
      .then(retorno_convertido => {
        alert(retorno_convertido.mensagem);

        //Cópia do vetor de produtos
        let vetorTemp = [...produtos];

        //Índice
        let indice = vetorTemp.findIndex((p) => {
          return p.codigo === objProduto.codigo;
        });

        //Remover produto do vetorTemp
        vetorTemp.splice(indice, 1);

        //Atualizar o vetor de produtos
        setProdutos(vetorTemp);

        limparFormulario();
      })
  }

  //Limpar formulário
  const limparFormulario = () => {
    setObjProduto(produto);
    setBtnCadastrar(true);
  }

  //Selecionar produto
  const selecionarProduto = (indice) => {
    setObjProduto(produtos[indice]);
    setBtnCadastrar(false);
  }

  return (
    <div className="app-container">
      <h1 className="app-title">Gerenciamento de Produtos</h1>
      <p className="app-subtitle">Cadastre, edite e gerencie seu inventário de produtos</p>
      
      <Formulario 
        botao={btnCadastrar} 
        eventoTeclado={aoDigitar} 
        cadastrar={cadastrar} 
        obj={objProduto} 
        cancelar={limparFormulario} 
        remover={remover} 
        alterar={alterar}
      />
      
      {loading ? (
        <div className="loading">Carregando produtos...</div>
      ) : (
        <div className="table-container">
          <Tabela vetor={produtos} selecionar={selecionarProduto} />
        </div>
      )}
    </div>
  );
}

export default App;
