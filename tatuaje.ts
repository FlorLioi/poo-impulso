export default class Tatuaje{
    private imagen:string;
    private precio:number;
    private tiempo:string;

    constructor(imagen:string, precio:number, tiempo:string){
        this.imagen=imagen;
        this.precio=precio;
        this.tiempo=tiempo;
    }

    public getImagen(): string{
        return this.imagen;
    }

    public setImagen(imagen: string) {
        this.imagen = imagen;
    }

    public getPrecio(): number{
        return this.precio;
    }

    public setPrecio(precio: number) {
        this.precio = precio;
    }

    public getTiempo(): string {
        return this.tiempo;
    }

    public setTiempo(tiempo: string) {
        this.tiempo = tiempo;
    }

}