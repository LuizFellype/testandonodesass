import React from 'react'

// TO DO: memoize this function to increase performance
export const itemTemplate = (
  dataField = 'name',
  reduceFunc = (acc, item, idx) => {
    return `${acc}${idx === 0 ? '' : ', '}${item[dataField]}`
  }
) => (rowData, col) => {
  const infoConcat = (rowData[col.field] || []).reduce(reduceFunc, '')

  return <span>{infoConcat}</span>
}
