import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SEO: React.FC<{ title?: string; description?: string }> = ({ title, description }) => {
    const { pathname } = useLocation();

    useEffect(() => {
        const defaultTitle = 'Second Bell Lab™ | Premium After-School Development';
        const defaultDesc = 'Elite after-school development for the next generation of leaders. Physical discipline, academic competence, social skill, and financial literacy.';

        document.title = title ? `${title} | Second Bell Lab™` : defaultTitle;

        let metaDesc = document.querySelector('meta[name="description"]');
        if (!metaDesc) {
            metaDesc = document.createElement('meta');
            metaDesc.setAttribute('name', 'description');
            document.head.appendChild(metaDesc);
        }
        metaDesc.setAttribute('content', description || defaultDesc);

        // Canonical link
        let canonical = document.querySelector('link[rel="canonical"]');
        if (!canonical) {
            canonical = document.createElement('link');
            canonical.setAttribute('rel', 'canonical');
            document.head.appendChild(canonical);
        }
        canonical.setAttribute('href', `https://secondbelllab.com${pathname}`);

    }, [title, description, pathname]);

    return null;
};

export default SEO;
