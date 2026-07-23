'use server';

import { revalidatePath } from 'next/cache';

export async function refreshData() {
  // Simula una operación asíncrona (ej. actualizar un cache)
  await new Promise(resolve => setTimeout(resolve, 1500)); // Espera 1.5s para simular trabajo
  revalidatePath('/dashboard'); // Revalida la ruta para obtener datos frescos
  return { success: true, message: 'Datos actualizados correctamente' };
}