import React, { useState } from 'react';
import { X } from 'lucide-react';

function TaskModal({ isOpen, onClose, onAddTask, darkMode }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('Medium');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    onAddTask({
      id: Date.now().toString(),
      title,
      description,
      priority,
      status: 'todo',
    });

    setTitle('');
    setDescription('');
    setPriority('Medium');
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50 p-4 animate-fadeIn">
      <div className={`border rounded-2xl w-full max-w-md p-6 shadow-2xl transition-all duration-300 ${
        darkMode ? 'bg-slate-900 border-slate-700 text-white shadow-indigo-950/50' : 'bg-white border-slate-200 text-slate-900 shadow-2xl'
      }`}>
        <div className={`flex items-center justify-between pb-4 mb-5 border-b ${darkMode ? 'border-slate-800' : 'border-slate-100'}`}>
          <h2 className="text-lg font-black">Create New Task</h2>
          <button 
            onClick={onClose}
            className="text-slate-400 hover:text-white transition cursor-pointer p-1 rounded-lg hover:bg-slate-800"
          >
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className={`block text-xs font-bold uppercase tracking-wider mb-2 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
              Task Title
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g., Portfolio Website Architecture"
              className={`w-full border rounded-xl px-4 py-3 text-sm font-medium focus:outline-none focus:border-indigo-500 transition ${
                darkMode ? 'bg-slate-800/80 border-slate-700 text-white' : 'bg-slate-50 border-slate-200 text-slate-900'
              }`}
              required
            />
          </div>

          <div>
            <label className={`block text-xs font-bold uppercase tracking-wider mb-2 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
              Description
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter task details here..."
              rows="3"
              className={`w-full border rounded-xl px-4 py-3 text-sm font-medium focus:outline-none focus:border-indigo-500 transition resize-none ${
                darkMode ? 'bg-slate-800/80 border-slate-700 text-white' : 'bg-slate-50 border-slate-200 text-slate-900'
              }`}
            ></textarea>
          </div>

          <div>
            <label className={`block text-xs font-bold uppercase tracking-wider mb-2 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
              Priority Level
            </label>
            <select
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
              className={`w-full border rounded-xl px-4 py-3 text-sm font-medium focus:outline-none focus:border-indigo-500 transition ${
                darkMode ? 'bg-slate-800/80 border-slate-700 text-white' : 'bg-slate-50 border-slate-200 text-slate-900'
              }`}
            >
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </div>

          <div className={`flex justify-end gap-3 pt-5 border-t ${darkMode ? 'border-slate-800' : 'border-slate-100'}`}>
            <button
              type="button"
              onClick={onClose}
              className={`px-5 py-2.5 rounded-xl text-sm font-bold transition cursor-pointer ${
                darkMode ? 'text-slate-300 hover:bg-slate-800' : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2.5 rounded-xl text-sm font-bold bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white shadow-lg shadow-indigo-600/30 transition cursor-pointer active:scale-95"
            >
              Add Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default TaskModal;