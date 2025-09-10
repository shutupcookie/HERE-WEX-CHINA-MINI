import Link from 'next/link';

export default function Header() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link href="/" className="site-header__logo" aria-label="HERE homepage">
          {/* HERE logo SVG */}
          <svg width="60" height="32" viewBox="0 0 60 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <text x="10" y="25" fontFamily="Arial Black, Arial, sans-serif" fontWeight="bold" fontSize="24" fill="#243746">here</text>
            <polygon points="0,30 18,30 9,32" fill="#6CF6F3"/>
          </svg>
        </Link>
        <nav className="site-header__nav">
          <Link href="/">Home</Link>
          <Link href="/digital-cockpit">Digital Cockpit</Link>
          <Link href="/blog">Lotus Emeya + HERE</Link>
        </nav>
        <div className="site-header__cta">
          <Link href="/contact" className="cta-button">Contact us</Link>
          <button className="search-btn" aria-label="Search">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
              <circle cx="11" cy="11" r="7" stroke="#243746" strokeWidth="2"/>
              <line x1="16.5" y1="16.5" x2="22" y2="22" stroke="#243746" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
