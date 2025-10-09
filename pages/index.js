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
    <div className="relative min-h-dvh flex flex-col items-center text-white overflow-hidden">
      {/* Main header */}
      <div className="z-10 w-full max-w-4xl mx-auto px-6 pt-24 md:pt-32">
        <div className={`transition-all duration-700 transform text-center ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
          <div className="inline-block border-b border-white/20 pb-3 mb-4">
            <h1 className="text-5xl md:text-7xl font-light tracking-tight">System 2 Kreditt</h1>
          </div>
        </div>
      </div>

      {/* Footer near bottom with faint divider */}
      <div className={`absolute left-0 right-0 ${loaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-700`} style={{bottom: '6rem'}}>
        <div className="w-full border-t border-white/10"></div>
        <div className="w-full px-6">
          <div className="max-w-4xl mx-auto text-center pt-6">
            <div className="text-[10px] text-white/40 font-light">
              System 2 Management er en registrert AIF-forvalter med tillatelse fra Finanstilsynet
            </div>
            <div className="mt-4 flex items-center justify-center gap-2 text-[10px] text-white/50">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <a href="mailto:info@system2.no" className="hover:text-white/90 transition-colors">info@system2.no</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
