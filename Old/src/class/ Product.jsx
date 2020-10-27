import React, { Component } from 'react'

class Product extends Component{
    constructor(props){
        super(props);
        this.state = {
            nome:'',
            qtd:0,
            preco:0,
            total:0
        }
        
    }
    setNome(e){
        this.setState({
            nome: e.target.value
        })
    }
    setQtd(e){
        this.setState({
            qtd: e.target.value
        })
    }
    setPreco(e){
        this.setState({
            preco: e.target.value
        })
    }

    calcular(){
        this.setState({
            total:  this.state.preco * this.state.qtd
        })
    }
    render(){
        return(
            <div>
                <div>
                    <labe> Nome do produto {this.setNome}</labe>
                    <br/>
                    <input type="text"  value={this.state.nome}  onChange={(e)=>this.setNome(e)}/>
                </div>
                <br/><br/>
                <div>
                    <label>Quantidade do produto {this.setsetQtdNome}</label>
                    <br/>
                    <input type="number"value={this.state.qtd} onChange={(e)=>this.setQtd(e)}/>
                </div>
                <br/><br/>
                <div>
                    <label htmlFor="">Preço do produto {this.setPreco}</label>
                    <br/>
                    <input type="number" value={this.state.preco}onChange={(e) =>this.setPreco(e)} />
                </div>
                <br/><br/>
                <div>
                    <button onClick={()=>this.calcular}>Calcular </button>
                    <div>
                        <label>Total : {this.state.total}</label>
                    </div>
                </div>
            </div>
        )
    }
}
export default Product;