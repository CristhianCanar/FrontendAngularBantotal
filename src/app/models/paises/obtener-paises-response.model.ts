import { BTPais } from './bt-pais.model';

export interface ObtenerPaisesResponse {
  sdtPaises: {
    sBTPais: BTPais[];
  };
}
