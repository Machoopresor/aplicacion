import React, { useState } from 'react';
import './SubirArch.css';

const AddPage = () => {
  const [subject, setSubject] = useState('');
  const [topic, setTopic] = useState('');
  const [fileType, setFileType] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Lógica para manejar el formulario
    console.log({ subject, topic, fileType });
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <label>
          Introducir nombre de materia (obligatorio):
          <input 
            type="text" 
            value={subject} 
            onChange={(e) => setSubject(e.target.value)} 
            required 
            placeholder="Materia" 
          />
        </label>
        <label>
          Introducir nombre del tema (obligatorio):
          <input 
            type="text" 
            value={topic} 
            onChange={(e) => setTopic(e.target.value)} 
            required 
            placeholder="Tema" 
          />
        </label>
        <fieldset>
          <legend>Escoge el tipo de archivo (Opcional)</legend>
          <label>
            <input 
              type="radio" 
              value="PDF" 
              checked={fileType === 'PDF'} 
              onChange={(e) => setFileType(e.target.value)} 
            />
            PDF
          </label>
          <label>
            <input 
              type="radio" 
              value="Imagen" 
              checked={fileType === 'Imagen'} 
              onChange={(e) => setFileType(e.target.value)} 
            />
            Imagen
          </label>
          <label>
            <input 
              type="radio" 
              value="Codigo QR" 
              checked={fileType === 'Codigo QR'} 
              onChange={(e) => setFileType(e.target.value)} 
            />
            Codigo QR
          </label>
          <label>
            <input 
              type="radio" 
              value="Enlace" 
              checked={fileType === 'Enlace'} 
              onChange={(e) => setFileType(e.target.value)} 
            />
            Enlace
          </label>
        </fieldset>
        <button type="submit">Subir</button>
      </form>
    </div>
  );
};

export default AddPage;
