import { GrFormNextLink, GrFormPrevious } from "react-icons/gr"
import { FiSend } from "react-icons/fi"
import { EnderecoForm } from "./components/Endereco"
import { Agradecimento } from "./components/Agradecimento"
import { DadosPessoaisForm } from "./components/DadosPessoais"
import { SCBotao, SCFormContainer, SCHeader } from "../estilo"

import { useForm } from "./hooks/UseForm"
import { Passos } from "./components/Passos"

function App() {

  const componentesFormulario = [<DadosPessoaisForm />, <EnderecoForm />, <Agradecimento />]

  const { passoAtual, componenteAtual, mudarPasso, ehUltimoPasso } = useForm(componentesFormulario)

  return (
    <div className="app">
      <SCHeader>
        <h2>Cadastre-se gratuitamente!</h2>
        <p>Faça o seu cadastro para ter acesso a todos os recursos da nossa plataforma</p>
      </SCHeader>
      <SCFormContainer>
        <form onSubmit={(e) => mudarPasso(passoAtual + 1, e)}>
          <Passos passoAtual={passoAtual}/>
          <div className="inputs-container">
            {componenteAtual}
          </div>
          <div className="acoes">
            {!passoAtual == 0 && 
            <SCBotao type="button" onClick={(e) => mudarPasso(passoAtual - 1, e)}>
              <GrFormPrevious /><span>Voltar</span>
            </SCBotao>}
            {ehUltimoPasso ? (
              <SCBotao type="submit"><span>Enviar</span><FiSend /></SCBotao>
            ) : (
              <SCBotao type="submit"><span>Avançar</span><GrFormNextLink /></SCBotao>
            )}
          </div>
        </form>
      </SCFormContainer>
    </div>
  )
}

export default App
