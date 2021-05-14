/**
 * Very basic wrapper for fetch
 * @param {*} request
 * @returns
 */
export const fetchData = async (request) => {
  const response = await fetch(request)
  return await response.json()
}
