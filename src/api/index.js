export const fetchData = async (key) => {
  let url = `https://vercel-server-bit.vercel.app/api/data?key=${key}`
  let res = await fetch(url)
  let json = await res.json()
  return json
}
