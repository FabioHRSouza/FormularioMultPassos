export const Agradecimento = () => {
    return (
        <div>
            <h2>Obrigado por se cadastrar!</h2>
            <div>
                <h4>Conte-nos: onde nos conheceu?</h4>
                <div>
                    <select className="form-select" aria-label="Default select example">
                        <option defaultValue>Selecione uma opção</option>
                        <option value="site">Pelo Site</option>
                        <option value="linkedin">Pelo LinkedIn</option>
                        <option value="instagran">Pelo Instagram</option>
                    </select>
                </div>
            </div>
        </div>
    )
}