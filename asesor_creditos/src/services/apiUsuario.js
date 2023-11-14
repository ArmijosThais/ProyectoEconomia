const API_URL = 'https://k1xnkgg6-3000.brs.devtunnels.ms/api/iniciarSesion';

export async function iniciarSesion(data) {
  try {
    const respuesta = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!respuesta.ok) {
      throw new Error(`Error al iniciar sesión: ${respuesta.statusText}`);
    }

    return await respuesta.json();
  } catch (error) {
    console.error('Error:', error.message);
  }
}

export async function obtenerUsuario() {
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

export async function actualizarUsuario(idUsuario, data) {
  try {
    const respuesta = await fetch(`${API_URL}/${idUsuario}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!respuesta.ok) {
      throw new Error(
        `Error al actualizar el usuario: ${respuesta.statusText}`
      );
    }

    return await respuesta.json();
  } catch (error) {
    console.error('Error:', error.message);
  }
}
