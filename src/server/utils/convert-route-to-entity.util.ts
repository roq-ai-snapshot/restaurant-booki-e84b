const mapping: Record<string, string> = {
  chefs: 'chef',
  menus: 'menu',
  reservations: 'reservation',
  restaurants: 'restaurant',
  users: 'user',
  waiters: 'waiter',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
