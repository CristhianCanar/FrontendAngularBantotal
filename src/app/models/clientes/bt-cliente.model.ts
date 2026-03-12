export interface BTCliente {
  paisDocumentoId: number;
  apartamento: string;
  sectorId: number;
  tipoDocumentoId: number;
  ingresos: number;
  nacionalidad: string;
  ocupacionId: number;
  sexo: string;
  barrio: string;
  estadoCivil: string;
  nroDocumento: string;
  localidad: string;
  clasificacionInternaId: number;
  segundoNombre: string;
  telefonoCelular: string;
  departamentoId: number;
  actividadLaboral: string;
  nacionalidadId: number;
  localidadId: number;
  clasificacionInterna: string;
  paisDomicilioId: number;
  sector: string;
  telefonoFijo: string;
  codigoPostal: string;
  primerNombre: string;
  fechaNacimiento: string; // formato YYYY-MM-DD
  actividadLaboralId: number;
  primerApellido: string;
  estadoCivilId: string;
  segundoApellido: string;
  paisDocumento: string;
  fechaInicioActividad: string; // "0000-00-00" -> tratar como string o null según backend
  ocupacion: string;
  paisDomicilio: string;
  departamento: string;
  fechaVencimiento: string; // "0000-00-00"
  correoElectronico: string;
  numeroPuerta: string;
  calle: string;
  barrioId: number;
  tipoDocumento: string;
}
