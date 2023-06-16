const mapping: Record<string, string> = {
  companies: 'company',
  leads: 'lead',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
