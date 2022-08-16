import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  DateTime: any;
  DateTimeTz: any;
  Upload: any;
};

export type Asiento = {
  __typename?: 'Asiento';
  asiento?: Maybe<Scalars['String']>;
  asientoId?: Maybe<Scalars['ID']>;
  code?: Maybe<Scalars['String']>;
  codigo?: Maybe<Scalars['String']>;
  eventoId?: Maybe<Scalars['Int']>;
  feriaId?: Maybe<Scalars['Int']>;
  reservado?: Maybe<Scalars['String']>;
  tendido?: Maybe<Scalars['String']>;
};

export type AsignacionEntrada = {
  __typename?: 'AsignacionEntrada';
  apellidos?: Maybe<Scalars['String']>;
  asientoId?: Maybe<Scalars['ID']>;
  codigo?: Maybe<Scalars['String']>;
  estado?: Maybe<Scalars['String']>;
  eventoId?: Maybe<Scalars['Int']>;
  fecha?: Maybe<Scalars['Date']>;
  hora?: Maybe<Scalars['String']>;
  nombres?: Maybe<Scalars['String']>;
  numDocumento?: Maybe<Scalars['String']>;
  reservado?: Maybe<Scalars['String']>;
  tendido?: Maybe<Scalars['String']>;
  tipoDocumento?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['Int']>;
};

export type AsignacionEntradaInput = {
  apellidos?: InputMaybe<Scalars['String']>;
  asientoId?: InputMaybe<Scalars['ID']>;
  nombres?: InputMaybe<Scalars['String']>;
  numDocumento?: InputMaybe<Scalars['String']>;
  tipoDocumento?: InputMaybe<Scalars['String']>;
};

export type Asistente = {
  __typename?: 'Asistente';
  apellidos?: Maybe<Scalars['String']>;
  asiento?: Maybe<Scalars['String']>;
  asientoId?: Maybe<Scalars['ID']>;
  codigo?: Maybe<Scalars['String']>;
  estado?: Maybe<Scalars['String']>;
  nombres?: Maybe<Scalars['String']>;
  numDocumento?: Maybe<Scalars['String']>;
  tipoDocumento?: Maybe<Scalars['String']>;
};

export type Butaca = {
  __typename?: 'Butaca';
  butacaId?: Maybe<Scalars['ID']>;
  cantidad?: Maybe<Scalars['Int']>;
  codigo?: Maybe<Scalars['String']>;
  precio?: Maybe<Scalars['Float']>;
  tendido?: Maybe<Scalars['String']>;
};

export type ButacaInput = {
  butacaId?: InputMaybe<Scalars['ID']>;
  precio?: InputMaybe<Scalars['Float']>;
};

export type DetallePedido = {
  __typename?: 'DetallePedido';
  asiento?: Maybe<Scalars['String']>;
  codigo?: Maybe<Scalars['String']>;
  detallePedidoId?: Maybe<Scalars['ID']>;
  eventoId?: Maybe<Scalars['Int']>;
  feriaId?: Maybe<Scalars['Int']>;
  pedidoId?: Maybe<Scalars['Int']>;
  precio?: Maybe<Scalars['Float']>;
  tendido?: Maybe<Scalars['String']>;
};

export type DetallePedidoInput = {
  asiento?: InputMaybe<Scalars['String']>;
  codigo?: InputMaybe<Scalars['String']>;
  eventoId?: InputMaybe<Scalars['Int']>;
  feriaId?: InputMaybe<Scalars['Int']>;
  precio?: InputMaybe<Scalars['Float']>;
  reservado?: InputMaybe<Scalars['String']>;
  tendido?: InputMaybe<Scalars['String']>;
};

export type Evento = {
  __typename?: 'Evento';
  descripcionCorta?: Maybe<Scalars['String']>;
  descripcionLarga?: Maybe<Scalars['String']>;
  direccion?: Maybe<Scalars['String']>;
  estado?: Maybe<Scalars['String']>;
  eventoId?: Maybe<Scalars['ID']>;
  fecha?: Maybe<Scalars['Date']>;
  fechaFinal?: Maybe<Scalars['Date']>;
  fechaInicial?: Maybe<Scalars['Date']>;
  feriaId?: Maybe<Scalars['Int']>;
  hora?: Maybe<Scalars['String']>;
  horaFinal?: Maybe<Scalars['String']>;
  horaInicial?: Maybe<Scalars['String']>;
  imagenPrincipal?: Maybe<Imagen>;
  slug?: Maybe<Scalars['String']>;
  terminosCondiciones?: Maybe<Scalars['String']>;
  titulo?: Maybe<Scalars['String']>;
  ubicacion?: Maybe<Scalars['String']>;
};

export type EventoInput = {
  descripcionCorta?: InputMaybe<Scalars['String']>;
  descripcionLarga?: InputMaybe<Scalars['String']>;
  direccion?: InputMaybe<Scalars['String']>;
  eventoId?: InputMaybe<Scalars['ID']>;
  fecha?: InputMaybe<Scalars['Date']>;
  fechaFinal?: InputMaybe<Scalars['Date']>;
  fechaInicial?: InputMaybe<Scalars['Date']>;
  hora?: InputMaybe<Scalars['String']>;
  horaFinal?: InputMaybe<Scalars['String']>;
  horaInicial?: InputMaybe<Scalars['String']>;
  imagenPrincipal?: InputMaybe<Scalars['Int']>;
  terminosCondiciones?: InputMaybe<Scalars['String']>;
  titulo?: InputMaybe<Scalars['String']>;
  ubicacion?: InputMaybe<Scalars['String']>;
};

export type Feria = {
  __typename?: 'Feria';
  descripcionCorta?: Maybe<Scalars['String']>;
  descripcionLarga?: Maybe<Scalars['String']>;
  descuento?: Maybe<Scalars['Int']>;
  fecha?: Maybe<Scalars['Date']>;
  fechaFinal?: Maybe<Scalars['Date']>;
  fechaInicial?: Maybe<Scalars['Date']>;
  feriaId?: Maybe<Scalars['ID']>;
  hora?: Maybe<Scalars['String']>;
  horaFinal?: Maybe<Scalars['String']>;
  horaInicial?: Maybe<Scalars['String']>;
  imagenPrincipal?: Maybe<Imagen>;
  imagenSecundaria?: Maybe<Imagen>;
  terminosCondiciones?: Maybe<Scalars['String']>;
  titulo?: Maybe<Scalars['String']>;
};

