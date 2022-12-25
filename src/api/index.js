export const fetchData = async (key) => {
  let url = `https://api.oaker.bid/api/data?key=${key}`
  let res = await fetch(url)
  let json = await res.json()
  return json
}
