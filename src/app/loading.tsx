'use client'
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Loading() {
  const [isVisible, setIsVisible] = useState(true); // Estado para controlar la visibilidad

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false); // Cambia el estado para iniciar la transición después de 3 segundos
    }, 3000); // Ajusta este tiempo según tus necesidades

    return () => clearTimeout(timer); // Limpia el temporizador si el componente se desmonta
  }, []);
    return (
      <div className={`fixed top-0 left-0 z-50 w-screen h-screen bg-primary-foreground flex justify-center items-center ${isVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}>

        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-sky-500">
  
        </div>
        <Image className="absolute" src="/static/logo3.png" alt="logo" width={100} height={100} />
        
      </div>
    );
}