export type FeriaInput = {
  descripcionCorta?: InputMaybe<Scalars['String']>;
  descripcionLarga?: InputMaybe<Scalars['String']>;
  descuento?: InputMaybe<Scalars['Int']>;
  fecha?: InputMaybe<Scalars['Date']>;
  fechaFinal?: InputMaybe<Scalars['Date']>;
  fechaInicial?: InputMaybe<Scalars['Date']>;
  feriaId?: InputMaybe<Scalars['ID']>;
  hora?: InputMaybe<Scalars['String']>;
  horaFinal?: InputMaybe<Scalars['String']>;
  horaInicial?: InputMaybe<Scalars['String']>;
  imagenPrincipal?: InputMaybe<Scalars['Int']>;
  imagenSecundaria?: InputMaybe<Scalars['Int']>;
  terminosCondiciones?: InputMaybe<Scalars['String']>;
  titulo?: InputMaybe<Scalars['String']>;
};

export type GetAllAsientos = {
  __typename?: 'GetAllAsientos';
  data?: Maybe<Array<Maybe<Asiento>>>;
  numeroTotal?: Maybe<Scalars['Int']>;
};

export type GetAllButacas = {
  __typename?: 'GetAllButacas';
  data?: Maybe<Array<Maybe<Butaca>>>;
  numeroTotal?: Maybe<Scalars['Int']>;
};

export type GetAllEventos = {
  __typename?: 'GetAllEventos';
  data?: Maybe<Array<Evento>>;
  numeroTotal?: Maybe<Scalars['Int']>;
};

export type GetAllImagenes = {
  __typename?: 'GetAllImagenes';
  data?: Maybe<Array<Imagen>>;
  numeroTotal?: Maybe<Scalars['Int']>;
};

export type GetAllPedidos = {
  __typename?: 'GetAllPedidos';
  data?: Maybe<Array<Pedido>>;
  numeroTotal?: Maybe<Scalars['Int']>;
};

export type GetAllSuscriptores = {
  __typename?: 'GetAllSuscriptores';
  data?: Maybe<Array<Maybe<Suscriptor>>>;
  numeroTotal?: Maybe<Scalars['Int']>;
};

