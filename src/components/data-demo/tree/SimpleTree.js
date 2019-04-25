import React, { useState, useEffect } from 'react'

// Services
import NodeService from '../../../service/NodeService'

// Prime Tree component
import { Tree } from 'primereact/tree'

const CustomTree = () => {
  const [treeData, setTreeData] = useState([])
  const [selectedFile, setSelectedFile] = useState(null)

  useEffect(() => {
    NodeService.getTreeNodes().then(nodes => setTreeData(nodes))
  }, [])

  return (
    <div className='p-col-12 p-md-6'>
      <h1>Tree</h1>
      <Tree
        value={treeData}
        selectionMode='single'
        selectionKeys={selectedFile}
        onSelectionChange={({ value }) => setSelectedFile(value)}
      />
    </div>
  )
}

export default CustomTree
