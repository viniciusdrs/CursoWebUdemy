function tratarErroELancar(erro) {
   // throw new Error('...')
   // throw 10
   // throw true
   // throw 'mensagem'
   throw {
       nome: erro.name, // nome do erro
       msg: erro.message, // mensagem do erro
       date: new Date // data do erro
   }
}

function imprimirNome(obj) {
    try{
        console.log(obj.name.toUpperCase() + '!!!')
    } catch(e){
        tratarErroELancar(e)
    } finally {
        console.log('final')
    }
}

const obj = { nome: 'Vinicius' }
imprimirNome(obj)