export type Imagen = {
  __typename?: 'Imagen';
  id?: Maybe<Scalars['ID']>;
  titulo?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type LoginInput = {
  email?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  ConsultEmail?: Maybe<Scalars['String']>;
  CreateEvento?: Maybe<Evento>;
  CreateImagen: Scalars['String'];
  CreatePedido: Pedido;
  CreatePedidoAbonado: Pedido;
  CreateSuscriptor?: Maybe<Suscriptor>;
  CreateUsuario: User;
  DeleteEvento?: Maybe<Scalars['String']>;
  DeleteImagen: Scalars['String'];
  Login?: Maybe<User>;
  RecoverPassword?: Maybe<Scalars['String']>;
  RestartAsientos?: Maybe<Scalars['String']>;
  UpdateAsignacionEntrada?: Maybe<AsignacionEntrada>;
  UpdateAsistencia?: Maybe<Asistente>;
  UpdateEstadoEvento?: Maybe<Evento>;
  UpdateEvento?: Maybe<Evento>;
  UpdateFeria?: Maybe<Feria>;
  UpdateImagen: Imagen;
  UpdatePassword: User;
  UpdatePrecio: Butaca;
  UpdatePrecioReferencial?: Maybe<Referencial>;
  UpdateUsuario: User;
  ValidacionEntrada?: Maybe<Asistente>;
};


export type MutationConsultEmailArgs = {
  email: Scalars['String'];
};


export type MutationCreateEventoArgs = {
  input: EventoInput;
};


export type MutationCreateImagenArgs = {
  imagen: Scalars['Upload'];
};


export type MutationCreatePedidoArgs = {
  input1: PedidoInput;
  input2?: InputMaybe<Array<DetallePedidoInput>>;
  input3?: InputMaybe<UserInput>;
};


export type MutationCreatePedidoAbonadoArgs = {
  input1: PedidoInput;
  input2?: InputMaybe<Array<DetallePedidoInput>>;
  input3?: InputMaybe<UserInput>;
};


export type MutationCreateSuscriptorArgs = {
  input: SuscriptorInput;
};


export type MutationCreateUsuarioArgs = {
  input: UserInput;
};


export type MutationDeleteEventoArgs = {
  eventoId: Scalars['Int'];
};


export type MutationDeleteImagenArgs = {
  id: Scalars['Int'];
};


export type MutationLoginArgs = {
  input: LoginInput;
};


export type MutationRecoverPasswordArgs = {
  email?: InputMaybe<Scalars['String']>;
};


export type MutationRestartAsientosArgs = {
  feriaId: Scalars['Int'];
};


export type MutationUpdateAsignacionEntradaArgs = {
  input: AsignacionEntradaInput;
};


export type MutationUpdateAsistenciaArgs = {
  input: UpdateAsistenciaInput;
};


export type MutationUpdateEstadoEventoArgs = {
  input: UpdateEstadoEventoInput;
};


export type MutationUpdateEventoArgs = {
  input: EventoInput;
};


export type MutationUpdateFeriaArgs = {
  input: FeriaInput;
};


export type MutationUpdateImagenArgs = {
  id?: InputMaybe<Scalars['Int']>;
  titulo?: InputMaybe<Scalars['String']>;
};


export type MutationUpdatePasswordArgs = {
  input?: InputMaybe<UpdatePasswordInput>;
};


export type MutationUpdatePrecioArgs = {
  input?: InputMaybe<ButacaInput>;
};


export type MutationUpdatePrecioReferencialArgs = {
  input: ReferencialInput;
};


export type MutationUpdateUsuarioArgs = {
  input?: InputMaybe<UserInput>;
};


export type MutationValidacionEntradaArgs = {
  constante?: InputMaybe<Scalars['String']>;
  fecha?: InputMaybe<Scalars['Date']>;
  numDocumento?: InputMaybe<Scalars['String']>;
  tipoDocumento?: InputMaybe<Scalars['String']>;
};

/** Allows ordering a list of records. */
export type OrderByClause = {
  /** The column that is used for ordering. */
  field: Scalars['String'];
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Pagination information about the corresponding list of items. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** Count of nodes in current request. */
  count?: Maybe<Scalars['Int']>;
  /** Current page of request. */
  currentPage?: Maybe<Scalars['Int']>;
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Last page in connection. */
  lastPage?: Maybe<Scalars['Int']>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
  /** Total number of node in connection. */
  total?: Maybe<Scalars['Int']>;
};

/** Pagination information about the corresponding list of items. */
export type PaginatorInfo = {
  __typename?: 'PaginatorInfo';
  /** Total count of available items in the page. */
  count: Scalars['Int'];
  /** Current pagination page. */
  currentPage: Scalars['Int'];
  /** Index of first item in the current page. */
  firstItem?: Maybe<Scalars['Int']>;
  /** If collection has more pages. */
  hasMorePages: Scalars['Boolean'];
  /** Index of last item in the current page. */
  lastItem?: Maybe<Scalars['Int']>;
  /** Last page number of the collection. */
  lastPage: Scalars['Int'];
  /** Number of items per page in the collection. */
  perPage: Scalars['Int'];
  /** Total items available in the collection. */
  total: Scalars['Int'];
};

export type Pedido = {
  __typename?: 'Pedido';
  DetallePedido?: Maybe<Array<DetallePedido>>;
  Usuario?: Maybe<User>;
  fechaPedido?: Maybe<Scalars['Date']>;
  numeroComprobante?: Maybe<Scalars['String']>;
  pedidoId?: Maybe<Scalars['ID']>;
  precioTotal?: Maybe<Scalars['Float']>;
  razonSocial?: Maybe<Scalars['String']>;
  tipoComprobante?: Maybe<Scalars['String']>;
  transaccionId?: Maybe<Scalars['Float']>;
  usuarioId?: Maybe<Scalars['Int']>;
};

export type PedidoInput = {
  fechaPedido?: InputMaybe<Scalars['Date']>;
  numeroComprobante?: InputMaybe<Scalars['String']>;
  pedidoId?: InputMaybe<Scalars['ID']>;
  precioTotal?: InputMaybe<Scalars['Float']>;
  razonSocial?: InputMaybe<Scalars['String']>;
  tipoComprobante?: InputMaybe<Scalars['String']>;
  transaccionId?: InputMaybe<Scalars['Float']>;
};

export type Query = {
  __typename?: 'Query';
  GetAllAsientos?: Maybe<Array<Maybe<Asiento>>>;
  GetAllAsientosAbonados?: Maybe<Array<Maybe<Asiento>>>;
  GetAllButacas?: Maybe<GetAllButacas>;
  GetAllEntradasUsuario?: Maybe<Array<Maybe<AsignacionEntrada>>>;
  GetAllEventos?: Maybe<GetAllEventos>;
  GetAllEventosUsuario?: Maybe<GetAllEventos>;
  GetAllImagenes?: Maybe<GetAllImagenes>;
  GetAllPedidos?: Maybe<GetAllPedidos>;
  GetAllPrecioReferencial?: Maybe<Array<Maybe<Referencial>>>;
  GetAllSuscriptores?: Maybe<GetAllSuscriptores>;
  GetEventoSlug?: Maybe<Evento>;
  GetFeria?: Maybe<Feria>;
  GetReporteExcel?: Maybe<Scalars['String']>;
};


export type QueryGetAllAsientosArgs = {
  eventoId?: InputMaybe<Scalars['Int']>;
  tendido?: InputMaybe<Scalars['String']>;
};


export type QueryGetAllAsientosAbonadosArgs = {
  feriaId?: InputMaybe<Scalars['Int']>;
  tendido?: InputMaybe<Scalars['String']>;
};


export type QueryGetAllButacasArgs = {
  tendido?: InputMaybe<Scalars['String']>;
};


export type QueryGetAllEntradasUsuarioArgs = {
  eventoId?: InputMaybe<Scalars['Int']>;
};


export type QueryGetAllEventosArgs = {
  estado?: InputMaybe<Scalars['String']>;
  feriaId?: InputMaybe<Scalars['Int']>;
};


export type QueryGetAllImagenesArgs = {
  numeroPagina?: InputMaybe<Scalars['Int']>;
  pagina?: InputMaybe<Scalars['Int']>;
};


export type QueryGetAllPedidosArgs = {
  numeroPagina?: InputMaybe<Scalars['Int']>;
  pagina?: InputMaybe<Scalars['Int']>;
};


export type QueryGetAllSuscriptoresArgs = {
  numeroPagina?: InputMaybe<Scalars['Int']>;
  pagina?: InputMaybe<Scalars['Int']>;
};


export type QueryGetEventoSlugArgs = {
  slug?: InputMaybe<Scalars['String']>;
};


export type QueryGetReporteExcelArgs = {
  pedidoId: Scalars['Int'];
};

export type Referencial = {
  __typename?: 'Referencial';
  precio?: Maybe<Scalars['Float']>;
  referenciaId?: Maybe<Scalars['ID']>;
  tendido?: Maybe<Scalars['String']>;
  titulo?: Maybe<Scalars['String']>;
};

export type ReferencialInput = {
  precio?: InputMaybe<Scalars['Float']>;
  referenciaId?: InputMaybe<Scalars['ID']>;
};

/** The available directions for ordering a list of records. */
export enum SortOrder {
  /** Sort records in ascending order. */
  Asc = 'ASC',
  /** Sort records in descending order. */
  Desc = 'DESC'
}

export type Suscriptor = {
  __typename?: 'Suscriptor';
  email?: Maybe<Scalars['String']>;
  nombres?: Maybe<Scalars['String']>;
  suscriptorId?: Maybe<Scalars['ID']>;
};

export type SuscriptorInput = {
  email?: InputMaybe<Scalars['String']>;
  nombres?: InputMaybe<Scalars['String']>;
};

/** Specify if you want to include or exclude trashed results from a query. */
export enum Trashed {
  /** Only return trashed results. */
  Only = 'ONLY',
  /** Return both trashed and non-trashed results. */
  With = 'WITH',
  /** Only return non-trashed results. */
  Without = 'WITHOUT'
}

export type UpdateAsistenciaInput = {
  asientoId?: InputMaybe<Scalars['ID']>;
  constante?: InputMaybe<Scalars['String']>;
  numDocumento?: InputMaybe<Scalars['String']>;
  tipoDocumento?: InputMaybe<Scalars['String']>;
};

export type UpdateEstadoEventoInput = {
  estado?: InputMaybe<Scalars['String']>;
  eventoId?: InputMaybe<Scalars['ID']>;
};

export type UpdatePasswordInput = {
  passwordAntiguo?: InputMaybe<Scalars['String']>;
  passwordNuevo?: InputMaybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  apellidos?: Maybe<Scalars['String']>;
  apiToken?: Maybe<Scalars['String']>;
  celular?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  nombres?: Maybe<Scalars['String']>;
  numeroDocumento?: Maybe<Scalars['String']>;
  tipoDocumento?: Maybe<Scalars['String']>;
  tipoUsuario?: Maybe<Scalars['Int']>;
};

export type UserInput = {
  apellidos?: InputMaybe<Scalars['String']>;
  celular?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  nombres?: InputMaybe<Scalars['String']>;
  numeroDocumento?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  tipoDocumento?: InputMaybe<Scalars['String']>;
};

export type ConsultEmailMutationVariables = Exact<{
  email: Scalars['String'];
}>;


export type ConsultEmailMutation = { __typename?: 'Mutation', ConsultEmail?: string | null };

export type CreatePedidoMutationVariables = Exact<{
  input1: PedidoInput;
  input2?: InputMaybe<Array<DetallePedidoInput> | DetallePedidoInput>;
  input3?: InputMaybe<UserInput>;
}>;


export type CreatePedidoMutation = { __typename?: 'Mutation', CreatePedido: { __typename?: 'Pedido', pedidoId?: string | null, tipoComprobante?: string | null } };

export type CreatePedidoAbonadoMutationVariables = Exact<{
  input1: PedidoInput;
  input2?: InputMaybe<Array<DetallePedidoInput> | DetallePedidoInput>;
  input3?: InputMaybe<UserInput>;
}>;


export type CreatePedidoAbonadoMutation = { __typename?: 'Mutation', CreatePedidoAbonado: { __typename?: 'Pedido', pedidoId?: string | null, tipoComprobante?: string | null } };

export type CreateSuscriptorMutationVariables = Exact<{
  input: SuscriptorInput;
}>;


export type CreateSuscriptorMutation = { __typename?: 'Mutation', CreateSuscriptor?: { __typename?: 'Suscriptor', suscriptorId?: string | null, nombres?: string | null, email?: string | null } | null };

export type CreateUsuarioMutationVariables = Exact<{
  input: UserInput;
}>;


export type CreateUsuarioMutation = { __typename?: 'Mutation', CreateUsuario: { __typename?: 'User', id?: string | null, tipoUsuario?: number | null, tipoDocumento?: string | null, numeroDocumento?: string | null, nombres?: string | null, apellidos?: string | null, celular?: string | null, email?: string | null, apiToken?: string | null } };

export type LoginMutationVariables = Exact<{
  input: LoginInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', Login?: { __typename?: 'User', id?: string | null, email?: string | null, tipoUsuario?: number | null, tipoDocumento?: string | null, numeroDocumento?: string | null, nombres?: string | null, apellidos?: string | null, celular?: string | null, apiToken?: string | null } | null };

export type RecoverPasswordMutationVariables = Exact<{
  email?: InputMaybe<Scalars['String']>;
}>;


export type RecoverPasswordMutation = { __typename?: 'Mutation', RecoverPassword?: string | null };

export type UpdateAsignacionEntradaMutationVariables = Exact<{
  input: AsignacionEntradaInput;
}>;


export type UpdateAsignacionEntradaMutation = { __typename?: 'Mutation', UpdateAsignacionEntrada?: { __typename?: 'AsignacionEntrada', asientoId?: string | null, tipoDocumento?: string | null, numDocumento?: string | null, nombres?: string | null, apellidos?: string | null, reservado?: string | null, tendido?: string | null, codigo?: string | null, estado?: string | null, eventoId?: number | null, userId?: number | null } | null };

export type UpdatePasswordMutationVariables = Exact<{
  input?: InputMaybe<UpdatePasswordInput>;
}>;


export type UpdatePasswordMutation = { __typename?: 'Mutation', UpdatePassword: { __typename?: 'User', nombres?: string | null, apellidos?: string | null, apiToken?: string | null } };

export type UpdateUsuarioMutationVariables = Exact<{
  input: UserInput;
}>;


export type UpdateUsuarioMutation = { __typename?: 'Mutation', UpdateUsuario: { __typename?: 'User', id?: string | null, tipoUsuario?: number | null, tipoDocumento?: string | null, numeroDocumento?: string | null, nombres?: string | null, apellidos?: string | null, celular?: string | null, email?: string | null, apiToken?: string | null } };

export type GetAllAsientosQueryVariables = Exact<{
  tendido?: InputMaybe<Scalars['String']>;
  eventoId?: InputMaybe<Scalars['Int']>;
}>;


export type GetAllAsientosQuery = { __typename?: 'Query', GetAllAsientos?: Array<{ __typename?: 'Asiento', asientoId?: string | null, tendido?: string | null, codigo?: string | null, asiento?: string | null, reservado?: string | null } | null> | null };

export type GetAllAsientosAbonadosQueryVariables = Exact<{
  tendido?: InputMaybe<Scalars['String']>;
  feriaId?: InputMaybe<Scalars['Int']>;
}>;


export type GetAllAsientosAbonadosQuery = { __typename?: 'Query', GetAllAsientosAbonados?: Array<{ __typename?: 'Asiento', asientoId?: string | null, tendido?: string | null, codigo?: string | null, reservado?: string | null, asiento?: string | null, feriaId?: number | null } | null> | null };

export type GetAllButacasQueryVariables = Exact<{
  tendido?: InputMaybe<Scalars['String']>;
}>;


export type GetAllButacasQuery = { __typename?: 'Query', GetAllButacas?: { __typename?: 'GetAllButacas', numeroTotal?: number | null, data?: Array<{ __typename?: 'Butaca', butacaId?: string | null, tendido?: string | null, codigo?: string | null, cantidad?: number | null, precio?: number | null } | null> | null } | null };

export type GetAllEntradasUsuarioQueryVariables = Exact<{
  eventoId?: InputMaybe<Scalars['Int']>;
}>;


export type GetAllEntradasUsuarioQuery = { __typename?: 'Query', GetAllEntradasUsuario?: Array<{ __typename?: 'AsignacionEntrada', asientoId?: string | null, eventoId?: number | null, tipoDocumento?: string | null, numDocumento?: string | null, nombres?: string | null, apellidos?: string | null, reservado?: string | null, tendido?: string | null, codigo?: string | null, estado?: string | null } | null> | null };

export type GetAllEventosQueryVariables = Exact<{
  feriaId?: InputMaybe<Scalars['Int']>;
  estado?: InputMaybe<Scalars['String']>;
}>;


export type GetAllEventosQuery = { __typename?: 'Query', GetAllEventos?: { __typename?: 'GetAllEventos', numeroTotal?: number | null, data?: Array<{ __typename?: 'Evento', eventoId?: string | null, titulo?: string | null, descripcionCorta?: string | null, descripcionLarga?: string | null, direccion?: string | null, ubicacion?: string | null, fecha?: any | null, hora?: string | null, fechaInicial?: any | null, horaInicial?: string | null, fechaFinal?: any | null, horaFinal?: string | null, estado?: string | null, slug?: string | null, feriaId?: number | null, imagenPrincipal?: { __typename?: 'Imagen', id?: string | null, titulo?: string | null, url?: string | null } | null }> | null } | null };

export type GetAllEventosUsuarioQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllEventosUsuarioQuery = { __typename?: 'Query', GetAllEventosUsuario?: { __typename?: 'GetAllEventos', numeroTotal?: number | null, data?: Array<{ __typename?: 'Evento', eventoId?: string | null, titulo?: string | null, imagenPrincipal?: { __typename?: 'Imagen', id?: string | null, titulo?: string | null, url?: string | null } | null }> | null } | null };

export type GetAllPrecioReferencialQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllPrecioReferencialQuery = { __typename?: 'Query', GetAllPrecioReferencial?: Array<{ __typename?: 'Referencial', tendido?: string | null, precio?: number | null, titulo?: string | null } | null> | null };

export type GetEventoSlugQueryVariables = Exact<{
  slug?: InputMaybe<Scalars['String']>;
}>;


export type GetEventoSlugQuery = { __typename?: 'Query', GetEventoSlug?: { __typename?: 'Evento', eventoId?: string | null, titulo?: string | null, descripcionCorta?: string | null, descripcionLarga?: string | null, direccion?: string | null, ubicacion?: string | null, fecha?: any | null, hora?: string | null, terminosCondiciones?: string | null, fechaInicial?: any | null, horaInicial?: string | null, fechaFinal?: any | null, horaFinal?: string | null, estado?: string | null, imagenPrincipal?: { __typename?: 'Imagen', id?: string | null, titulo?: string | null, url?: string | null } | null } | null };

export type GetFeriaQueryVariables = Exact<{ [key: string]: never; }>;


export type GetFeriaQuery = { __typename?: 'Query', GetFeria?: { __typename?: 'Feria', feriaId?: string | null, descripcionCorta?: string | null, descripcionLarga?: string | null, descuento?: number | null, titulo?: string | null, fecha?: any | null, hora?: string | null, terminosCondiciones?: string | null, fechaInicial?: any | null, horaInicial?: string | null, fechaFinal?: any | null, horaFinal?: string | null, imagenPrincipal?: { __typename?: 'Imagen', id?: string | null, titulo?: string | null, url?: string | null } | null, imagenSecundaria?: { __typename?: 'Imagen', id?: string | null, titulo?: string | null, url?: string | null } | null } | null };


export const ConsultEmailDocument = gql`
    mutation ConsultEmail($email: String!) {
  ConsultEmail(email: $email)
}
    `;
export type ConsultEmailMutationFn = Apollo.MutationFunction<ConsultEmailMutation, ConsultEmailMutationVariables>;

/**
 * __useConsultEmailMutation__
 *
 * To run a mutation, you first call `useConsultEmailMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useConsultEmailMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [consultEmailMutation, { data, loading, error }] = useConsultEmailMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useConsultEmailMutation(baseOptions?: Apollo.MutationHookOptions<ConsultEmailMutation, ConsultEmailMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ConsultEmailMutation, ConsultEmailMutationVariables>(ConsultEmailDocument, options);
      }
export type ConsultEmailMutationHookResult = ReturnType<typeof useConsultEmailMutation>;
export type ConsultEmailMutationResult = Apollo.MutationResult<ConsultEmailMutation>;
export type ConsultEmailMutationOptions = Apollo.BaseMutationOptions<ConsultEmailMutation, ConsultEmailMutationVariables>;
export const CreatePedidoDocument = gql`
    mutation CreatePedido($input1: PedidoInput!, $input2: [DetallePedidoInput!], $input3: UserInput) {
  CreatePedido(input1: $input1, input2: $input2, input3: $input3) {
    pedidoId
    tipoComprobante
  }
}
    `;
export type CreatePedidoMutationFn = Apollo.MutationFunction<CreatePedidoMutation, CreatePedidoMutationVariables>;

/**
 * __useCreatePedidoMutation__
 *
 * To run a mutation, you first call `useCreatePedidoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePedidoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPedidoMutation, { data, loading, error }] = useCreatePedidoMutation({
 *   variables: {
 *      input1: // value for 'input1'
 *      input2: // value for 'input2'
 *      input3: // value for 'input3'
 *   },
 * });
 */
export function useCreatePedidoMutation(baseOptions?: Apollo.MutationHookOptions<CreatePedidoMutation, CreatePedidoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreatePedidoMutation, CreatePedidoMutationVariables>(CreatePedidoDocument, options);
      }
export type CreatePedidoMutationHookResult = ReturnType<typeof useCreatePedidoMutation>;
export type CreatePedidoMutationResult = Apollo.MutationResult<CreatePedidoMutation>;
export type CreatePedidoMutationOptions = Apollo.BaseMutationOptions<CreatePedidoMutation, CreatePedidoMutationVariables>;
export const CreatePedidoAbonadoDocument = gql`
    mutation CreatePedidoAbonado($input1: PedidoInput!, $input2: [DetallePedidoInput!], $input3: UserInput) {
  CreatePedidoAbonado(input1: $input1, input2: $input2, input3: $input3) {
    pedidoId
    tipoComprobante
  }
}
    `;
export type CreatePedidoAbonadoMutationFn = Apollo.MutationFunction<CreatePedidoAbonadoMutation, CreatePedidoAbonadoMutationVariables>;

/**
 * __useCreatePedidoAbonadoMutation__
 *
 * To run a mutation, you first call `useCreatePedidoAbonadoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePedidoAbonadoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPedidoAbonadoMutation, { data, loading, error }] = useCreatePedidoAbonadoMutation({
 *   variables: {
 *      input1: // value for 'input1'
 *      input2: // value for 'input2'
 *      input3: // value for 'input3'
 *   },
 * });
 */
export function useCreatePedidoAbonadoMutation(baseOptions?: Apollo.MutationHookOptions<CreatePedidoAbonadoMutation, CreatePedidoAbonadoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreatePedidoAbonadoMutation, CreatePedidoAbonadoMutationVariables>(CreatePedidoAbonadoDocument, options);
      }
export type CreatePedidoAbonadoMutationHookResult = ReturnType<typeof useCreatePedidoAbonadoMutation>;
export type CreatePedidoAbonadoMutationResult = Apollo.MutationResult<CreatePedidoAbonadoMutation>;
export type CreatePedidoAbonadoMutationOptions = Apollo.BaseMutationOptions<CreatePedidoAbonadoMutation, CreatePedidoAbonadoMutationVariables>;
export const CreateSuscriptorDocument = gql`
    mutation CreateSuscriptor($input: SuscriptorInput!) {
  CreateSuscriptor(input: $input) {
    suscriptorId
    nombres
    email
  }
}
    `;
export type CreateSuscriptorMutationFn = Apollo.MutationFunction<CreateSuscriptorMutation, CreateSuscriptorMutationVariables>;

/**
 * __useCreateSuscriptorMutation__
 *
 * To run a mutation, you first call `useCreateSuscriptorMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSuscriptorMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSuscriptorMutation, { data, loading, error }] = useCreateSuscriptorMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateSuscriptorMutation(baseOptions?: Apollo.MutationHookOptions<CreateSuscriptorMutation, CreateSuscriptorMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateSuscriptorMutation, CreateSuscriptorMutationVariables>(CreateSuscriptorDocument, options);
      }
export type CreateSuscriptorMutationHookResult = ReturnType<typeof useCreateSuscriptorMutation>;
export type CreateSuscriptorMutationResult = Apollo.MutationResult<CreateSuscriptorMutation>;
export type CreateSuscriptorMutationOptions = Apollo.BaseMutationOptions<CreateSuscriptorMutation, CreateSuscriptorMutationVariables>;
export const CreateUsuarioDocument = gql`
    mutation CreateUsuario($input: UserInput!) {
  CreateUsuario(input: $input) {
    id
    tipoUsuario
    tipoDocumento
    numeroDocumento
    nombres
    apellidos
    celular
    email
    apiToken
  }
}
    `;
export type CreateUsuarioMutationFn = Apollo.MutationFunction<CreateUsuarioMutation, CreateUsuarioMutationVariables>;

/**
 * __useCreateUsuarioMutation__
 *
 * To run a mutation, you first call `useCreateUsuarioMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUsuarioMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUsuarioMutation, { data, loading, error }] = useCreateUsuarioMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateUsuarioMutation(baseOptions?: Apollo.MutationHookOptions<CreateUsuarioMutation, CreateUsuarioMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateUsuarioMutation, CreateUsuarioMutationVariables>(CreateUsuarioDocument, options);
      }
export type CreateUsuarioMutationHookResult = ReturnType<typeof useCreateUsuarioMutation>;
export type CreateUsuarioMutationResult = Apollo.MutationResult<CreateUsuarioMutation>;
export type CreateUsuarioMutationOptions = Apollo.BaseMutationOptions<CreateUsuarioMutation, CreateUsuarioMutationVariables>;
export const LoginDocument = gql`
    mutation Login($input: LoginInput!) {
  Login(input: $input) {
    id
    email
    tipoUsuario
    tipoDocumento
    numeroDocumento
    nombres
    apellidos
    celular
    apiToken
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const RecoverPasswordDocument = gql`
    mutation RecoverPassword($email: String) {
  RecoverPassword(email: $email)
}
    `;
export type RecoverPasswordMutationFn = Apollo.MutationFunction<RecoverPasswordMutation, RecoverPasswordMutationVariables>;

/**
 * __useRecoverPasswordMutation__
 *
 * To run a mutation, you first call `useRecoverPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRecoverPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [recoverPasswordMutation, { data, loading, error }] = useRecoverPasswordMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useRecoverPasswordMutation(baseOptions?: Apollo.MutationHookOptions<RecoverPasswordMutation, RecoverPasswordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RecoverPasswordMutation, RecoverPasswordMutationVariables>(RecoverPasswordDocument, options);
      }
export type RecoverPasswordMutationHookResult = ReturnType<typeof useRecoverPasswordMutation>;
export type RecoverPasswordMutationResult = Apollo.MutationResult<RecoverPasswordMutation>;
export type RecoverPasswordMutationOptions = Apollo.BaseMutationOptions<RecoverPasswordMutation, RecoverPasswordMutationVariables>;
export const UpdateAsignacionEntradaDocument = gql`
    mutation UpdateAsignacionEntrada($input: AsignacionEntradaInput!) {
  UpdateAsignacionEntrada(input: $input) {
    asientoId
    tipoDocumento
    numDocumento
    nombres
    apellidos
    reservado
    tendido
    codigo
    estado
    eventoId
    userId
  }
}
    `;
export type UpdateAsignacionEntradaMutationFn = Apollo.MutationFunction<UpdateAsignacionEntradaMutation, UpdateAsignacionEntradaMutationVariables>;

/**
 * __useUpdateAsignacionEntradaMutation__
 *
 * To run a mutation, you first call `useUpdateAsignacionEntradaMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateAsignacionEntradaMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateAsignacionEntradaMutation, { data, loading, error }] = useUpdateAsignacionEntradaMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateAsignacionEntradaMutation(baseOptions?: Apollo.MutationHookOptions<UpdateAsignacionEntradaMutation, UpdateAsignacionEntradaMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateAsignacionEntradaMutation, UpdateAsignacionEntradaMutationVariables>(UpdateAsignacionEntradaDocument, options);
      }
export type UpdateAsignacionEntradaMutationHookResult = ReturnType<typeof useUpdateAsignacionEntradaMutation>;
export type UpdateAsignacionEntradaMutationResult = Apollo.MutationResult<UpdateAsignacionEntradaMutation>;
export type UpdateAsignacionEntradaMutationOptions = Apollo.BaseMutationOptions<UpdateAsignacionEntradaMutation, UpdateAsignacionEntradaMutationVariables>;
export const UpdatePasswordDocument = gql`
    mutation UpdatePassword($input: UpdatePasswordInput) {
  UpdatePassword(input: $input) {
    nombres
    apellidos
    apiToken
  }
}
    `;
export type UpdatePasswordMutationFn = Apollo.MutationFunction<UpdatePasswordMutation, UpdatePasswordMutationVariables>;

/**
 * __useUpdatePasswordMutation__
 *
 * To run a mutation, you first call `useUpdatePasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePasswordMutation, { data, loading, error }] = useUpdatePasswordMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdatePasswordMutation(baseOptions?: Apollo.MutationHookOptions<UpdatePasswordMutation, UpdatePasswordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdatePasswordMutation, UpdatePasswordMutationVariables>(UpdatePasswordDocument, options);
      }
export type UpdatePasswordMutationHookResult = ReturnType<typeof useUpdatePasswordMutation>;
export type UpdatePasswordMutationResult = Apollo.MutationResult<UpdatePasswordMutation>;
export type UpdatePasswordMutationOptions = Apollo.BaseMutationOptions<UpdatePasswordMutation, UpdatePasswordMutationVariables>;
export const UpdateUsuarioDocument = gql`
    mutation UpdateUsuario($input: UserInput!) {
  UpdateUsuario(input: $input) {
    id
    tipoUsuario
    tipoDocumento
    numeroDocumento
    nombres
    apellidos
    celular
    email
    apiToken
  }
}
    `;
export type UpdateUsuarioMutationFn = Apollo.MutationFunction<UpdateUsuarioMutation, UpdateUsuarioMutationVariables>;

/**
 * __useUpdateUsuarioMutation__
 *
 * To run a mutation, you first call `useUpdateUsuarioMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUsuarioMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUsuarioMutation, { data, loading, error }] = useUpdateUsuarioMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateUsuarioMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUsuarioMutation, UpdateUsuarioMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateUsuarioMutation, UpdateUsuarioMutationVariables>(UpdateUsuarioDocument, options);
      }
export type UpdateUsuarioMutationHookResult = ReturnType<typeof useUpdateUsuarioMutation>;
export type UpdateUsuarioMutationResult = Apollo.MutationResult<UpdateUsuarioMutation>;
export type UpdateUsuarioMutationOptions = Apollo.BaseMutationOptions<UpdateUsuarioMutation, UpdateUsuarioMutationVariables>;
export const GetAllAsientosDocument = gql`
    query GetAllAsientos($tendido: String, $eventoId: Int) {
  GetAllAsientos(tendido: $tendido, eventoId: $eventoId) {
    asientoId
    tendido
    codigo
    asiento
    reservado
  }
}
    `;

/**
 * __useGetAllAsientosQuery__
 *
 * To run a query within a React component, call `useGetAllAsientosQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllAsientosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllAsientosQuery({
 *   variables: {
 *      tendido: // value for 'tendido'
 *      eventoId: // value for 'eventoId'
 *   },
 * });
 */
export function useGetAllAsientosQuery(baseOptions?: Apollo.QueryHookOptions<GetAllAsientosQuery, GetAllAsientosQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllAsientosQuery, GetAllAsientosQueryVariables>(GetAllAsientosDocument, options);
      }
export function useGetAllAsientosLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllAsientosQuery, GetAllAsientosQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllAsientosQuery, GetAllAsientosQueryVariables>(GetAllAsientosDocument, options);
        }
export type GetAllAsientosQueryHookResult = ReturnType<typeof useGetAllAsientosQuery>;
export type GetAllAsientosLazyQueryHookResult = ReturnType<typeof useGetAllAsientosLazyQuery>;
export type GetAllAsientosQueryResult = Apollo.QueryResult<GetAllAsientosQuery, GetAllAsientosQueryVariables>;
export const GetAllAsientosAbonadosDocument = gql`
    query GetAllAsientosAbonados($tendido: String, $feriaId: Int) {
  GetAllAsientosAbonados(tendido: $tendido, feriaId: $feriaId) {
    asientoId
    tendido
    codigo
    reservado
    asiento
    feriaId
  }
}
    `;

/**
 * __useGetAllAsientosAbonadosQuery__
 *
 * To run a query within a React component, call `useGetAllAsientosAbonadosQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllAsientosAbonadosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllAsientosAbonadosQuery({
 *   variables: {
 *      tendido: // value for 'tendido'
 *      feriaId: // value for 'feriaId'
 *   },
 * });
 */
export function useGetAllAsientosAbonadosQuery(baseOptions?: Apollo.QueryHookOptions<GetAllAsientosAbonadosQuery, GetAllAsientosAbonadosQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllAsientosAbonadosQuery, GetAllAsientosAbonadosQueryVariables>(GetAllAsientosAbonadosDocument, options);
      }
export function useGetAllAsientosAbonadosLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllAsientosAbonadosQuery, GetAllAsientosAbonadosQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllAsientosAbonadosQuery, GetAllAsientosAbonadosQueryVariables>(GetAllAsientosAbonadosDocument, options);
        }
