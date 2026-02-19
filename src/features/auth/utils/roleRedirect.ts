export const getDefaultRouteByRole = (role: string): string => {
    const roleMap: Record<string, string> = {
        admin: '/admin/dashboard',
        customer: '/dashboard',
    }

    return roleMap[role] || '/'
}
