export default class Producto{
    private titulo:string;
    private precio:number;
    private imagen:string;

    constructor(titulo:string, precio:number, imagen:string){
        this.titulo=titulo;
        this.precio=precio;
        this.imagen=imagen;
    }

    public getTitulo(): string{
        return this.titulo;
    }

    public setTitulo(titulo: string) {
        this.titulo = titulo;
    }

    public getPrecio(): number{
        return this.precio;
    }

    public setPrecio(precio: number) {
        this.precio = precio;
    }

    public getImagen(): string {
        return this.imagen;
    }

    public setImagen(imagen: string) {
        this.imagen = imagen;
    }

    public imprimir() :string{
        return `Producto: ${this.getTitulo()}, precio: $${this.getPrecio()}, imagen: ${this.getImagen()}}`;
    }


}