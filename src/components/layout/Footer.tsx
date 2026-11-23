import { Link } from 'react-router-dom';
import { contact } from '../../data/contact';

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="site-footer-main">
          <div className="site-footer-about">
            <Link className="site-footer-brand" to="/" aria-label={contact.headerBrandLabel}>
              {contact.brand}
              <i>.</i>
            </Link>
            <p>
              Un mundo de negocios por descubrir. Un producto de{' '}
              <a
                href="https://del-valle-software.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Del Valle Software
              </a>
              .
            </p>
          </div>
          <nav className="site-footer-nav" aria-label="Enlaces del pie de página">
            <Link to="/planes">Planes</Link>
            <Link to="/preguntas-frecuentes">Preguntas frecuentes</Link>
            <Link to="/lista-de-espera">Lista de espera</Link>
          </nav>
          <a
            className="site-footer-company"
            href="https://del-valle-software.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Conoce Del Valle Software
            <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="site-footer-legal">
          <span>
            © {new Date().getFullYear()} Del Valle Software. Catify es un
            producto de Del Valle Software. Todos los derechos reservados.
          </span>
          <span>Caicedonia, Valle del Cauca, Colombia</span>
        </div>
      </div>
    </footer>
  );
}
