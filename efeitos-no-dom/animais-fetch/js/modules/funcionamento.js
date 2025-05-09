export default function initFuncionamento(){

}
const funcionamento = document.querySelector('[data-semana]');
const funcionamentoSemana = funcionamento.dataset.semana.split(',').map(Number);
const funcionamentoHorario = funcionamento.dataset.horario.split(',').map(Number);

const dataAgora = new Date();
const diaHoje = dataAgora.getDay();
const horaHoje = dataAgora.getHours();

const semanaAberto = funcionamentoSemana.includes(diaHoje)!== -1;
const horarioAberto = (horaHoje >= funcionamentoHorario[0] && horaHoje < funcionamentoHorario[1]);

if(semanaAberto && horarioAberto){
  funcionamento.classList.add('aberto');
}