export const getDefaultRouteByRole = (role: string): string => {
    const roleMap: Record<string, string> = {
        admin: '/admin',
        customer: '/',
    }

    return roleMap[role] || '/'
}
