const API_URL = 'https://k1xnkgg6-3000.brs.devtunnels.ms/api/subcategorias';

export async function obtenerSubategorias(idCategoria) {
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

export async function agregarSubcategoria(data) {
  try {
    const respuesta = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!respuesta.ok) {
      throw new Error(`Error al agregar subcategoría: ${respuesta.statusText}`);
    }

    return await respuesta.json();
  } catch (error) {
    console.error('Error:', error.message);
  }
}

export async function actualizarSubcategoria(idSubcategoria, data) {
  try {
    const respuesta = await fetch(`${API_URL}/${idSubcategoria}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!respuesta.ok) {
      throw new Error(
        `Error al actualizar subcategoría: ${respuesta.statusText}`
      );
    }

    return await respuesta.json();
  } catch (error) {
    console.error('Error:', error.message);
  }
}

export async function eliminarSubcategoria(idSubcategoria) {
  try {
    const respuesta = await fetch(`${API_URL}/${idSubcategoria}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!respuesta.ok) {
      throw new Error(
        `Error al eliminar subcategoría: ${respuesta.statusText}`
      );
    }

    return await respuesta.json();
  } catch (error) {
    console.error('Error:', error.message);
  }
}
