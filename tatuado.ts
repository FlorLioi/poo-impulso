import Tatuaje from "./tatuaje";
import Usuario from "./usuario";

export default class Tatuado{
    private usuario:Usuario;
    private tatuaje:Tatuaje;
    private fecha:string;
    private hora:string;
    private lugar:string;

    constructor(fecha:string, hora:string, lugar:string, usuario:Usuario, tatuaje:Tatuaje){
        this.usuario=usuario;
        this.tatuaje=tatuaje;
        this.fecha=fecha;
        this.hora=hora;
        this.lugar=lugar;
    }

    public getFecha(): string{
        return this.fecha;
    }

    public setFecha(fecha: string) {
        this.fecha = fecha;
    }

    public getHora(): string{
        return this.hora;
    }

    public setHora(hora: string) {
        this.hora = hora;
    }

    public getLugar(): string{
        return this.lugar;
    }

    public setLugar(lugar: string) {
        this.lugar = lugar;
    }

}