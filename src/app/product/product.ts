export interface Product {
  idProducto: number;
  nombre: string;
  codigo: string;
  descripcion: string;
  imagen: string;
  estado: number;
  tipo: {
    idTipo: number;
    nombre: string;
    estado: number;
  };
  unidad: {
    idUnidad: number;
    nombre: string;
    estado: number;
  };
}

