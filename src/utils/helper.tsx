export function currencyFormatter(amount: number, currency = "INR") {
    const formatter = new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: currency,
        minimumFractionDigits: 0
    });
    const result = formatter.format(amount);
    return result;
}

// Utility function to get the site URL with fallback
export const getSiteUrl = (): string => {
  return process.env.NEXT_PUBLIC_SITE_URL || 'https://drsomaplasticsurgery.com';
};

// Utility function to get full URL for a path
export const getFullUrl = (path: string): string => {
  const siteUrl = getSiteUrl();
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${siteUrl}${cleanPath}`;
};