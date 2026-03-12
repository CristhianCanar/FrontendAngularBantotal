import { Btinreq } from '../btinreq.model';

export interface ObtenerClienteByIdRequest {
  Btinreq: Btinreq;
  clienteUId: number;
}
