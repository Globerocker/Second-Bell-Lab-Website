import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Analytics Component
 * Handles Hotjar (Engagement) and Google Ads (Conversion) tracking infrastructure.
 * Swappable placeholders for IDs.
 */
const Analytics: React.FC = () => {
    const location = useLocation();

    // IDs (Placeholders for USER to swap in)
    const HOTJAR_ID = ''; // Enter Hotjar Site ID here
    const GADS_ID = '';   // Enter Google Ads conversion ID here

    useEffect(() => {
        // --- Hotjar Tracking Code ---
        if (HOTJAR_ID) {
            (function (h: any, o: any, t: any, j: any, a?: any, r?: any) {
                h.hj = h.hj || function () { (h.hj.q = h.hj.q || []).push(arguments) };
                h._hjSettings = { hjid: HOTJAR_ID, hjsv: 6 };
                a = o.getElementsByTagName('head')[0];
                r = o.createElement('script'); r.async = 1;
                r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
                a.appendChild(r);
            })(window, document, 'https://static.hotjar.com/c/hotjar-', '.js?sv=');
        }

        // --- Google Ads (Global Site Tag) ---
        if (GADS_ID) {
            const script = document.createElement('script');
            script.async = true;
            script.src = `https://www.googletagmanager.com/gtag/js?id=${GADS_ID}`;
            document.head.appendChild(script);

            const inlineScript = document.createElement('script');
            inlineScript.textContent = `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GADS_ID}');
            `;
            document.head.appendChild(inlineScript);
        }
    }, [HOTJAR_ID, GADS_ID]);

    useEffect(() => {
        // Track page views on route change (for GAds)
        if (typeof (window as any).gtag === 'function' && GADS_ID) {
            (window as any).gtag('event', 'page_view', {
                page_path: location.pathname,
            });
        }
    }, [location, GADS_ID]);

    return null;
};

export default Analytics;
