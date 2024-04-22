export interface IVagon{
  VagonNumber: string
  VagonType: string
  CargoName: string
  OwnerName: string
  DepartureStationName: string
}

export interface IVagonData{
  vagons: IVagon[]
}

export interface IVagonDataSingle{
  vagon: IVagon
}