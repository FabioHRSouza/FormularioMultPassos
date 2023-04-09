//Criando um componente para receber os dados do cliente.


import { SCForm, SCLabel, SCInput } from './DadosPessoaisStyled.js';


//Criar um componente que recebe o nome e o email do cliente.
//Use o bootstrap para criar os inputs para esses dois campos.
export const DadosPessoaisForm = () => {
    return (
        <SCForm>
            
                <SCLabel htmlFor="nome">Nome:</SCLabel>
                <SCInput type="text" className="form-control" id="nome" placeholder="Digite o seu Nome" />
           
            
                <SCLabel htmlFor="email">Email:</SCLabel>
                <SCInput type="email" className="form-control" id="email" placeholder="Digite o seu Email" />
           
        </SCForm>

    )
}