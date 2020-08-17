import React, { Component } from 'react'

export default class Calculadora extends Component{
    constructor(){
        super()
        this.state={
            oper1:1,
            oper2:1,
            operador:'+',
            resultado:1
        }
    }


    setOper1(e){
        this.setState({
            oper1 : Number(e.target.value)
        })
    }
    setOper2(e){
        this.setState({
            oper2 : Number(e.target.value)
        })
    }
    setOperador(e){
        this.setState({
            operador : e.target.value
        })
    }
    opera(){
        switch(this.state.operador){
            case '+':this.setState({resultado:this.state.oper1 + this.state.oper2})
                break
            case '-':this.setState({resultado:this.state.oper1 - this.state.oper2})
                break
            case '*':this.setState({resultado:this.state.oper1 * this.state.oper2})
                break
            case '/':if(this.state.oper2 !== 0){
                this.setState({resultado:this.state.oper1 / this.state.oper2})
            }
            else{
                this.setState({resultado:'impossivel divisão por 0'})
            }
            default:break
        }
    }

    render(){
        return(
            <div>
                <h1>projeto de Calculadora</h1>
                <h2>Operando 1:<input type="number" value= {this.setOper1} onChange={e=>this.setOper1(e)} /></h2>
                <h2>Operando 2:<input type="number" value= {this.setOper2} onChange={e=>this.setOper1(e)} /></h2>
                <h2>Operador:<input type="string" value= {this.operador} onChange={e=>this.setOper1(e)} /></h2>
                <h2><button type="button" onClick={ e=>this.opera()}>Calcular </button></h2>
                <h2>Resultado : {this.state.resultado}</h2>
            </div>
        )
    }
}