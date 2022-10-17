import Producto from "./producto";
import Usuario from "./usuario";

export default class Carrito{
    private usuario:Usuario;
    private productos:Producto[];

    constructor(usuario:Usuario){
        this.usuario=usuario;
        this.productos=[];
    }

    public addProducto(producto:Producto):void{
        try{
            if(producto){
                this.productos.push(producto);
            }else{
                throw new Error (`No se recibio ningun producto valido`);
            }
        }catch(error){
            console.log(`Error en alta: ${error.message}`);
        }
    }

    public delProducto(posicion:number):void{
        try{
            if(posicion>=0){
                this.productos.splice(posicion,1);
            }else{
                throw new Error(`No se recibio una posicion valida`);
            }
        }catch(error){
                console.log(`Error en eliminacion: ${error.message}`);
        }
    }

    public updProducto(producto:Producto, posicion:number):void{
        try{
            if(producto && posicion>=0){
                this.productos[posicion]=producto;
            }else if (posicion<0){
                throw new Error (`No se recibio una posicion valida`);
            }else{
                throw new Error(`No se recibio un producto valido`);
            }
        }catch (error){
            console.log(`Error en actualizacion: ${error.message}`);
        }
    }


}