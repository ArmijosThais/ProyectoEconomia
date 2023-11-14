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

export async function obtenerCategoria(idCategoria) {
  try {
    const respuesta = await fetch(`${API_URL}/${idCategoria}`, {
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

export async function agregarCategoria(data) {
  try {
    const respuesta = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!respuesta.ok) {
      throw new Error(`Error al agregar categoría: ${respuesta.statusText}`);
    }

    return await respuesta.json();
  } catch (error) {
    console.error('Error:', error.message);
  }
}

export async function actualizarCategoria(idCategoria, data) {
  try {
    const respuesta = await fetch(`${API_URL}/${idCategoria}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!respuesta.ok) {
      throw new Error(`Error al actualizar categoría: ${respuesta.statusText}`);
    }

    return await respuesta.json();
  } catch (error) {
    console.error('Error:', error.message);
  }
}

export async function eliminarCategoria(idCategoria) {
  try {
    const respuesta = await fetch(`${API_URL}/${idCategoria}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!respuesta.ok) {
      throw new Error(`Error al eliminar categoría: ${respuesta.statusText}`);
    }

    return await respuesta.json();
  } catch (error) {
    console.error('Error:', error.message);
  }
}
