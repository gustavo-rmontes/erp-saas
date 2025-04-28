
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Sidebar from "./components/Layout/Sidebar";
import Header from "./components/Layout/Header";
import Dashboard from "./pages/Dashboard";
import Caixa from "./pages/Caixa";
import ContasPagar from "./pages/ContasPagar";
import ContasReceber from "./pages/ContasReceber";
import FluxoCaixa from "./pages/FluxoCaixa";
import Bancos from "./pages/Bancos";
import Relatorios from "./pages/Relatorios";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  const [sidebarExpanded, setSidebarExpanded] = useState(true);
  
  const handleToggleSidebar = (isExpanded) => {
    setSidebarExpanded(isExpanded);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="app">
            <Sidebar onToggle={handleToggleSidebar} />
            <div className={`page-content ${!sidebarExpanded ? 'expanded' : ''}`}>
              <Header />
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/caixa" element={<Caixa />} />
                <Route path="/contas-pagar" element={<ContasPagar />} />
                <Route path="/contas-receber" element={<ContasReceber />} />
                <Route path="/fluxo-caixa" element={<FluxoCaixa />} />
                <Route path="/bancos" element={<Bancos />} />
                <Route path="/relatorios" element={<Relatorios />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
