import React from 'react';
import axios from 'axios';
import ServerData from '../utility/InitApierverData';

const Download = () => {
  const handleDownload = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:5000/download', {
        responseType: 'blob', // Important for binary data
      });
      console.log(response);
      
      
      const formData = new FormData();
      formData.append('file', response.data, 'spreadsheet.xlsx');
      formData.append('name', `ayham`, );

      const uploadResponse = await axios.post('http://127.0.0.1:4001/savefile', formData, {
        headers: {
          'Content-Type': 'multipart/form-data', // Ensure the correct content type
        },
      });
      console.log(uploadResponse);

      const bufferData = uploadResponse.data.file;

      // Convert the buffer to a Blob
      const byteArray = new Uint8Array(bufferData.data);
      const blob = new Blob([byteArray], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });

      // Create a link to download the Blob
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'downloaded_file.xlsx'); // Specify the file name
      document.body.appendChild(link);
      link.click();
      link.remove(); // Clean up the link element
      window.URL.revokeObjectURL(url)

      
    } catch (error) {
      console.error('Error downloading the file', error);
    }
  };

  return (
    <div>
      <button onClick={handleDownload}>Download Excel File</button>
    </div>
  );
};

export default Download;
