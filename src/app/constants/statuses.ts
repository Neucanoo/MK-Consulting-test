export enum Statuses {
  Not_Completed = 1,
  Not_Passed,
  Passed
}

export const statuses = [
  { label: 'Не завершено', value: 1, color: '#000000' },
  { label: 'Не складено', value: 2, color: '#f07a79' },
  { label: 'Складено', value: 3, color: '#72a96f' },
]

export const statusLabels = {
  1: { label: 'Не завершено', color: '#000000' },
  2: { label: 'Не складено', color: '#f07a79' },
  3: { label: 'Складено', color: '#72a96f' },
}