export type GetAllAsientosAbonadosQueryHookResult = ReturnType<typeof useGetAllAsientosAbonadosQuery>;
export type GetAllAsientosAbonadosLazyQueryHookResult = ReturnType<typeof useGetAllAsientosAbonadosLazyQuery>;
export type GetAllAsientosAbonadosQueryResult = Apollo.QueryResult<GetAllAsientosAbonadosQuery, GetAllAsientosAbonadosQueryVariables>;
export const GetAllButacasDocument = gql`
    query GetAllButacas($tendido: String) {
  GetAllButacas(tendido: $tendido) {
    numeroTotal
    data {
      butacaId
      tendido
      codigo
      cantidad
      precio
    }
  }
}
    `;

/**
 * __useGetAllButacasQuery__
 *
 * To run a query within a React component, call `useGetAllButacasQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllButacasQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllButacasQuery({
 *   variables: {
 *      tendido: // value for 'tendido'
 *   },
 * });
 */
export function useGetAllButacasQuery(baseOptions?: Apollo.QueryHookOptions<GetAllButacasQuery, GetAllButacasQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllButacasQuery, GetAllButacasQueryVariables>(GetAllButacasDocument, options);
      }
export function useGetAllButacasLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllButacasQuery, GetAllButacasQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllButacasQuery, GetAllButacasQueryVariables>(GetAllButacasDocument, options);
        }
