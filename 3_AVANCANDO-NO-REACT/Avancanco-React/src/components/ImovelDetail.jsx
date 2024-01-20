

const ImovelDetail = ({tipo, metros, localidade, valor}) => {
  return (
    <div>
        <h3>Imóveis à venda:</h3>
        <p>Tipo: {tipo}</p>
        <p>Metros²: {metros}</p>
        <p>Localidade: {localidade}</p>
        <p>R$: {valor}</p>
    </div>
  )
}

export default ImovelDetail