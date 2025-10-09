export default function Index() {
  return (
    <div className="container">
      <header className="header">
        <h1 className="title">System 2 Kreditt</h1>
        <div className="title-underline" />
      </header>

      <footer className="footer">
        <div className="divider" />
        <div className="footer-inner">
          <div className="reg">System 2 Management er en registrert AIF-forvalter med tillatelse fra Finanstilsynet</div>
          <a className="contact" href="mailto:info@system2.no" aria-label="Send e‑post">
            <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            info@system2.no
          </a>
        </div>
      </footer>
    </div>
  );
}
