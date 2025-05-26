import React from "react";

function Formulario({botao, eventoTeclado, cadastrar, obj, cancelar, remover, alterar}) {
    return(
        <form>
            <div className="form-group">
                <input 
                    type='text' 
                    value={obj.nome}  
                    placeholder='Nome do Produto'  
                    onChange={eventoTeclado} 
                    name="nome"  
                    className='form-control'
                />
                <input 
                    type='text' 
                    value={obj.marca} 
                    placeholder='Marca do Produto' 
                    onChange={eventoTeclado} 
                    name="marca" 
                    className='form-control'
                />
            </div>

            <div className="form-actions">
                {botao ? (
                    <button type="button" onClick={cadastrar} className='btn btn-primary'>
                        <span className="icon">+</span>
                        Adicionar Produto
                    </button>
                ) : (
                    <>
                        <button type="button" onClick={alterar} className="btn btn-warning">
                            <span className="icon">✏️</span>
                            Editar
                        </button>
                        <button type='button' onClick={remover} className='btn btn-danger'>
                            <span className="icon">🗑️</span>
                            Remover
                        </button>
                        <button type='button' onClick={cancelar} className='btn btn-secondary'>
                            <span className="icon">✖️</span>
                            Cancelar
                        </button>
                    </>
                )}
            </div>
        </form>
    )
}

export default Formulario;