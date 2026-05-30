import ServicoDePagamentoBancario from "../src/servicoDePagamentosBancario.js";
import assert from 'node:assert';

describe('Classe de Servico de Pagamentos Bancária', () => {

    describe('Realizar Pagamento', () => {

        describe('Schema do retorno de realizarPagamento', () => {
            let resposta;

            before(() => {
                const servicoDePagamentoBancario = new ServicoDePagamentoBancario();
                servicoDePagamentoBancario.realizarPagamento('0987-7656-3475', 'Samar', 156.87);
                resposta = servicoDePagamentoBancario.consultarUltimoPagamento();
            });

            it('deve ter a propriedade codigoBarras', () => {
                assert.ok(Object.hasOwn(resposta, 'codigoBarras'));
            });

            it('deve ter a propriedade empresa', () => {
                assert.ok(Object.hasOwn(resposta, 'empresa'));
            });

            it('deve ter a propriedade valor', () => {
                assert.ok(Object.hasOwn(resposta, 'valor'));
            });

            it('deve ter a propriedade categoria', () => {
                assert.ok(Object.hasOwn(resposta, 'categoria'));
            });

            it('codigoBarras deve ser do tipo string', () => {
                assert.strictEqual(typeof resposta.codigoBarras, 'string');
            });

            it('empresa deve ser do tipo string', () => {
                assert.strictEqual(typeof resposta.empresa, 'string');
            });

            it('valor deve ser do tipo number', () => {
                assert.strictEqual(typeof resposta.valor, 'number');
            });

            it('categoria deve ser do tipo string', () => {
                assert.strictEqual(typeof resposta.categoria, 'string');
            });
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
    })

    describe('Consultar Último Pagamento', () => {

        describe('Schema do retorno de consultarUltimoPagamento', () => {
            let resposta;

            before(() => {
                const servicoDePagamentoBancario = new ServicoDePagamentoBancario();
                servicoDePagamentoBancario.realizarPagamento('0987-7656-3475', 'Samar', 156.87);
                resposta = servicoDePagamentoBancario.consultarUltimoPagamento();
            });

            it('deve ter a propriedade codigoBarras', () => {
                assert.ok(Object.hasOwn(resposta, 'codigoBarras'));
            });

            it('deve ter a propriedade empresa', () => {
                assert.ok(Object.hasOwn(resposta, 'empresa'));
            });

            it('deve ter a propriedade valor', () => {
                assert.ok(Object.hasOwn(resposta, 'valor'));
            });

            it('deve ter a propriedade categoria', () => {
                assert.ok(Object.hasOwn(resposta, 'categoria'));
            });

            it('codigoBarras deve ser do tipo string', () => {
                assert.strictEqual(typeof resposta.codigoBarras, 'string');
            });

            it('empresa deve ser do tipo string', () => {
                assert.strictEqual(typeof resposta.empresa, 'string');
            });

            it('valor deve ser do tipo number', () => {
                assert.strictEqual(typeof resposta.valor, 'number');
            });

            it('categoria deve ser do tipo string', () => {
                assert.strictEqual(typeof resposta.categoria, 'string');
            });
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
