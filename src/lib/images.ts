export const unsplash = (photo: string, width: number, height?: number) => {
  const size = height ? `&w=${width}&h=${height}` : `&w=${width}`
  return `https://images.unsplash.com/${photo}?auto=format&fit=crop${size}&q=80`
}
