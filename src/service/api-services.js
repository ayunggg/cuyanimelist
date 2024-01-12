export const ApiServices = async (resource, option) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${option}`
  )
  const result = await response.json()
  return result
}

export const NestedApiServices = async (resource, objectProperty) => {
  const response = await ApiServices(resource)
  return response.data.flatMap((obj) => obj.entry)
}

export const reproduceData = (data, gap) => {
  const first = ~~(Math.random() * (data.length - gap) + 1)
  const second = first + gap

  const result = {
    data: data.slice(first, second),
  }

  return result
}
