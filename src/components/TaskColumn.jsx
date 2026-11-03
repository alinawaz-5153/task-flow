import React from 'react';
import { Trash2, ArrowRight, ArrowLeft } from 'lucide-react';

function TaskColumn({ title, status, color, tasks, onDeleteTask, onMoveTask, darkMode }) {
  return (
    <div className={`backdrop-blur-xl rounded-2xl p-5 flex flex-col shadow-2xl transition-all duration-300 h-full min-h-[580px] ${
      darkMode 
        ? 'bg-slate-900/70 border border-slate-800 text-white shadow-indigo-950/20' 
        : 'bg-white/80 border border-slate-200/90 text-slate-900 shadow-slate-300/50'
    }`}>
      <div className={`flex items-center justify-between pb-3.5 mb-4 border-b ${darkMode ? 'border-slate-800' : 'border-slate-200'}`}>
        <div className="flex items-center gap-2.5">
          <span className={`w-3.5 h-3.5 rounded-full ${color} shadow-md`}></span>
          <h3 className="font-bold text-sm tracking-wide">{title}</h3>
        </div>
        <span className={`text-xs px-2.5 py-0.5 rounded-full font-extrabold ${
          darkMode ? 'bg-slate-800 text-indigo-400 border border-slate-700' : 'bg-slate-100 text-indigo-600 border border-slate-200'
        }`}>
          {tasks.length}
        </span>
      </div>

      <div className="flex-1 overflow-y-auto space-y-3.5 pr-1 max-h-[500px]">
        {tasks.length === 0 ? (
          <div className={`h-full min-h-[350px] flex flex-col items-center justify-center border-2 border-dashed rounded-xl p-6 text-center text-xs ${
            darkMode ? 'border-slate-800/80 text-slate-500' : 'border-slate-200 text-slate-400'
          }`}>
            <p className="font-medium">No tasks available in this column</p>
          </div>
        ) : (
          tasks.map((task) => (
            <div 
              key={task.id} 
              className={`rounded-xl p-4 shadow-lg transition-all duration-300 group hover:-translate-y-1 hover:shadow-indigo-500/10 ${
                darkMode 
                  ? 'bg-slate-800/90 border border-slate-700/80 hover:border-indigo-500/60' 
                  : 'bg-white border border-slate-200 hover:border-indigo-400'
              }`}
            >
              <div className="flex items-start justify-between gap-2 mb-2">
                <h4 className="font-bold text-sm leading-snug">{task.title}</h4>
                <span className={`text-[10px] px-2.5 py-0.5 rounded-md font-extrabold uppercase tracking-wider ${
                  task.priority === 'High' ? 'bg-rose-500/20 text-rose-400 border border-rose-500/30' :
                  task.priority === 'Medium' ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30' :
                  'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                }`}>
                  {task.priority}
                </span>
              </div>

              {task.description && (
                <p className={`text-xs mb-4 leading-relaxed line-clamp-3 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  {task.description}
                </p>
              )}

              <div className={`flex items-center justify-between pt-3 border-t mt-2 ${darkMode ? 'border-slate-700/60' : 'border-slate-100'}`}>
                <button 
                  onClick={() => onDeleteTask(task.id)}
                  className="text-slate-400 hover:text-rose-500 transition p-1.5 rounded-lg hover:bg-rose-500/10 cursor-pointer"
                  title="Delete Task"
                >
                  <Trash2 size={15} />
                </button>

                <div className="flex items-center gap-1.5">
                  {status !== 'todo' && (
                    <button 
                      onClick={() => onMoveTask(task.id, 'left')}
                      className={`p-1.5 rounded-lg transition cursor-pointer shadow-sm ${
                        darkMode ? 'bg-slate-700/80 text-slate-200 hover:bg-slate-600' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                      }`}
                      title="Move Backward"
                    >
                      <ArrowLeft size={14} />
                    </button>
                  )}
                  {status !== 'done' && (
                    <button 
                      onClick={() => onMoveTask(task.id, 'right')}
                      className={`p-1.5 rounded-lg transition cursor-pointer shadow-sm ${
                        darkMode ? 'bg-slate-700/80 text-slate-200 hover:bg-slate-600' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                      }`}
                      title="Move Forward"
                    >
                      <ArrowRight size={14} />
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default TaskColumn;