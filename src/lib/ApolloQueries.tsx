import { gql, useMutation } from "@apollo/client";

export const DELETE_DOCUMENT = gql`
  mutation DeleteDocumento($id: ID!) {
    deleteDocumento(id: $id)
  }
`;

export const GET_DOCUMENTOS = gql`
  query GetDocumentos {
    findAllDocumento {
      id
      tamanoarchivo
      fechasubida
      ultimamodificacion
      nombrearchivo
      tipodocumento
      urlubicacion
    }
  }
`;

export const GET_USER = gql`
  query GetUser {
    findUsuarioById(id: "1") {
      id
      correo
      nombreusuario
      rol
    }
  }
`;

export const GET_PROYECTOS = gql`
  query GetAllProyecto {
    findAllProyecto {
      id
      nombreproyecto
    }
  }
`;
