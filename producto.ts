export default class Producto{
    private titulo:string;
    private precio:number;
    private imagen:string;

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


}