import React from 'react'
import { AutoComplete } from 'primereact/autocomplete'

const itemTemplate = name => {
  return <span>{name}</span>
}

const includes = query => item => {
  return item.toLowerCase().includes(query.toLowerCase())
}

const filter = ([options, setState]) => event => {
  let results

  if (event.query.length === 0) {
    results = [...options]
  } else {
    results = options.filter(includes(event.query))
  }

  setState(results)
}

export const useAutocomplete = props => {
  const {
    id = 'Data',
    ph = 'Selecione uma opção',
    autoCompleteData = {}
  } = props

  const [data, setData] = React.useState([])
  const [filteredData, setFilteredData] = React.useState(data)
  const [selectedData, setSelectedData] = React.useState([])

  const dataNames = React.useMemo(() => data.map(({ name }) => name), [data])

  const _autoCompleteDate = React.useMemo(
    () => ({
      multiple: true,
      dropdown: true,
      ...autoCompleteData
    }),
    [autoCompleteData]
  )

  return {
    data: {
      [`${id}`]: data,
      [`set${id}`]: setData,
      [`filtered${id}`]: filteredData,
      [`setFiltered${id}`]: setFilteredData,
      [`selected${id}`]: selectedData,
      [`setSelected${id}`]: setSelectedData,
      [`${id}Names`]: dataNames
    },
    Autocomplete: (
      <AutoComplete
        value={selectedData}
        suggestions={filteredData}
        completeMethod={filter([dataNames, setFilteredData])}
        placeholder={ph}
        itemTemplate={itemTemplate}
        onChange={e => setSelectedData(e.value)}
        {..._autoCompleteDate}
      />
    )
  }
}
