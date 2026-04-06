export const API_ENDPOINTS = {
  PAISES: {
    GET_ALL: '/paises',
    GET_BY_ID: (id: number) => `/paises/estados/${id}`,
  },
  PERSONAS: {
    GET_ALL: '/personas',
    GET_BY_ID: (id: number) => `/personas/${id}`,
  },
};
