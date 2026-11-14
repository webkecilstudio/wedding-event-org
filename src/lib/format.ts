const idr = new Intl.NumberFormat('id-ID', {
  style: 'currency',
  currency: 'IDR',
  maximumFractionDigits: 0,
})

export const formatIDR = (value: number) => idr.format(value)

export const pad2 = (value: number) => String(value).padStart(2, '0')

export const formatDate = (value: string) =>
  new Date(`${value}T00:00:00`).toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })
