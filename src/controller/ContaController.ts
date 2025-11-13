import { Conta } from "../model/Conta";
import { ContaRepository } from "../repository/ContaRepository";
import { colors } from "../util/colors";

export class ContaController implements ContaRepository {
    private listaContas: Array<Conta> = new Array<Conta>();
    private numero: number = 0;

    procurarPorNumero(numero: number): void {
        let buscaConta = this.buscarNoArray(numero);

        if (buscaConta != null) {
            buscaConta.visualizar();
        } else
            console.log(colors.fg.red, "\nA Conta numero: " + numero + "não foi encontrada!", colors.reset);
    }
    public gerarNumero(): number {
        return ++this.numero;
    }

    //  Listar todas as contas
    listarTodas(): void {
        for (let conta of this.listaContas) {
            conta.visualizar();
        }
    }

    cadastrar(conta: Conta): void {
        this.listaContas.push(conta);
        console.log(colors.fg.green, "\nA Conta número: " + conta.numero +
            " foi criada com sucesso!", colors.reset);
    }


    //  Atualizar conta existente
    atualizar(conta: Conta): void {
        let buscaConta = this.buscarNoArray(conta.numero);

        if (buscaConta != null) {
            this.listaContas[this.listaContas.indexOf(buscaConta)] = conta;
            console.log(colors.fg.green, "\nA Conta numero: " + conta.numero + " foi atualizada com sucesso!", colors.reset);
        } else
            console.log(colors.fg.red, "\nA Conta numero: " + conta.numero + " não foi encontrada!", colors.reset);
    }


    //  Deletar conta
    deletar(numero: number): void {
        let buscaConta = this.buscarNoArray(numero);

        if (buscaConta != null) {
            this.listaContas.splice(this.listaContas.indexOf(buscaConta), 1);
            console.log(colors.fg.green, "\nA conta número: " + numero + " foi apagada com sucesso!", colors.reset);
        } else
            console.log(colors.fg.red, "\nA Conta numero: " + numero + " não foi encontrada!", colors.reset);

    }
    /*
    // Sacar valor da conta
    sacar(numero: number, valor: number): void {
        const conta = this.listaContas.find(conta => conta.numero === numero);
        if (conta) {
            conta.sacar(valor);
        } else {
            console.log("Conta não encontrada.");
        }
    }

    //  Depositar valor na conta
    depositar(numero: number, valor: number): void {
        const conta = this.listaContas.find(conta => conta.numero === numero);
        if (conta) {
            conta.depositar(valor);
        } else {
            console.log("Conta não encontrada.");
        }
    }

    //  Transferir valor entre contas
    transferir(numeroOrigem: number, numeroDestino: number, valor: number): void {
        const origem = this.listaContas.find(conta => conta.numero === numeroOrigem);
        const destino = this.listaContas.find(conta => conta.numero === numeroDestino);

        if (origem && destino) {
            if (origem.sacar(valor)) {
                destino.depositar(valor);
                console.log("Transferência realizada com sucesso!");
            }
        } else {
            console.log("Conta de origem ou destino não encontrada.");
        }
    }
    */

    sacar(numero: number, valor: number): void {
        throw new Error("Method not implemented.");
    }

    depositar(numero: number, valor: number): void {
        throw new Error("Method not implemented.");
    }

    transferir(numeroOrigem: number, numeroDestino: number, valor: number): void {
        throw new Error("Method not implemented.");
    }

    //Checa se uma conta existe
    public buscarNoArray(numero: number): Conta | null {

        for (let conta of this.listaContas) {
            if (conta.numero === numero)
                return conta;
        }

        return null
    }
}