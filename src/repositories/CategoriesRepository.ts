import BASE_URL from '../config';
import { CategoriasInterface } from '../types/video';

export const getCategoriesFull = (): Promise<[]> => {
  const getData = async () => {
    const response = await fetch(`${BASE_URL}/categorias?_embed=videos`);
    return response.json();
  };
  return getData();
};

export const getCategories = (): Promise<[]> => {
  const getData = async () => {
    const response = await fetch(`${BASE_URL}/categorias`);
    return response.json();
  };
  return getData();
};

export const create = (
  categoryData: Omit<CategoriasInterface, 'id'>,
): Promise<boolean> => {
  const postData = async () => {
    const response = await fetch(`${BASE_URL}/categorias`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(categoryData),
    });
    return response.ok;
  };
  return postData();
};
