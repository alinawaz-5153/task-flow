import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import TaskColumn from './components/TaskColumn';
import TaskModal from './components/TaskModal';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('taskflow_tasks');
    if (savedTasks) {
      try { return JSON.parse(savedTasks); } catch (e) { return []; }
    }
    return [
      { id: '1', title: 'Portfolio UI Architecture', description: 'Design high-end glassmorphism dashboard layout using Tailwind CSS.', priority: 'High', status: 'todo' },
      { id: '2', title: 'State Management & Local Storage', description: 'Implement robust CRUD operations with persistent storage.', priority: 'Medium', status: 'inprogress' }
    ];
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('taskflow_tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = (newTask) => {
    setTasks([newTask, ...tasks]);
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const handleMoveTask = (id, direction) => {
    const statuses = ['todo', 'inprogress', 'done'];
    setTasks(tasks.map(task => {
      if (task.id === id) {
        const currentIndex = statuses.indexOf(task.status);
        const newIndex = direction === 'right' ? currentIndex + 1 : currentIndex - 1;
        if (newIndex >= 0 && newIndex < statuses.length) {
          return { ...task, status: statuses[newIndex] };
        }
      }
      return task;
    }));
  };

  return (
    <div className={`min-h-screen relative overflow-hidden font-sans transition-colors duration-500 ${
      darkMode ? 'bg-[#070b19] text-slate-100' : 'bg-slate-100/90 text-slate-900'
    }`}>
      {/* Dynamic Stary / Graphical Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className={`absolute top-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full blur-[140px] transition-opacity duration-700 ${
          darkMode ? 'bg-indigo-950/40' : 'bg-indigo-200/50'
        }`}></div>
        <div className={`absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full blur-[140px] transition-opacity duration-700 ${
          darkMode ? 'bg-violet-950/40' : 'bg-violet-200/50'
        }`}></div>

        {/* Stary Particle Simulation */}
        <div className="absolute inset-0 opacity-50">
          <div className="absolute top-[12%] left-[18%] w-1.5 h-1.5 bg-indigo-400 rounded-full animate-pulse shadow-sm shadow-indigo-400"></div>
          <div className="absolute top-[28%] left-[82%] w-2 h-2 bg-violet-400 rounded-full animate-float shadow-sm shadow-violet-400"></div>
          <div className="absolute top-[58%] left-[12%] w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse"></div>
          <div className="absolute top-[85%] left-[88%] w-2 h-2 bg-indigo-300 rounded-full animate-float"></div>
          <div className="absolute top-[22%] left-[48%] w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
          <div className="absolute top-[75%] left-[30%] w-1 h-1 bg-violet-300 rounded-full"></div>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto p-4 sm:p-8">
        <Header 
          onOpenModal={() => setIsModalOpen(true)} 
          darkMode={darkMode} 
          setDarkMode={setDarkMode} 
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          <TaskColumn 
            title="To-Do" 
            status="todo" 
            color="bg-indigo-500" 
            tasks={tasks.filter(t => t.status === 'todo')}
            onDeleteTask={handleDeleteTask}
            onMoveTask={handleMoveTask}
            darkMode={darkMode}
          />
          <TaskColumn 
            title="In Progress" 
            status="inprogress" 
            color="bg-amber-500" 
            tasks={tasks.filter(t => t.status === 'inprogress')}
            onDeleteTask={handleDeleteTask}
            onMoveTask={handleMoveTask}
            darkMode={darkMode}
          />
          <TaskColumn 
            title="Done" 
            status="done" 
            color="bg-emerald-500" 
            tasks={tasks.filter(t => t.status === 'done')}
            onDeleteTask={handleDeleteTask}
            onMoveTask={handleMoveTask}
            darkMode={darkMode}
          />
        </div>

        <TaskModal 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)} 
          onAddTask={handleAddTask}
          darkMode={darkMode}
        />
      </div>
    </div>
  );
}

export default App;