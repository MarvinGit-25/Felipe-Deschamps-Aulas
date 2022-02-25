function criar_obj() {
  let carros = {}
  return carros
}
console.log(criar_obj())

const criar1 = criar_obj()
criar1.ferrari = "f12"
console.log(criar1)

function criar_obj1(marca, modelo) {
  let garragem = {}
  garragem.marca = marca
  garragem.modelo = modelo

  function chamarMarcas() {
    return `${garragem.marca} ${garragem.modelo}`
  }
  garragem.charmarVeiculos = chamarMarcas
  return garragem
}
console.log(criar_obj1("ferrari", "345"))
const chamarGarragem = criar_obj1("volvo", "2344")
console.log(chamarGarragem)
console.log(chamarGarragem.chamarMarcas())

