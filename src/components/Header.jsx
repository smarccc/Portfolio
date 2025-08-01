import { useState } from 'react';

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigation_buttons = [
    { name: 'Home', href: '#home' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="m-4 bg-white/10 backdrop-blur-md text-white p-4 rounded-md shadow-md border border-white/20 flex items-center justify-between">
        {/* Logo */}
        <img src="src/assets/logo.png" alt="my logo" className="h-12" />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          {navigation_buttons.map((button, index) => (
            <a
              key={index}
              href={button.href}
              className="relative group text-white transition-colors duration-300"
            >
              {button.name}
              <span className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
            </a>
          ))}
        </nav>

      {/* Mobile Menu Icon */}
<button
  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
  className="md:hidden text-3xl focus:outline-none"
>
  {isMobileMenuOpen ? '🗙' : '☰'}
</button>
      </div>

      {/* Mobile Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/10 backdrop-blur-md text-white px-4 py-2 rounded-md shadow-md border border-white/20 mx-4 mt-2">
          {navigation_buttons.map((button, index) => (
            <a
              key={index}
              href={button.href}
              className="block py-2 border-b border-white/20 last:border-none text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {button.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}

export default Header;
