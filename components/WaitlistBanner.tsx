import React from 'react';
import { Link } from 'react-router-dom';

const WaitlistBanner: React.FC = () => {
    return (
        <div className="bg-brand-gold text-brand-navy py-3 px-4 relative overflow-hidden group">
            <div className="absolute inset-0 bg-white/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-1000"></div>
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-4 text-center">
                <div className="flex items-center gap-2">
                    <span className="bg-brand-navy text-white text-[10px] font-black px-2 py-0.5 rounded uppercase tracking-tighter">Limited Offer</span>
                    <p className="text-sm font-black uppercase tracking-tight">
                        Join the Founding Waitlist: <span className="opacity-70">Get a</span> Free Day Pass <span className="opacity-70">&</span> 10% Off Life Membership
                    </p>
                </div>
                <Link
                    to="/apply"
                    className="bg-brand-navy text-white text-[10px] font-black px-6 py-2 rounded-full hover:bg-white hover:text-brand-navy transition-all uppercase tracking-widest shadow-xl active:scale-95"
                >
                    Secure Your Spot
                </Link>
            </div>
        </div>
    );
};

export default WaitlistBanner;
