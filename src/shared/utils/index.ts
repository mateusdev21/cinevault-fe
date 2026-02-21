export function currencyFormatter(amount: number, currency: string): string {
    const formatted = amount
        .toFixed(0)
        .replace(/\B(?=(\d{3})+(?!\d))/g, ".");

    return `${currency} ${formatted}`;
}