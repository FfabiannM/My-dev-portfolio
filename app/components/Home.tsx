import Image from "next/image";
import React from "react";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-5 pt-5">

      <div className="flex flex-col items-center efecto_lis p-5">
        <h5 className="text-lg text-center self-start pt-10 text-gray-600 dark:text-gray-200">Hola soy</h5>
        <div className="flex flex-row items-center gap-2">
          <Image src="/chevron-r.svg" alt="chev" width={75} height={75} />
          <h1 className="text-6xl text-center font-alata">Fabian Montaño</h1>
        </div>
      <h2 className="text-xl text-center pt-5">React, React Native, Next.js.</h2>
     </div>
    </div>
  );
};

export default Home;