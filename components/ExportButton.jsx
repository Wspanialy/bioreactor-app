const ExportButton = () => {
  
  const handleExport = (e) => {
      e.preventDefault();

      fetch('http://192.168.0.164:5000/download')
      .then(response => response.blob())
      .then(blob => {
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'data.xlsx');
        document.body.appendChild(link);
        link.click();
      })
      .catch(error => console.error('Error downloading file:', error));
  };

  return (
      <button className="export-button" onClick={handleExport}>Export data</button>
  );
}

export default ExportButton;
