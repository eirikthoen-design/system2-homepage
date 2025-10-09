import { useEffect, useState } from 'react';
import { useIsMobile } from '../hooks/use-mobile';

export default function Index() {
  const [loaded, setLoaded] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    setLoaded(true);
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  return (
    <div className="relative h-screen flex flex-col justify-start items-center bg-black text-white overflow-hidden px-6">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMjIiIGZpbGwtb3BhY2l0eT0iMC4wNCI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptNiA2djZoNnYtNmgtNnptLTEyIDBoNnY2aC02di02em0xMiAwaDZ2NmgtNnYtNnoiLz48cGF0aCBkPSJNMTIgMzZ2Nmg2di02aC02em02IDZ2Nmg2di02aC02em0tNiAwdi02aC02djZoNnptLTYgMHY2aC02djZoMTJ2LTEyaC02em0zMCAwaDZ2NmgtNnYtNnoiLz48cGF0aCBkPSJNMTIgMTJ2Nmg2di02aC02em02IDZ2NmgtNnY2aDEydi0xMmgtNnptLTYgMHYtNmgtNnY2aDZ6bS02IDB2NmgtNnY2aDEydi0xMmgtNnoiLz48cGF0aCBkPSJNNTQgMTJ2Nmg2di02aC02em02IDZ2NmgtNnY2aDEydi0xMmgtNnptLTYgMHYtNmgtNnY2aDZ6bS02IDB2NmgtNnY2aDEydi0xMmgtNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>

      <div className="z-10 max-w-3xl w-full flex flex-col items-center justify-center py-12 px-4 mt-24">
        <div className={`transition-all duration-1000 transform ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center space-y-6">
            <div className="inline-block border-b border-white/10 pb-2 mb-2">
              <h1 className="text-4xl md:text-6xl font-light tracking-tighter text-white/90">
                System 2 Kreditt
              </h1>
            </div>
          </div>
        </div>

        <div className={`absolute bottom-[20%] left-0 w-full py-5 px-6 backdrop-blur-sm bg-black/60 border-t border-white/5 transition-all duration-1000 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
          <div className="container mx-auto flex flex-col md:flex-col justify-center items-center gap-6">
            <div className="text-[10px] text-white/40 font-light whitespace-nowrap mb-2 md:mb-4">
              System 2 Management er en registrert AIF-forvalter med tillatelse fra Finanstilsynet
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center gap-6">
              <a href="mailto:info@system2.no" className="text-[10px] text-white/40 hover:text-white/90 transition-colors duration-300 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-2 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                info@system2.no
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
