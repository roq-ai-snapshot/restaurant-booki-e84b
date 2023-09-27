interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: ['Guest'],
  tenantRoles: ['Owner', 'Chef', 'Waiter'],
  tenantName: 'Restaurant',
  applicationName: 'Restaurant booking engine',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['Read restaurant information', 'Read menus', 'Make a reservation', 'View reservation details'],
  ownerAbilities: ['Manage user information', 'Manage restaurant information', 'Manage reservations', 'Manage menus'],
  getQuoteUrl: 'https://app.roq.ai/proposal/d4f802a8-bd6c-4bbe-a30d-9d8a6c584c32',
};
