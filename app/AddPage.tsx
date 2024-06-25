import React, { useState } from 'react';
import './SubirArch.css';

const AddPage = () => {
  const [isAddingSubject, setIsAddingSubject] = useState(true);

  return (
    <div className="form-container">
      <div className="radio-buttons">
        <label>
          <input
            type="radio"
            value="addSubject"
            checked={isAddingSubject}
            onChange={() => setIsAddingSubject(true)}
          />
          Agregar materia con tema
        </label>
        <label>
          <input
            type="radio"
            value="addTopic"
            checked={!isAddingSubject}
            onChange={() => setIsAddingSubject(false)}
          />
          Agregar tema a materia existente
        </label>
      </div>

      {isAddingSubject ? (
        <form>
          <label>
            Introducir nombre de materia (obligatorio):
            <input 
              type="text" 
              placeholder="Materia" 
            />
          </label>
          <label>
            Introducir nombre del tema (obligatorio):
            <input 
              type="text" 
              placeholder="Tema" 
            />
          </label>
          <button type="submit">Subir</button>
        </form>
      ) : (
        <form>
          <label>
            Seleccionar materia existente:
            <select>
              <option value="" disabled>Seleccionar materia</option>
              <option value="Matematicas">Matemáticas</option>
              <option value="Ciencias">Ciencias</option>
              <option value="Historia">Historia</option>
            </select>
          </label>
          <label>
            Introducir nombre del tema (obligatorio):
            <input 
              type="text" 
              placeholder="Tema" 
            />
          </label>
          <button type="submit">Subir</button>
        </form>
      )}
    </div>
  );
};

export default AddPage;
