//Crie um componente para receber os dados do endereco do cliente.

//Os dados necessários são: Logradouro, numero, complemento, bairro, cep, cidade e estado.

//Use o bootstrap para criar os inputs.

//Esse componente é referente ao 2° passo do cadastro.

export const EnderecoForm = () => {
    return (
        <div>
            <h2>Endereço</h2>
            <div>
                <div>
                    <label htmlFor="logradouro">Logradouro:</label>
                    <input type="text" className="form-control" id="logradouro" placeholder="Digite o seu Logradouro" />
                </div>
                <div>
                    <label htmlFor="numero">Número:</label>
                    <input type="text" className="form-control" id="numero" placeholder="Digite o seu Número" />
                </div>
                <div>
                    <label htmlFor="complemento">Complemento:</label>
                    <input type="text" className="form-control" id="complemento" placeholder="Digite o seu Complemento" />
                </div>
                <div>
                    <label htmlFor="bairro">Bairro:</label>
                    <input type="text" className="form-control" id="bairro" placeholder="Digite o seu Bairro" />
                </div>
                <div>
                    <label htmlFor="cep">Cep:</label>
                    <input type="text" className="form-control" id="cep" placeholder="Digite o seu Cep" />
                </div>
                <div>
                    <label htmlFor="cidade">Cidade:</label>
                    <input type="text" className="form-control" id="cidade" placeholder="Digite o seu Cidade" />
                </div>
                <div>
                    <label htmlFor="estado">Estado:</label>
                    <input type="text" className="form-control" id="estado" placeholder="Digite o seu Estado" />
                </div>
            </div>
        </div>
    )
}