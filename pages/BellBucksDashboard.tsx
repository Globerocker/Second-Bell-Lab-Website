import React, { useState } from 'react';

const BellBucksDashboard: React.FC = () => {
    const [balance, setBalance] = useState(1250);
    const [transactions, setTransactions] = useState([
        { id: 1, type: 'credit', amount: 200, label: 'Leadership Role: Study Group Lead', date: 'Today' },
        { id: 2, type: 'debit', amount: 50, label: 'Workspace Rent: Weekly', date: 'Yesterday' },
        { id: 3, type: 'credit', amount: 150, label: 'Asset Completion: Research Paper', date: '2 days ago' },
        { id: 4, type: 'debit', amount: 20, label: 'Premium Resource: Lab Equipment Fee', date: '3 days ago' },
    ]);

    return (
        <div className="min-h-screen bg-brand-navy p-6 pt-24 text-white">
            <div className="max-w-md mx-auto space-y-8">
                {/* Header */}
                <div className="flex justify-between items-center">
                    <div>
                        <h1 className="text-2xl font-black uppercase tracking-tighter">Student Portal</h1>
                        <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Marcus Thorne • Pillar Omega</p>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-brand-gold flex items-center justify-center text-brand-navy font-black relative group cursor-pointer">
                        MT
                        <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-white rounded-full flex items-center justify-center border-2 border-brand-navy">
                            <i className="fa-solid fa-plus text-[8px] text-brand-navy"></i>
                        </div>
                        <span className="absolute top-full mt-2 right-0 bg-white text-brand-navy text-[8px] font-black px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">Add to Home Screen</span>
                    </div>
                </div>

                {/* Balance Card */}
                <div className="relative overflow-hidden bg-white/5 border border-white/10 rounded-[2rem] p-8 shadow-2xl">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                    <div className="relative z-10">
                        <p className="text-xs font-black text-brand-gold uppercase tracking-[0.3em] mb-2">Total Balance</p>
                        <div className="flex items-baseline gap-2">
                            <span className="text-5xl font-black uppercase tracking-tighter">{balance}</span>
                            <span className="text-brand-gold font-bold text-sm tracking-widest italic">BELL BUCKS</span>
                        </div>
                        <div className="mt-6 flex gap-4">
                            <button className="flex-1 py-3 bg-brand-gold text-brand-navy font-black text-[10px] uppercase tracking-widest rounded-xl hover:scale-105 transition-transform active:scale-95 shadow-lg">
                                Redeem Reward
                            </button>
                            <button className="flex-1 py-3 bg-white/10 text-white border border-white/20 font-black text-[10px] uppercase tracking-widest rounded-xl hover:bg-white/20 transition-all active:scale-95">
                                Investment Hub
                            </button>
                        </div>
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/5 border border-white/10 p-5 rounded-2xl">
                        <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Weekly Rank</p>
                        <p className="text-xl font-black text-white">#4 <span className="text-xs text-brand-gold italic">in Lab</span></p>
                    </div>
                    <div className="bg-white/5 border border-white/10 p-5 rounded-2xl">
                        <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Leadership Score</p>
                        <p className="text-xl font-black text-white">92/100</p>
                    </div>
                </div>

                {/* Transaction History */}
                <div className="space-y-4">
                    <div className="flex justify-between items-center px-2">
                        <h2 className="text-xs font-black uppercase tracking-[0.3em]">Ledger History</h2>
                        <button className="text-[10px] font-bold text-brand-gold uppercase tracking-widest hover:underline">View All</button>
                    </div>

                    <div className="space-y-3">
                        {transactions.map(t => (
                            <div key={t.id} className="flex items-center justify-between p-4 bg-white/5 border border-white/5 rounded-2xl group hover:border-white/20 transition-all">
                                <div className="flex items-center gap-4">
                                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-sm ${t.type === 'credit' ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500'}`}>
                                        <i className={`fa-solid ${t.type === 'credit' ? 'fa-arrow-trend-up' : 'fa-arrow-trend-down'}`}></i>
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-black uppercase text-white tracking-tight leading-none mb-1">{t.label}</p>
                                        <p className="text-[10px] font-medium text-slate-500 uppercase tracking-widest">{t.date}</p>
                                    </div>
                                </div>
                                <p className={`text-sm font-black ${t.type === 'credit' ? 'text-green-500' : 'text-slate-300'}`}>
                                    {t.type === 'credit' ? '+' : '-'}{t.amount}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* "The Village" Alert */}
                <div className="p-6 bg-brand-gold/5 border border-brand-gold/10 rounded-3xl">
                    <div className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-full bg-brand-gold flex items-center justify-center text-brand-navy text-xs flex-shrink-0 animate-pulse">
                            <i className="fa-solid fa-bell"></i>
                        </div>
                        <div className="space-y-1">
                            <p className="text-[10px] font-black uppercase text-brand-gold tracking-[0.2em]">Strategy Session Alert</p>
                            <p className="text-xs text-slate-300 leading-relaxed font-medium">
                                Your quarterly parent-mentor strategy session is scheduled for <span className="text-white font-bold">Friday at 5:30 PM</span>.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BellBucksDashboard;
