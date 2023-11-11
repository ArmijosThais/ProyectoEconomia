const API_URL = 'https://k1xnkgg6-3000.brs.devtunnels.ms/api/categorias';

export async function obtenerCategorias() {
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