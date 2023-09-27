import queryString from 'query-string';
import { ChefInterface, ChefGetQueryInterface } from 'interfaces/chef';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getChefs = async (query?: ChefGetQueryInterface): Promise<PaginatedInterface<ChefInterface>> => {
  return fetcher('/api/chefs', {}, query);
};

export const createChef = async (chef: ChefInterface) => {
  return fetcher('/api/chefs', { method: 'POST', body: JSON.stringify(chef) });
};

export const updateChefById = async (id: string, chef: ChefInterface) => {
  return fetcher(`/api/chefs/${id}`, { method: 'PUT', body: JSON.stringify(chef) });
};

export const getChefById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/chefs/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteChefById = async (id: string) => {
  return fetcher(`/api/chefs/${id}`, { method: 'DELETE' });
};
