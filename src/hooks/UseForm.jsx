//Ex 5 - Criação regra de navegação
//Crie usando o useState uma variável para guardar a informação do passo atual.

//Em seguida crie uma função para alterar o passo atual. Ela deve receber o passo atual a ser utilizado.

//Obs: essa função tanto pode alterar o passo para frente, como para trás. Basta somente passar o passo correto na hora de chamar a função. Seja ele maior ou menor que o atual.
import { useState } from 'react'

export function useForm (steps){


const [passoAtual, setPassoAtual] = useState(0)

    function mudarPasso(i, e) {
        e.preventDefault()

        if(i < 0 || i >= steps.length ){
            return
        }

        setPassoAtual(i)
    }


    return {
        passoAtual, 
        componenteAtual: steps[passoAtual], 
        mudarPasso, 
        ehUltimoPasso: passoAtual + 1 == steps.length ? true : false
    }
}