export type GetAllButacasQueryHookResult = ReturnType<typeof useGetAllButacasQuery>;
export type GetAllButacasLazyQueryHookResult = ReturnType<typeof useGetAllButacasLazyQuery>;
export type GetAllButacasQueryResult = Apollo.QueryResult<GetAllButacasQuery, GetAllButacasQueryVariables>;
export const GetAllEntradasUsuarioDocument = gql`
    query GetAllEntradasUsuario($eventoId: Int) {
  GetAllEntradasUsuario(eventoId: $eventoId) {
    asientoId
    eventoId
    tipoDocumento
    numDocumento
    nombres
    apellidos
    reservado
    tendido
    codigo
    estado
  }
}
    `;

/**
 * __useGetAllEntradasUsuarioQuery__
 *
 * To run a query within a React component, call `useGetAllEntradasUsuarioQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllEntradasUsuarioQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllEntradasUsuarioQuery({
 *   variables: {
 *      eventoId: // value for 'eventoId'
 *   },
 * });
 */
export function useGetAllEntradasUsuarioQuery(baseOptions?: Apollo.QueryHookOptions<GetAllEntradasUsuarioQuery, GetAllEntradasUsuarioQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllEntradasUsuarioQuery, GetAllEntradasUsuarioQueryVariables>(GetAllEntradasUsuarioDocument, options);
      }
export function useGetAllEntradasUsuarioLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllEntradasUsuarioQuery, GetAllEntradasUsuarioQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllEntradasUsuarioQuery, GetAllEntradasUsuarioQueryVariables>(GetAllEntradasUsuarioDocument, options);
        }
export type GetAllEntradasUsuarioQueryHookResult = ReturnType<typeof useGetAllEntradasUsuarioQuery>;
export type GetAllEntradasUsuarioLazyQueryHookResult = ReturnType<typeof useGetAllEntradasUsuarioLazyQuery>;
export type GetAllEntradasUsuarioQueryResult = Apollo.QueryResult<GetAllEntradasUsuarioQuery, GetAllEntradasUsuarioQueryVariables>;
export const GetAllEventosDocument = gql`
    query GetAllEventos($feriaId: Int, $estado: String) {
  GetAllEventos(feriaId: $feriaId, estado: $estado) {
    numeroTotal
    data {
      eventoId
      titulo
      descripcionCorta
      descripcionLarga
      imagenPrincipal {
        id
        titulo
        url
      }
      direccion
      ubicacion
      fecha
      hora
      fechaInicial
      horaInicial
      fechaFinal
      horaFinal
      estado
      slug
      feriaId
    }
  }
}
    `;

/**
 * __useGetAllEventosQuery__
 *
 * To run a query within a React component, call `useGetAllEventosQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllEventosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllEventosQuery({
 *   variables: {
 *      feriaId: // value for 'feriaId'
 *      estado: // value for 'estado'
 *   },
 * });
 */
