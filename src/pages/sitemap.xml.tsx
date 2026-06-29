import { GetServerSideProps } from 'next';
import { getAllCityPaths, getAllLocalitySEOPaths } from '@/data/locations.data';
import { getAllBlogPostSlugs } from '@/data/blog.data';
import { servicesData } from '@/data/services.data';

function generateSiteMap() {
    const baseUrl = 'https://globerelo.in';

    // Static pages
    const staticPages = [
        '',
        '/about',
        '/services',
        '/locations',
        '/contact',
        '/quote',
        '/how-it-works',
        '/testimonials',
        '/privacy',
        '/terms',
        '/disclaimer',
        '/sitemap-page',
    ];

    // Get all service pages
    const servicePages = servicesData.map(service => `/services/${service.slug}`);

    // Get all city pages with SEO-friendly URLs
    const cityPages = getAllCityPaths().map(slug => `/${slug}`);

    // Get all locality pages with SEO-friendly URLs
    const localityPages = getAllLocalitySEOPaths().map(slug => `/${slug}`);

    // Get all blog pages
    const blogPages = getAllBlogPostSlugs().map(slug => `/blog/${slug}`);
    blogPages.push('/blog');

    // Combine all pages
    const allPages = [...staticPages, ...servicePages, ...cityPages, ...localityPages, ...blogPages];

    return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allPages
            .map((page) => {
                const url = `${baseUrl}${page}`;
                const priority = page === '' ? '1.0' :
                    page.startsWith('/blog/') ? '0.8' :
                    page.startsWith('/packers-and-movers-') && !page.includes('-', 20) ? '0.9' :
                        page.startsWith('/packers-and-movers-') ? '0.8' : '0.7';
                const changefreq = page === '' ? 'daily' :
                    page.startsWith('/blog/') ? 'weekly' :
                    page.startsWith('/packers-and-movers-') ? 'weekly' : 'monthly';

                return `
  <url>
    <loc>${url}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
            })
            .join('')}
</urlset>`;
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
    const sitemap = generateSiteMap();

    res.setHeader('Content-Type', 'text/xml');
    res.write(sitemap);
    res.end();

    return {
        props: {},
    };
};

export default function SiteMap() {
    return null;
}

