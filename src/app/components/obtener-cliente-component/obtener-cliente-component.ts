import { Component, OnInit, signal } from '@angular/core';
import { SdtCliente } from '../../models/clientes/sdt-cliente.model';
import { BTCliente } from '../../models/clientes/bt-cliente.model';
import { ObtenerClienteByIdService } from '../../services/clientes/obtener-cliente-by-id-service';
import { ObtenerClienteByIdRequest } from '../../models/clientes/obtener-cliente-by-id-request.model';

@Component({
  selector: 'app-obtener-cliente-component',
  imports: [],
  templateUrl: './obtener-cliente-component.html',
  styleUrl: './obtener-cliente-component.css',
})
export class ObtenerClienteComponent implements OnInit {
  /* persona: BTCliente = {
    paisDocumentoId: 845,
    apartamento: '13B',
    sectorId: 3,
    tipoDocumentoId: 1,
    ingresos: 1500,
    nacionalidad: 'URUGUAY',
    ocupacionId: 1,
    sexo: 'M',
    barrio: '',
    estadoCivil: 'Soltero/a',
    nroDocumento: '27573084',
    localidad: 'Montevideo',
    clasificacionInternaId: 1,
    segundoNombre: '',
    telefonoCelular: '091897718',
    departamentoId: 10,
    actividadLaboral: '01112 Trigo',
    nacionalidadId: 845,
    localidadId: 10,
    clasificacionInterna: 'IFE - Actividades bursátiles',
    paisDomicilioId: 845,
    sector: 'Público Nacional',
    telefonoFijo: '26004288',
    codigoPostal: '',
    primerNombre: 'ALEJANDRO',
    fechaNacimiento: '1976-02-26',
    actividadLaboralId: 1112,
    primerApellido: 'VAZQUEZ',
    estadoCivilId: '1',
    segundoApellido: 'SZENTANDRASI',
    paisDocumento: 'URUGUAY',
    fechaInicioActividad: '0000-00-00',
    ocupacion: 'Empleado',
    paisDomicilio: 'URUGUAY',
    departamento: 'Montevideo',
    fechaVencimiento: '0000-00-00',
    correoElectronico: 'AV@GMAIL.COM',
    numeroPuerta: '7216',
    calle: 'BAZZURRO',
    barrioId: 0,
    tipoDocumento: 'Cédula Identidad'
  };

  formatDate(date: string): string {
    if (!date || date === '0000-00-00') return 'N/A';
    return new Date(date).toLocaleDateString();
  }

  clean(value: string): string {
    return value ? value.trim() : '-';
  } */



  persona = signal<BTCliente | null>(null);
  cargando = signal<boolean>(true);
  error = signal<string | null>(null);

  constructor(private obtenerClienteByIdService: ObtenerClienteByIdService) { }

  ngOnInit(): void {

    const request: ObtenerClienteByIdRequest = {
      Btinreq: {
        Device: 'AV',
        Usuario: 'INSTALADOR',
        Requerimiento: '',
        Canal: 'BTDIGITAL',
        Token: 'd16a1af2d5CD285A89A23FBE'
      },
      clienteUId: 181
    };

    this.obtenerClienteByIdService.obtenerCliente(request)
      .subscribe({
        next: (response) => {
          this.persona.set(response.sdtPersona);

          console.log(this.persona());
          this.cargando.set(false);
        },
        error: (error) => {
          console.error('Error al obtener persona', error);
          this.error.set('Error al cargar persona');
        }
      });
  }

  formatDate(date: string | undefined): string {
    if (!date || date === '0000-00-00') return 'N/A';
    return new Date(date).toLocaleDateString();
  }

  clean(value: string | undefined): string {
    return value ? value.trim() : '-';
  }

}
