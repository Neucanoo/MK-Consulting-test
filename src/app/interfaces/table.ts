export interface ColumnButton {
  label: string|number,
  style: string,
  show: Function,
  fn: Function
}

export interface Column {
  label: string|number,
  show: boolean,
  type: number,
  key: string,
  values?: { [key: string|number]: { label: string, color?: string } },
  buttons?: ColumnButton[]
}