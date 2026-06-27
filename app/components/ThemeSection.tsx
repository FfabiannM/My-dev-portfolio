"use client"
import { useStore } from "../store/store";
import Image from 'next/image';


export const ThemeSection = () => {

    const { mode, setMode } = useStore();

  const handleClick = () => {
    if (mode == 'dark') {
      document.body.style.backgroundColor = "#EAEAEA";
      document.body.style.color = "#171717";
      setMode('light');
    } else {
      document.body.style.backgroundColor = "#171717";
      document.body.style.color = "#EAEAEA";
      setMode('dark');
    }
  };
  return (
    <div className='absolute right-0 t-0'>
         <div className="flex flex-col">
        <button onClick={handleClick} className='efecto_lis_texto cursor-pointer p-3'>
          {mode == 'dark' ? <Image src="/moon.svg" className="invert" alt="" width={24} height={24} /> : <Image src="/sun.svg"  alt="" width={24} height={24} />}
        </button>
      </div>
    </div>
  )
}
