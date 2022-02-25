/*function CriarObjeto() {
  let objeto = {}
  return objeto
}
console.log(CriarObjeto())

let pessoaA = CriarObjeto()
let pessoaB = CriarObjeto()

console.log(pessoaA, pessoaB)

pessoaA.nome = "Marcos Vinicius"
pessoaB.nome = "Rocha da Silva"

console.log(pessoaA.nome)
console.log(pessoaB.nome)*/



function FabricarPessoas(nome, sobrenome) {
  let pessoa = {}
  pessoa.nome = nome
  pessoa.sobrenome = sobrenome

  function NomeCompleto() {
    return `${pessoa.nome} ${pessoa.sobrenome}`
  }
  pessoa.NomeCompleto = NomeCompleto()

  return pessoa
}

let pessoa1 = FabricarPessoas("Marcos Vinicius", "Rocha da Silva")
console.log(pessoa1)

//console.log(pessoa1.NomeCompleto())
