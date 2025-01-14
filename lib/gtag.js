export const GA_TRACKING_ID = 'G-K5N3K0CYY7';

// Fungsi untuk melaporkan page view
export const pageview = (url) => {
    window.gtag('config', GA_TRACKING_ID, {
        page_path: url,
    });
};