/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
export function removeDups(array) {
  const obj = {}
  const result = []
  array.forEach((item) => {
    obj[item.id] = item
  })
  for (const prop in obj) {
    result.push(obj[prop])
  }
  return result
}
