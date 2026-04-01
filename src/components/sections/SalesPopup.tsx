
'use client';

import { useState, useEffect } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { cn } from '@/lib/utils';

const names = [
  'Mariana Silva', 'Ricardo Fonseca', 'Juliana Moraes', 
  'Pedro Henrique', 'Luciana Gouvêia', 'Roberto Teixeira', 
  'Fernanda Alencar', 'Cláudia Souza', 'Bruno Oliveira', 
  'Amanda Costa'
];

export function SalesPopup() {
  const [visible, setVisible] = useState(false);
  const [currentName, setCurrentName] = useState('');

  useEffect(() => {
    // Delay inicial de 6 segundos
    const initialTimeout = setTimeout(() => {
      showNextNotification();
    }, 6000);

    return () => clearTimeout(initialTimeout);
  }, []);

  function showNextNotification() {
    const name = names[Math.floor(Math.random() * names.length)];
    setCurrentName(name);
    setVisible(true);

    // Esconde após 4 segundos
    setTimeout(() => {
      setVisible(false);
      // Espera 8 segundos para mostrar a próxima
      setTimeout(showNextNotification, 8000);
    }, 4000);
  }

  return (
    <div
      className={cn(
        "fixed bottom-4 left-4 z-50 transition-all duration-500 transform",
        visible ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
      )}
    >
      <div className="flex items-center gap-3 rounded-2xl bg-white p-3 shadow-2xl border border-primary/10 max-w-[260px]">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#2CAC43]/10">
          <CheckCircle2 className="h-6 w-6 text-[#2CAC43]" />
        </div>
        <div className="flex flex-col">
          <p className="text-[13px] font-bold text-[#3D1F08] leading-tight">
            {currentName}
          </p>
          <p className="text-[11px] text-muted-foreground">
            ¡Acaba de adquirir las recetas! ✅
          </p>
        </div>
      </div>
    </div>
  );
}
