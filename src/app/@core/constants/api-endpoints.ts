export const API_ENDPOINTS = {
  PAISES: {
    GET_ALL: 'paises',
  },
  ESTADOS: {
    GET_BY_PAIS_ID: (paisId: number) => `paises/estados/${paisId}`,
  },
  PERSONAS: {
    GET_BY_ID: (idCliente: number) => `personas/${idCliente}`,
  },
};