export function useGetAllEventosQuery(baseOptions?: Apollo.QueryHookOptions<GetAllEventosQuery, GetAllEventosQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllEventosQuery, GetAllEventosQueryVariables>(GetAllEventosDocument, options);
      }
export function useGetAllEventosLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllEventosQuery, GetAllEventosQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllEventosQuery, GetAllEventosQueryVariables>(GetAllEventosDocument, options);
        }
export type GetAllEventosQueryHookResult = ReturnType<typeof useGetAllEventosQuery>;
export type GetAllEventosLazyQueryHookResult = ReturnType<typeof useGetAllEventosLazyQuery>;
export type GetAllEventosQueryResult = Apollo.QueryResult<GetAllEventosQuery, GetAllEventosQueryVariables>;
export const GetAllEventosUsuarioDocument = gql`
    query GetAllEventosUsuario {
  GetAllEventosUsuario {
    numeroTotal
    data {
      eventoId
      titulo
      imagenPrincipal {
        id
        titulo
        url
      }
    }
  }
}
    `;

/**
 * __useGetAllEventosUsuarioQuery__
 *
 * To run a query within a React component, call `useGetAllEventosUsuarioQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllEventosUsuarioQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllEventosUsuarioQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllEventosUsuarioQuery(baseOptions?: Apollo.QueryHookOptions<GetAllEventosUsuarioQuery, GetAllEventosUsuarioQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllEventosUsuarioQuery, GetAllEventosUsuarioQueryVariables>(GetAllEventosUsuarioDocument, options);
      }
export function useGetAllEventosUsuarioLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllEventosUsuarioQuery, GetAllEventosUsuarioQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllEventosUsuarioQuery, GetAllEventosUsuarioQueryVariables>(GetAllEventosUsuarioDocument, options);
        }
export type GetAllEventosUsuarioQueryHookResult = ReturnType<typeof useGetAllEventosUsuarioQuery>;
export type GetAllEventosUsuarioLazyQueryHookResult = ReturnType<typeof useGetAllEventosUsuarioLazyQuery>;
export type GetAllEventosUsuarioQueryResult = Apollo.QueryResult<GetAllEventosUsuarioQuery, GetAllEventosUsuarioQueryVariables>;
export const GetAllPrecioReferencialDocument = gql`
    query GetAllPrecioReferencial {
  GetAllPrecioReferencial {
    tendido
    precio
    titulo
  }
}
    `;

/**
 * __useGetAllPrecioReferencialQuery__
 *
 * To run a query within a React component, call `useGetAllPrecioReferencialQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllPrecioReferencialQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllPrecioReferencialQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllPrecioReferencialQuery(baseOptions?: Apollo.QueryHookOptions<GetAllPrecioReferencialQuery, GetAllPrecioReferencialQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllPrecioReferencialQuery, GetAllPrecioReferencialQueryVariables>(GetAllPrecioReferencialDocument, options);
      }
export function useGetAllPrecioReferencialLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllPrecioReferencialQuery, GetAllPrecioReferencialQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllPrecioReferencialQuery, GetAllPrecioReferencialQueryVariables>(GetAllPrecioReferencialDocument, options);
        }
export type GetAllPrecioReferencialQueryHookResult = ReturnType<typeof useGetAllPrecioReferencialQuery>;
export type GetAllPrecioReferencialLazyQueryHookResult = ReturnType<typeof useGetAllPrecioReferencialLazyQuery>;
export type GetAllPrecioReferencialQueryResult = Apollo.QueryResult<GetAllPrecioReferencialQuery, GetAllPrecioReferencialQueryVariables>;
export const GetEventoSlugDocument = gql`
    query GetEventoSlug($slug: String) {
  GetEventoSlug(slug: $slug) {
    eventoId
    titulo
    descripcionCorta
    descripcionLarga
    imagenPrincipal {
      id
      titulo
      url
    }
    direccion
    ubicacion
    fecha
    hora
    terminosCondiciones
    fechaInicial
    horaInicial
    fechaFinal
    horaFinal
    estado
  }
}
    `;

/**
 * __useGetEventoSlugQuery__
 *
 * To run a query within a React component, call `useGetEventoSlugQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetEventoSlugQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetEventoSlugQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useGetEventoSlugQuery(baseOptions?: Apollo.QueryHookOptions<GetEventoSlugQuery, GetEventoSlugQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetEventoSlugQuery, GetEventoSlugQueryVariables>(GetEventoSlugDocument, options);
      }
export function useGetEventoSlugLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetEventoSlugQuery, GetEventoSlugQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetEventoSlugQuery, GetEventoSlugQueryVariables>(GetEventoSlugDocument, options);
        }
export type GetEventoSlugQueryHookResult = ReturnType<typeof useGetEventoSlugQuery>;
export type GetEventoSlugLazyQueryHookResult = ReturnType<typeof useGetEventoSlugLazyQuery>;
export type GetEventoSlugQueryResult = Apollo.QueryResult<GetEventoSlugQuery, GetEventoSlugQueryVariables>;
export const GetFeriaDocument = gql`
    query GetFeria {
  GetFeria {
    feriaId
    descripcionCorta
    descripcionLarga
    descuento
    titulo
    fecha
    hora
    terminosCondiciones
    imagenPrincipal {
      id
      titulo
      url
    }
    imagenSecundaria {
      id
      titulo
      url
    }
    fechaInicial
    horaInicial
    fechaFinal
    horaFinal
  }
}
    `;

/**
 * __useGetFeriaQuery__
 *
 * To run a query within a React component, call `useGetFeriaQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFeriaQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFeriaQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetFeriaQuery(baseOptions?: Apollo.QueryHookOptions<GetFeriaQuery, GetFeriaQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetFeriaQuery, GetFeriaQueryVariables>(GetFeriaDocument, options);
      }
export function useGetFeriaLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetFeriaQuery, GetFeriaQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetFeriaQuery, GetFeriaQueryVariables>(GetFeriaDocument, options);
        }
export type GetFeriaQueryHookResult = ReturnType<typeof useGetFeriaQuery>;
export type GetFeriaLazyQueryHookResult = ReturnType<typeof useGetFeriaLazyQuery>;
export type GetFeriaQueryResult = Apollo.QueryResult<GetFeriaQuery, GetFeriaQueryVariables>;