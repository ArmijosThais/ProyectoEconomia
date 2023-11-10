import React, { useState } from 'react';
import '../styles/FormularioCredito.css';
//hola
const FormularioCredito = () => {
  const [formData, setFormData] = useState({
    requisitos: '',
    tasaDeInteres: '',
    plazos: '',
    montoMaximo: '',
    cobrosMinimos: '',
  });
  const [cobrosIndirectos, setCobrosIndirectos] = useState([
    {
      id: 1,
      name: 'Seguro',
      value: '360',
    },
    {
      id: 2,
      name: 'Caridad',
      value: '152',
    },
  ]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes manejar la lógica de envío del formulario
    console.log(formData);
  };

  return (
    <form className='formcredito' onSubmit={handleSubmit}>
      <h1>Datos del Crédito</h1>
      <label>
        <h3>Requisitos:</h3>
        <textarea name="requisitos" onChange={handleInputChange} />
      </label>
      <label>
        <h3>Interés</h3>
        Tasa de interés (%):
        <input
          type="number"
          step="0.01"
          name="tasaDeInteres"
          onChange={handleInputChange}
        />
      </label>
      <label>
        <h3>Plazos</h3>
        Plazo Máximo (número de meses):
        <input type="number" name="plazos" onChange={handleInputChange} />
      </label>
      <label>
        <h3>Montos</h3>
        Monto Máximo ($):
        <input
          type="number"
          step="0.01"
          name="montoMaximo"
          onChange={handleInputChange}
        />
        Monto Mínimo($):
        <input
          type="number"
          step="0.01"
          name="cobrosMinimos"
          onChange={handleInputChange}
        />
      </label>
      <label>
        <h3>Cobros Indirectos</h3>
        <div className="">
          {cobrosIndirectos.map((cobro) => {
           return (
             <div className="">
               <h4>{cobro.name}</h4>
               <input
                 type="number"
                 step="0.01"
                 name="cobrosMinimos"
               />
             </div>
           );
          })}
        </div>
      </label>
      <div className="row">
        <input type="submit" value="Guardar" />
        <button type="button">Cancelar</button>
      </div>
    </form>
  );
};

export default FormularioCredito;
