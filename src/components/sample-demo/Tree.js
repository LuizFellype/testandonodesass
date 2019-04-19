import React, { useState, useEffect } from 'react'

// Services
import NodeService from '../../service/NodeService'

// Prime Tree component
import { Tree } from 'primereact/tree'

const CustomTree = () => {
  const [treeData, setTreeData] = useState([])
  const [selectedNodeKey, setSelectedNodeKey] = useState(null)

  useEffect(() => {
    NodeService.getTreeNodes().then(nodes => setTreeData(nodes))
  }, [])

  return (
    <div className='card card-w-title'>
      <h1>Tree</h1>
      <Tree
        value={treeData}
        selectionMode='single'
        selectionKeys={selectedNodeKey}
        onSelectionChange={({ value }) => setSelectedNodeKey(value)}
      />
    </div>
  )
}

export default CustomTree
