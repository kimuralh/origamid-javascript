// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento

const transacoes = [
  {
    descricao: 'Taxa do Pão',
    valor: 'R$ 39',
  },
  {
    descricao: 'Taxa do Mercado',
    valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 99',
  },
  {
    descricao: 'Taxa do Banco',
    valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 49',
  },
];
let taxaTotal = 0;
let recebimentoTotal = 0;
transacoes.forEach((transacao)=>{
  if (transacao.descricao.toUpperCase().startsWith('TAXA')){
    taxaTotal += parseInt(transacao.valor.replace('R$ ',''));
  }
  else if (transacao.descricao.toUpperCase().startsWith('RECEBIMENTO')){
    recebimentoTotal += parseInt(transacao.valor.replace('R$ ',''));
  }
})

// Retorne uma array com a lista abaixo
const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';
const listaTransportes = transportes.split(';');

// Substitua todos os span's por a's
const html = `<ul>
                <li><span>Sobre</span></li>
                <li><span>Produtos</span></li>
                <li><span>Contato</span></li>
              </ul>`;
let spanHtml = html.split('span');
spanHtml = spanHtml.join('a');
console.log(spanHtml);

// Retorne o último caracter da frase
const frase = 'Melhor do ano!';
console.log(frase[frase.length - 1]);
//ou
console.log(frase.slice(-1));
// Retorne o total de taxas
let nTaxas = 0;
const transacoes2 = ['Taxa do Banco', '   TAXA DO PÃO', '  taxa do mercado', 'depósito Bancário', 'TARIFA especial'];

transacoes2.forEach((t)=> {
  let tFormatado = t.toUpperCase().trim();
  if (tFormatado.startsWith('TAXA')){
    nTaxas ++;
  }
});
console.log(`Possui ${nTaxas} Taxas`);

