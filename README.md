# Serviço de Pagamentos Bancário

Atividade prática da disciplina **Programação para Automação de Testes**, ministrada pelo professor **Júlio de Lima**.

## Descrição da atividade

Implementar uma classe `ServicoDePagamentoBancario` com dois métodos:

- **`realizarPagamento(codigoBarras, empresa, valor)`** — registra um pagamento na lista interna. Cada pagamento possui as propriedades `codigoBarras`, `empresa`, `valor` e `categoria`. A categoria é definida automaticamente como `'cara'` quando o valor é superior a R$ 100,00, ou `'padrão'` caso contrário.
- **`consultarUltimoPagamento()`** — retorna apenas o último pagamento registrado.

### Exemplo de uso

```js
const servicoDePagamento = new ServicoDePagamentoBancario();
servicoDePagamento.realizarPagamento('0987-7656-3475', 'Samar', 156.87);
console.log(servicoDePagamento.consultarUltimoPagamento());
// { codigoBarras: '0987-7656-3475', empresa: 'Samar', valor: 156.87, categoria: 'cara' }
```

## Estrutura do projeto

```
├── src/
│   └── servicoDePagamentosBancario.js   # implementação da classe
└── test/
    └── servicoDePagamentoBancario.test.js  # testes automatizados
```

## Tecnologias

- Node.js (ES Modules)
- [Mocha](https://mochajs.org/) — framework de testes
- Node Assert — biblioteca de asserções nativa do Node.js

## Como executar os testes

```bash
npm install
npm test
```
