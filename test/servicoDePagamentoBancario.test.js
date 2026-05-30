import ServicoDePagamentoBancario from "../src/servicoDePagamentosBancario.js";
import assert from 'node:assert';

describe('Classe de Servico de Pagamentos Bancária', () => {

    describe('Realizar Pagamento', () => {

        it('Schema do retorno de realizarPagamento deve conter as propriedades codigoBarras, empresa, valor e categoria com os tipos corretos', () => {
            //arrange
            const servicoDePagamentoBancario = new ServicoDePagamentoBancario();

            //act
            servicoDePagamentoBancario.realizarPagamento('0987-7656-3475', 'Samar', 156.87);
            const resposta = servicoDePagamentoBancario.consultarUltimoPagamento();

            //assert
            assert.ok(Object.hasOwn(resposta, 'codigoBarras'));
            assert.ok(Object.hasOwn(resposta, 'empresa'));
            assert.ok(Object.hasOwn(resposta, 'valor'));
            assert.ok(Object.hasOwn(resposta, 'categoria'));
            assert.strictEqual(typeof resposta.codigoBarras, 'string');
            assert.strictEqual(typeof resposta.empresa, 'string');
            assert.strictEqual(typeof resposta.valor, 'number');
            assert.strictEqual(typeof resposta.categoria, 'string');
        });

        it('Ao realizar pagamento maior que 100,00 deve ser mostrado categoria cara', () => {
            //arrange
            const servicoDePagamentoBancario = new ServicoDePagamentoBancario();
            const codigoBarras = '122';
            const empresa = 'aaa';
            const valor = 101;
            const resultadoEsperado = 'cara';

            //act
            servicoDePagamentoBancario.realizarPagamento(codigoBarras, empresa, valor);
            const resposta = servicoDePagamentoBancario.consultarUltimoPagamento();

            //assert
            assert.equal(resposta.categoria, resultadoEsperado)
        });

        it('Ao realizar pagamento menor que 100,00 deve ser mostrado categoria padrão', () => {
            //arrange
            const servicoDePagamentoBancario = new ServicoDePagamentoBancario();
            const codigoBarras = '80955 7999 9999';
            const empresa = 'aaa';
            const valor = 99;
            const resultadoEsperado = 'padrão';

            //act
            servicoDePagamentoBancario.realizarPagamento(codigoBarras, empresa, valor);
            const resposta = servicoDePagamentoBancario.consultarUltimoPagamento();

            //assert
            assert.equal(resposta.categoria, resultadoEsperado)
        });

        it('Ao realizar pagamento igual a 100,00 deve ser mostrado categoria padrão', () => {
            //arrange
            const servicoDePagamentoBancario = new ServicoDePagamentoBancario();
            const codigoBarras = '80955 7999 9999';
            const empresa = 'aaa';
            const valor = 100;
            const resultadoEsperado = 'padrão';

            //act
            servicoDePagamentoBancario.realizarPagamento(codigoBarras, empresa, valor);
            const resposta = servicoDePagamentoBancario.consultarUltimoPagamento();

            //assert
            assert.equal(resposta.categoria, resultadoEsperado)
        });

        it('Ao realizar pagamento deve armazenar o código de barras informado', () => {
            //arrange
            const servicoDePagamentoBancario = new ServicoDePagamentoBancario();
            const codigoBarras = '0987-7656-3475';
            const empresa = 'Samar';
            const valor = 50;
            const resultadoEsperado = codigoBarras;

            //act
            servicoDePagamentoBancario.realizarPagamento(codigoBarras, empresa, valor);
            const resposta = servicoDePagamentoBancario.consultarUltimoPagamento();

            //assert
            assert.equal(resposta.codigoBarras, resultadoEsperado)
        });

        it('Ao realizar pagamento deve armazenar a empresa informada', () => {
            //arrange
            const servicoDePagamentoBancario = new ServicoDePagamentoBancario();
            const codigoBarras = '0987-7656-3475';
            const empresa = 'Samar';
            const valor = 50;
            const resultadoEsperado = empresa;

            //act
            servicoDePagamentoBancario.realizarPagamento(codigoBarras, empresa, valor);
            const resposta = servicoDePagamentoBancario.consultarUltimoPagamento();

            //assert
            assert.equal(resposta.empresa, resultadoEsperado)
        });

        it('Ao realizar pagamento deve armazenar o valor informado', () => {
            //arrange
            const servicoDePagamentoBancario = new ServicoDePagamentoBancario();
            const codigoBarras = '0987-7656-3475';
            const empresa = 'Samar';
            const valor = 50;
            const resultadoEsperado = valor;

            //act
            servicoDePagamentoBancario.realizarPagamento(codigoBarras, empresa, valor);
            const resposta = servicoDePagamentoBancario.consultarUltimoPagamento();

            //assert
            assert.equal(resposta.valor, resultadoEsperado)
        });

        it('Ao tentar realizar pagamento sem informar o valor', () => {
            //arrange
            const servicoDePagamentoBancario = new ServicoDePagamentoBancario();
            const codigoBarras = '0987-7656-3475';
            const empresa = 'Samar';
            const mensagemDeErroEsperada = 'Valor deve ser informado e não pode ser 0';

            //act & assert
            assert.throws(function()
            {servicoDePagamentoBancario.realizarPagamento(codigoBarras, empresa)},
            {message: mensagemDeErroEsperada}
        )
        })

        it('Ao tentar realizar pagamento sem informar o código de barras', () => {
            //arrange
            const servicoDePagamentoBancario = new ServicoDePagamentoBancario();
            const empresa = 'Samar';
            const valor = 50;
            const mensagemDeErroEsperada = 'Código de barras deve ser informado';

            //act & assert
            assert.throws(function()
            {servicoDePagamentoBancario.realizarPagamento(undefined, empresa, valor)},
            {message: mensagemDeErroEsperada}
        )
        })

        it('Ao tentar realizar pagamento sem informar a empresa', () => {
            //arrange
            const servicoDePagamentoBancario = new ServicoDePagamentoBancario();
            const codigoBarras = '0987-7656-3475';
            const valor = 50;
            const mensagemDeErroEsperada = 'Empresa deve ser informada';

            //act & assert
            assert.throws(function()
            {servicoDePagamentoBancario.realizarPagamento(codigoBarras, undefined, valor)},
            {message: mensagemDeErroEsperada}
        )
        })
    })

    describe('Consultar Último Pagamento', () => {

        it('Schema do retorno de consultarUltimoPagamento deve conter as propriedades codigoBarras, empresa, valor e categoria com os tipos corretos', () => {
            //arrange
            const servicoDePagamentoBancario = new ServicoDePagamentoBancario();

            //act
            servicoDePagamentoBancario.realizarPagamento('0987-7656-3475', 'Samar', 156.87);
            const resposta = servicoDePagamentoBancario.consultarUltimoPagamento();

            //assert
            assert.ok(Object.hasOwn(resposta, 'codigoBarras'));
            assert.ok(Object.hasOwn(resposta, 'empresa'));
            assert.ok(Object.hasOwn(resposta, 'valor'));
            assert.ok(Object.hasOwn(resposta, 'categoria'));
            assert.strictEqual(typeof resposta.codigoBarras, 'string');
            assert.strictEqual(typeof resposta.empresa, 'string');
            assert.strictEqual(typeof resposta.valor, 'number');
            assert.strictEqual(typeof resposta.categoria, 'string');
        });

        it('Ao consultar o último pagamento com múltiplos pagamentos realizados deve retornar apenas o último', () => {
            //arrange
            const servicoDePagamentoBancario = new ServicoDePagamentoBancario();
            const codigoBarrasPrimeiro = '1111-1111-1111';
            const codigoBarrasSegundo = '2222-2222-2222';
            const codigoBarrasTerceiro = '3333-3333-3333';
            const resultadoEsperado = codigoBarrasTerceiro;

            //act
            servicoDePagamentoBancario.realizarPagamento(codigoBarrasPrimeiro, 'Empresa A', 50);
            servicoDePagamentoBancario.realizarPagamento(codigoBarrasSegundo, 'Empresa B', 150);
            servicoDePagamentoBancario.realizarPagamento(codigoBarrasTerceiro, 'Empresa C', 75);
            const resposta = servicoDePagamentoBancario.consultarUltimoPagamento();

            //assert
            assert.equal(resposta.codigoBarras, resultadoEsperado)
        });

        it('Ao consultar o último pagamento sem pagamentos realizados deve retornar undefined', () => {
            //arrange
            const servicoDePagamentoBancario = new ServicoDePagamentoBancario();
            const resultadoEsperado = undefined;

            //act
            const resposta = servicoDePagamentoBancario.consultarUltimoPagamento();

            //assert
            assert.equal(resposta, resultadoEsperado)
        });
    })
})
