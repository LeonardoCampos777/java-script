const promessa = new Promise((resolve, reject) => {
  let condicao = true;
  if (condicao) {
    setTimeout(() => {
      resolve({ nome: "Leozinho", idade: 25, sobrenome: "Campos" });
    }, 2000);
  } else {
    reject(Error("Um erro ocorreu na promise"));
  }
});

const retorno = promessa.then((resolucao) => {
  resolucao.namorada = 'Katarina';
  return resolucao
})

.then(resolucao =>{
  resolucao.mae = 'Dileuzinha';
  return resolucao
})
.then(resolucao =>{
  resolucao.pai = 'Lulinha';
  return resolucao
})
.then(resolucao =>{
  console.log(resolucao)
})
.catch(rejeitada =>{
  console.log('desculpe-me, sua ação foi rejeitada amigo.');
  return rejeitada
})
.finally(() =>{
  console.log('acabou, xaé xaé');
})

//LEMBRE-SE DE NÃO USAR O (;), NO FINAL DOS ENCADEAMENTOS DE THENS E CATCHS, SE COLOCAR O ; VAI BUGAR E DAR ERRO!!!!!

const login = new Promise((resolve) =>{
  setTimeout(()=>{
    resolve('Usuário Logado');
  },2000)
})

const dados = new Promise((resolve) =>{
  setTimeout(()=>{
    resolve('Dados Carregados');
  },1000)
})

const carregouTudo = Promise.all([login,dados]); //VAI RETORNAR UMA ARRAY
carregouTudo.then(resolucao =>{
  console.log(resolucao);
})