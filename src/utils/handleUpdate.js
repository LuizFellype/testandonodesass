export const handleUpdate = (
  data,
  setData,
  updateRealData
) => classToUpdate => {
  const classesCopy = [...data]

  const dataUpdated = data.map(unitData =>
    unitData.id === classToUpdate.id ? classToUpdate : unitData
  )
  setData(dataUpdated)
  updateRealData(classToUpdate)
    .then(() => null)
    .catch(error => {
      console.log('To do: Show some error', error)
      setData(classesCopy)
    })
}
