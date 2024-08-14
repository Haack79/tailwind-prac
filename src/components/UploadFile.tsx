import React, { useState } from 'react';

function FileUpload() {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [uploadProgress, setUploadProgress] = useState({});
  const [uploading, setUploading] = useState(false);

  const handleFileSelect = (e) => {
    setSelectedFiles(e.target.files);
  };

  const handleUpload = async () => {
    setUploading(true);
    const formData = new FormData();

    for (let i = 0; i < selectedFiles.length; i++) {
      formData.append('files', selectedFiles[i]);
    }

    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://api.example.com/upload', true);

    xhr.upload.onprogress = (event) => {
      if (event.lengthComputable) {
        const percentComplete = Math.round((event.loaded * 100) / event.total);
        setUploadProgress({ ...uploadProgress, [selectedFiles[0].name]: percentComplete });
      }
    };

    xhr.onload = () => {
      if (xhr.status === 200) {
        console.log('Upload complete');
      } else {
        console.error('Upload failed');
      }
      setUploading(false);
    };

    xhr.send(formData);
  };

  return (
    <div>
      <input type="file" multiple onChange={handleFileSelect} />
      <button onClick={handleUpload} disabled={uploading}>Upload</button>
      <ul>
        {Array.from(selectedFiles).map((file) => (
          <li key={file.name}>
            {file.name} - {uploadProgress[file.name] || 0}%
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FileUpload;
