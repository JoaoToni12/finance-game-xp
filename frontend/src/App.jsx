import { useState } from 'react';
import Header from './components/layout/Header';
import BottomNav from './components/layout/BottomNav';
import Dashboard from './pages/Dashboard';
import Chat from './pages/Chat';

function App() {
  const [currentPage, setCurrentPage] = useState(0);

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-yellow-500 selection:text-black">
      <div className="mx-auto max-w-md min-h-screen bg-black shadow-2xl relative overflow-hidden flex flex-col">
        
        {/* O Header aparece em ambas as telas */}
        <Header />

        {/* Área de Conteúdo Principal */}
        <main className="flex-1 px-5 overflow-y-auto scrollbar-hide">
          {currentPage === 0 ? <Dashboard /> : <Chat />}
        </main>

        {/* Navegação Inferior */}
        <BottomNav 
          currentPage={currentPage} 
          onPageChange={setCurrentPage} 
        />
        
      </div>
    </div>
  );
}

export default App;