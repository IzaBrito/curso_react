import logo from './logo.svg';
import './App.css';
import React from 'react';

import './index.css'

class App extends React.Component{
  state = {
    nome : ''
  }
  modificarNome = (event) => {
    this.setState({
      nome: event.target.value
    })
  }
  
  Cursos = () => {
    const cursos = ["Ciência da Computação", "Engenharia da Computação", "Sistemas de Informação", "Engenharia de Software", "Redes de Computadores"]
    const comboBoxCursos = cursos.map( curso => <option>{curso}</option>)

    return(
      <select>
        {comboBoxCursos}
      </select>
    )
  }

  Cidade = () => {
    const cidades = ["Belo horizonte", "Contagem", "Betim", "Nova lima", "Sabará", "Lagoa Santa"]
    const comboBoxCidades = cidades.map( cidade => <option>{cidade}</option>)

    return(
      <select>
        {comboBoxCidades}
      </select>
    )
  }

  SimNao = () => {
    const opcoes = ["Sim", "Não"]
    const comboBoxOpcoes = opcoes.map( opcao => <option>{opcao}</option>)

    return(
      <select>
        {comboBoxOpcoes}
      </select>
    )
  }

  render(){
    const ComboCidades = () => this.Cidade()
    const titulo = <h1>Perfil do Estudante</h1>

    return(
      <React.Fragment>
        <div className='conjunto' src='fundo.jpg' width={900} height={900}>
          <div className='perfil'>
            {titulo}
            <p>Qual o seu nome? <input type='text' value={this.state.nome} onChange={this.modificarNome}/></p>
            <h3>Seja bem vindo(a) {this.state.nome}, sua idade é de {this.props.idade} anos? </h3>
            {this.SimNao()}
            <p><b>Selecione</b> sua cidade:</p>
            <ComboCidades />
          </div>
          <div className='curso'>
            <h1>Cursos de TI</h1>
            <p><b>Selecione</b> o curso da sua escolha:</p>
            {this.Cursos()}
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default App;