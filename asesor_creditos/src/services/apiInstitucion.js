const API_URL = 'https://k1xnkgg6-3000.brs.devtunnels.ms/api/institucion';

export async function obtenerInstitucion() {
  try {
    const respuesta = await fetch(API_URL, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return await respuesta.json();
  } catch (error) {
    console.error('Error:', error);
  }
}

export async function actualizarInstitucion(idInstitucion, data) {
  try {
    const respuesta = await fetch(`${API_URL}/${idInstitucion}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!respuesta.ok) {
      throw new Error(
        `Error al actualizar la institución: ${respuesta.statusText}`
      );
    }

    return await respuesta.json();
  } catch (error) {
    console.error('Error:', error.message);
  }
}
