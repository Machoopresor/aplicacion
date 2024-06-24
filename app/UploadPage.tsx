import React, { useState } from 'react';
import './SubirArch.css';

const UploadPage = () => {
  const [selectedSubject, setSelectedSubject] = useState('');
  const [selectedTopic, setSelectedTopic] = useState('');
  const [fileType, setFileType] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Lógica para manejar el formulario
    console.log({ selectedSubject, selectedTopic, fileType });
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <label>
          Elige la materia:
          <select 
            value={selectedSubject} 
            onChange={(e) => setSelectedSubject(e.target.value)} 
            required
          >
            <option value="" disabled>Materia</option>
            <option value="Materia 1">Materia 1</option>
            <option value="Materia 2">Materia 2</option>
            <option value="Materia 3">Materia 3</option>
          </select>
        </label>
        <label>
          Elige el tema:
          <select 
            value={selectedTopic} 
            onChange={(e) => setSelectedTopic(e.target.value)} 
            required
          >
            <option value="" disabled>Tema</option>
            <option value="Tema 1">Tema 1</option>
            <option value="Tema 2">Tema 2</option>
            <option value="Tema 3">Tema 3</option>
          </select>
        </label>
        <fieldset>
          <legend>Escoge el tipo de archivo (obligatorio)</legend>
          <label>
            <input 
              type="radio" 
              value="PDF" 
              checked={fileType === 'PDF'} 
              onChange={(e) => setFileType(e.target.value)} 
              required 
            />
            PDF
          </label>
          <label>
            <input 
              type="radio" 
              value="Imagen" 
              checked={fileType === 'Imagen'} 
              onChange={(e) => setFileType(e.target.value)} 
              required 
            />
            Imagen
          </label>
          <label>
            <input 
              type="radio" 
              value="Codigo QR" 
              checked={fileType === 'Codigo QR'} 
              onChange={(e) => setFileType(e.target.value)} 
              required 
            />
            Codigo QR
          </label>
          <label>
            <input 
              type="radio" 
              value="Enlace" 
              checked={fileType === 'Enlace'} 
              onChange={(e) => setFileType(e.target.value)} 
              required 
            />
            Enlace
          </label>
        </fieldset>
        <button type="submit">Subir archivo</button>
      </form>
    </div>
  );
};

export default UploadPage;
