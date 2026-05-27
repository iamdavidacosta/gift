import logoUrl from '../straycity-logo-transparent.svg';
import wallpaperUrl from '../straycity-wallpaper-background.svg';
import groupPhotoUrl from '../fotogrupotransparente.png';
import ticketPhotoUrl from '../entrada.png';

function App() {
  return (
    <main className="page" style={{ '--wallpaper': `url(${wallpaperUrl})` }}>
      <section className="hero" aria-label="StrayCity Bogota">
        <header className="hero__header">
          <img className="hero__logo" src={logoUrl} alt="StrayCity" />
          <p>08 Sep 2025</p>
        </header>

        <div className="stage">
          <div className="stage__group" aria-label="Foto del grupo">
            <img src={groupPhotoUrl} alt="Stray Kids" />
            <div className="stage__floor" />
          </div>

          <aside className="ticket" aria-label="Entrada al concierto">
            <span className="ticket__label">Tu entrada</span>
            <img src={ticketPhotoUrl} alt="Entrada al concierto" />
          </aside>
        </div>

        <footer className="event-line" aria-label="Resumen del evento">
          <span>Vive Claro</span>
          <span>Bogota</span>
          <span>Preferencial +7</span>
        </footer>
      </section>
    </main>
  );
}

export default App;
