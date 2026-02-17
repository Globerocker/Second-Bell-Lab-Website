import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SEO: React.FC<{ title?: string; description?: string }> = ({ title, description }) => {
    const { pathname } = useLocation();

    useEffect(() => {
        const defaultTitle = 'Second Bell Lab™ | Premium After-School Development';
        const defaultDesc = 'Elite after-school development for the next generation of leaders. Physical discipline, academic competence, social skill, and financial literacy.';
        const siteUrl = 'https://secondbelllab.com';
        const fullUrl = `${siteUrl}${pathname}`;

        document.title = title ? `${title} | Second Bell Lab™` : defaultTitle;

        // Helper to update or create meta tags
        const setMeta = (name: string, content: string, property = false) => {
            const attr = property ? 'property' : 'name';
            let element = document.querySelector(`meta[${attr}="${name}"]`);
            if (!element) {
                element = document.createElement('meta');
                element.setAttribute(attr, name);
                document.head.appendChild(element);
            }
            element.setAttribute('content', content);
        };

        setMeta('description', description || defaultDesc);

        // OpenGraph
        setMeta('og:title', title || defaultTitle, true);
        setMeta('og:description', description || defaultDesc, true);
        setMeta('og:url', fullUrl, true);
        setMeta('og:type', 'website', true);
        setMeta('og:image', `${siteUrl}/images/social-preview.png`, true);

        // Twitter
        setMeta('twitter:card', 'summary_large_image');
        setMeta('twitter:title', title || defaultTitle);
        setMeta('twitter:description', description || defaultDesc);
        setMeta('twitter:image', `${siteUrl}/images/social-preview.png`);

        // Canonical link
        let canonical = document.querySelector('link[rel="canonical"]');
        if (!canonical) {
            canonical = document.createElement('link');
            canonical.setAttribute('rel', 'canonical');
            document.head.appendChild(canonical);
        }
        canonical.setAttribute('href', fullUrl);

        // JSON-LD Structured Data for AI Engines
        let script = document.querySelector('script[type="application/ld+json"]');
        if (!script) {
            script = document.createElement('script');
            script.setAttribute('type', 'application/ld+json');
            document.head.appendChild(script);
        }

        const structuredData = {
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            "name": "Second Bell Lab",
            "url": siteUrl,
            "logo": `${siteUrl}/images/bell-icon.svg`,
            "description": defaultDesc,
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Phoenix",
                "addressRegion": "AZ",
                "addressCountry": "US"
            },
            "sameAs": [
                "https://www.linkedin.com/company/second-bell-lab",
                "https://www.instagram.com/secondbelllab"
            ]
        };
        script.textContent = JSON.stringify(structuredData);

    }, [title, description, pathname]);

    return null;
};

export default SEO;
