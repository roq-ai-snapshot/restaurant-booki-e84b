import queryString from 'query-string';
import { WaiterInterface, WaiterGetQueryInterface } from 'interfaces/waiter';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getWaiters = async (query?: WaiterGetQueryInterface): Promise<PaginatedInterface<WaiterInterface>> => {
  return fetcher('/api/waiters', {}, query);
};

export const createWaiter = async (waiter: WaiterInterface) => {
  return fetcher('/api/waiters', { method: 'POST', body: JSON.stringify(waiter) });
};

export const updateWaiterById = async (id: string, waiter: WaiterInterface) => {
  return fetcher(`/api/waiters/${id}`, { method: 'PUT', body: JSON.stringify(waiter) });
};

export const getWaiterById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/waiters/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteWaiterById = async (id: string) => {
  return fetcher(`/api/waiters/${id}`, { method: 'DELETE' });
};
