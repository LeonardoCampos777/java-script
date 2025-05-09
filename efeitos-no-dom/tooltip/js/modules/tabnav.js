export default function initTabNav() {
  const tabMenu = document.querySelectorAll('[data-tab="menu"] li');
  const tabContent = document.querySelectorAll('[data-tab="content"] section');

  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add("ativo");

    function activeTab(index) {
      tabContent.forEach((section) => {
        section.classList.remove("ativo");
      });
      const direcao = tabContent[index].dataset.anime;
      tabContent[index].classList.add("ativo", direcao);
    }

    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener("click", () => {
        activeTab(index);
      });
    });
  }
}
// UMA NAVEGAÇÃO POR TAB É UMA NAVEGAÇÃO RELACIONADA COM UMA LISTA DE ITENS  E OUTRA LISTA DE ITENS
// E COM ISSO AO CLICAR EM UMA LISTA, VAI ATIVAR A OUTRA!!
// UM ITEM DE CLICK PARA CADA ITEM DO CONTEUDO!

// com o if ele vai verificar se realmente tabMenu e tabContent são (são true), ou seja, o código só vai rodar
// se eles existirem, para não bugar caso dê algum problema nas classes do html
// aqui estamos fazendo um loop para cada item de dentro do tabMenu, que no caso são cada li
// ai temos o itemMenu, que é cada li de dentro desse tabMenu
// e temos o index, que vai retornar o número index, de cada imagem clicada da lista  exemplo: 0/1/2/3/4/5/6.
// em cada item eu vou adicionar o evento de click, e ao clicar vai executar a funcão e me mostrar o número do index e com isso
// ativar a funcão o activeTab lá de cima.

// QUANDO EU CLICAR EU QUER OQUE PASSE O NÚMERO DO INDEX DENTRO DA MINHA FUNÇÃO ACTIVE TAB!!!

// ISOLE SEMPRE O ESCOPO DO QUE VOCÊ ESTÁ FAZENDO COM UMA FUNÇÃO, PORQUE POR ALGUM MOTIVO, ALGO PODE VAZAR ALGUMA VARIAVEL
// OU ATÉ MESMO UMA FUNÇÃO COM O MESMO NOME. ENTÃO LEMBRE-SE ISOLE COM UMA FUNÇÃO!!!!! A SUA MANIPULAÇÃO!
// E TAMBÉM VERIFIQUE SE O ELEMENTO QUE VOCÊ ESTÁ SELECIONANDO NO QUESELECTOR EXISTE COM IF(.LENGTH);