import React, { useEffect, useState } from 'react';

const SplashScreen: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
    const [isExiting, setIsExiting] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsExiting(true);
            setTimeout(onComplete, 800); // Wait for exit animation
        }, 2000);

        return () => clearTimeout(timer);
    }, [onComplete]);

    return (
        <div className={`fixed inset-0 z-[9999] flex items-center justify-center bg-brand-navy transition-transform duration-700 ease-in-out ${isExiting ? '-translate-y-full' : 'translate-y-0'}`}>
            <div className="relative flex flex-col items-center">
                {/* Animated Glow */}
                <div className="absolute inset-0 bg-brand-gold blur-3xl opacity-20 animate-pulse-slow"></div>

                {/* Logo Container */}
                <div className="relative animate-fade-up">
                    <img
                        src="/images/bell-icon.png"
                        alt="Second Bell Lab"
                        className="w-32 h-32 md:w-48 md:h-48 drop-shadow-[0_0_50px_rgba(251,191,36,0.3)]"
                    />
                </div>

                {/* Text Reveal */}
                <div className="mt-8 overflow-hidden">
                    <h1 className="text-2xl md:text-3xl font-heading font-black text-white uppercase tracking-[0.3em] animate-fade-up delay-200">
                        Second Bell <span className="text-brand-gold">Lab</span>
                    </h1>
                </div>

                {/* Loading Bar */}
                <div className="mt-6 w-48 h-1 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-brand-gold animate-[loading_2s_ease-in-out_infinite]"></div>
                </div>
            </div>

            <style>{`
        @keyframes loading {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
        </div>
    );
};

export default SplashScreen;
