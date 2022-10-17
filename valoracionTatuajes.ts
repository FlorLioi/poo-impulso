import Tatuaje from "./tatuaje";
import Usuario from "./usuario";

export default class ValoracionTatuajes{
    private usuario:Usuario;
    private tatuaje:Tatuaje;
    private valoracion:number;

    constructor(valoracion:number, usuario:Usuario, tatuaje:Tatuaje){
        this.usuario=usuario;
        this.tatuaje=tatuaje;
        this.valoracion=valoracion;
    }

    public getValoracion(): number {
        return this.valoracion;
    }

    public setValoracion(valoracion: number) {
        this.valoracion = valoracion;
    }

    public valorarTatuaje(usuario:Usuario, tatuaje:Tatuaje):void{
        if(usuario && tatuaje){
            this.valoracion +=1;
        }
    }
    

}