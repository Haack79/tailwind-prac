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

    try {
      const response = await fetch('https://api.example.com/upload', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Upload failed');
      }

      const reader = response.body.getReader();
      const contentLength = +response.headers.get('Content-Length');

      let receivedLength = 0;
      while (true) {
        const { done, value } = await reader.read();

        if (done) {
          break;
        }

        receivedLength += value.length;

        const percentComplete = Math.round((receivedLength * 100) / contentLength);
        setUploadProgress((prevProgress) => ({
          ...prevProgress,
          [selectedFiles[0].name]: percentComplete,
        }));
      }

      console.log('Upload complete');
    } catch (error) {
      console.error(error);
    } finally {
      setUploading(false);
    }
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
