import BASE_URL from '../config';
import { CategoriasInterface } from '../types/video';

export const getCategoriesFull = async (): Promise<[]> => {
  const response = await fetch(`${BASE_URL}/categorias?_embed=videos`);
  return response.json();
};

export const getCategories = async (): Promise<[]> => {
  const response = await fetch(`${BASE_URL}/categorias`);
  return response.json();
};

export const create = async (
  categoryData: Omit<CategoriasInterface, 'id'>,
): Promise<boolean> => {
  const response = await fetch(`${BASE_URL}/categorias`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(categoryData),
  });
  return response.ok;
};
