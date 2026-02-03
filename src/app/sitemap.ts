import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://seminarionacionalcp.com.br'; // Using placeholder domain, needs to be updated with production domain

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
        },
        // Add other routes here if necessary, e.g., /politica-de-privacidade
        // {
        //   url: `${baseUrl}/politica-de-privacidade`,
        //   lastModified: new Date(),
        //   changeFrequency: 'monthly',
        //   priority: 0.5,
        // },
    ];
}
