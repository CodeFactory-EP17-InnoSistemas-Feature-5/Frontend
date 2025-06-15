export interface Documento {
  id: string;
  nombrearchivo: string;
  tamanoarchivo: string;
  tipodocumento: string;
  urlubicacion: string;
  fechasubida: string;
  ultimamodificacion: string;
}

export interface Proyecto {
  id: string;
  nombreproyecto: string;
}

export interface Usuario {
  id: string;
  nombreusuario: string;
  rol: string;
}

export interface GetUsuario {
  findUsuarioById: Usuario;
}

export interface Entrega {
  id: string;
  fechaentrega: string;
  documento: Documento;
  proyecto: Proyecto;
  usuario: Usuario;
}

export interface EntregasList {
  findAllEntrega: Entrega[];
}
