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

