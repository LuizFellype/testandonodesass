import React, { useRef } from 'react'

// Prime components
import { FileUpload } from 'primereact/fileupload'
import { Growl } from 'primereact/growl'

const Upload = () => {
  const growl = useRef(null)

  const onUpload = () => {
    growl.current.show({
      severity: 'info',
      summary: 'Success',
      detail: 'File Uploaded'
    })
  }

  return (
    <div className='card'>
      <h1>Upload</h1>
      <Growl ref={growl} />

      <FileUpload
        name='demo[]'
        url='./upload.php'
        onUpload={onUpload}
        multiple
        accept='image/*'
        maxFileSize={1000000}
      />
    </div>
  )
}

export default Upload
