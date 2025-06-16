import { gql } from "@apollo/client";

export const DELETE_DOCUMENTO = gql`
  mutation DeleteDocumento($id: ID!) {
    deleteDocumento(id: $id)
  }
`;

export const DELETE_ENTREGA = gql`
  mutation DeleteEntrega($id: ID!) {
    deleteEntrega(id: $id)
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

export const GET_ENTREGAS = gql`
  query GetEntregas {
    findAllEntrega {
      id
      fechaentrega

      documento {
        id
        nombrearchivo
        tipodocumento
        urlubicacion
        fechasubida
        ultimamodificacion
        tamanoarchivo
      }

      proyecto {
        id
        nombreproyecto
      }

      usuario {
        id
        nombreusuario
        rol
      }
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

export const CREATE_DOCUMENT = gql`
  mutation CreateDocumento($documentoInput: DocumentoInput!) {
    createDocumento(documentoInput: $documentoInput) {
      id
    }
  }
`;

export const CREATE_ENTREGA = gql`
  mutation CreateEntrega($entregaInput: EntregaInput!) {
    createEntrega(entregaInput: $entregaInput) {
      id
    }
  }
`;
