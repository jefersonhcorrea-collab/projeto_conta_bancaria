import { Conta } from "../model/Conta";
import { colors } from "../util/colors";

export interface ContaRepository {

    //CRUD da Conta
    procurarPorNumero(numero: number): void;
    listarTodas(): void;
    cadastrar(conta: Conta): void;
    atualizar(conta: Conta): void;
    deletar(numero: number): void;

    //Métodos Bancários
    sacar(numero: number, valor: number): void;
    depositar(numero: number, valor: number): void;
    transferir(numeroOrigin: number, numeroDestino: number, valor: number): void;

}