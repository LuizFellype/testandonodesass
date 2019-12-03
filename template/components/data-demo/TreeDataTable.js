import React, { useState, useEffect } from 'react'
import NodeService from '../../service/NodeService'

// Prime components
import { TreeTable } from 'primereact/treetable'
import { Column } from 'primereact/column'

const TreeDataTable = () => {
  const [documents, setDocuments] = useState([])
  const [documentsSelection, setDocumentsSelection] = useState(null)

  useEffect(() => {
    NodeService.getTreeTableNodes().then(files => setDocuments(files))
  }, [])

  return (
    <div className='card card-w-title'>
      <h1>TreeTable</h1>
      <TreeTable
        value={documents}
        header='Documents'
        selectionMode='single'
        selectionKeys={documentsSelection}
        onSelectionChange={({ value }) => setDocumentsSelection(value)}
      >
        <Column field='name' header='Name' expander />
        <Column field='size' header='Size' />
        <Column field='type' header='Type' />
      </TreeTable>
    </div>
  )
}

export default TreeDataTable
