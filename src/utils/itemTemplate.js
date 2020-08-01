import React from 'react'

export const itemTemplate = (dataField = 'name') => (rowData, col) => {
  const infoConcat = rowData[col.field].reduce((acc, item, idx) => {
    return `${acc}${idx === 0 ? '' : ', '}${item[dataField]}`
  }, '')

  return <span>{infoConcat}</span>
}
