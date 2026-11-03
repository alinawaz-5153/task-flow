import React from 'react';
import { Layout, Plus, Sun, Moon } from 'lucide-react';

function Header({ onOpenModal, darkMode, setDarkMode }) {
  return (
    <header className={`flex flex-col sm:flex-row items-center justify-between p-6 rounded-2xl shadow-2xl mb-8 gap-4 transition-all duration-300 ${
      darkMode ? 'glass-dark text-white' : 'glass-light text-slate-900'
    }`}>
      <div className="flex items-center gap-4">
        <div className="p-3.5 bg-gradient-to-br from-indigo-600 to-violet-600 rounded-2xl text-white shadow-lg shadow-indigo-500/40">
          <Layout size={28} />
        </div>
        <div>
          <h1 className="text-2xl font-black tracking-wide bg-gradient-to-r from-indigo-500 to-violet-500 bg-clip-text text-transparent">TaskFlow</h1>
          <p className={`text-xs font-semibold ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
            Professional Productivity Management System
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3.5">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className={`p-3 rounded-xl transition-all duration-300 cursor-pointer shadow-lg active:scale-95 ${
            darkMode ? 'bg-slate-800 text-amber-400 hover:bg-slate-700 border border-slate-700' : 'bg-white text-indigo-600 hover:bg-slate-50 border border-slate-200'
          }`}
          title="Toggle Theme"
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>

        <button 
          onClick={onOpenModal}
          className="flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white px-6 py-3 rounded-xl font-bold text-sm transition-all duration-300 shadow-xl shadow-indigo-600/30 cursor-pointer active:scale-95 hover:scale-[1.02]"
        >
          <Plus size={18} />
          <span>Add New Task</span>
        </button>
      </div>
    </header>
  );
}

export default Header;