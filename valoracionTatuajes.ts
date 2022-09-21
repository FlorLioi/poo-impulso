import Tatuaje from "./tatuaje";
import Usuario from "./usuario";

export default class ValoracionTatuajes{
    private usuario:Usuario;
    private tatuaje:Tatuaje;
    private valoracion:number;

    constructor(){
        
    }

    public getValoracion(): number {
        return this.valoracion;
    }

    public setValoracion(valoracion: number) {
        this.valoracion = valoracion;
    }

}