import './App.css'

const movies = [
  { title: 'Nakties namai', tagline: 'Ji tave mato', year: '2020', rating: '6.8', genre: 'Siaubo', tone: 'night-house', art: 'NAKTIES NAMAI' },
  { title: 'Juodasis telefonas', tagline: 'Niekada neatsiliepk', year: '2021', rating: '6.9', genre: 'Siaubo, trileris', tone: 'black-phone', art: 'JUODASIS TELEFONAS' },
  { title: 'Paveldėjimas', tagline: 'Kiekviena giminė slepia paslaptis', year: '2018', rating: '7.3', genre: 'Siaubo, drama', tone: 'hereditary', art: 'PAVELDĖJIMAS' },
  { title: 'Ragana', tagline: 'Senoji Anglija, 1630-ieji', year: '2015', rating: '7.0', genre: 'Siaubo, mistika', tone: 'witch', art: 'RAGANA' },
]

function HomeIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m3.5 10 8.5-7 8.5 7M5.5 9v11h13V9M9.5 20v-7h5v7" /></svg>
}

function SearchIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="10.8" cy="10.8" r="7.3" /><path d="m16.2 16.2 5 5" /></svg>
}

function BookmarkIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 3.5h12v17l-6-4-6 4z" /></svg>
}

function MovieCard({ movie, index }) {
  return (
    <article className={`movie-card ${index === 0 ? 'featured-card' : ''}`} style={{ '--card-order': index }}>
      <div className={`movie-poster poster-${movie.tone}`} role="img" aria-label={`${movie.title} plakato iliustracija`}>
        <span className="poster-grain" />
        <span className="poster-art" aria-hidden="true" />
        <span className="poster-title-art" aria-hidden="true">{movie.art}</span>
        <span className="poster-heart" aria-hidden="true">♡</span>
      </div>
      <div className="movie-info">
        <div className="movie-facts">
          <span className="rating"><span aria-hidden="true">★</span> {movie.rating}</span>
          <span className="movie-year">{movie.year}</span>
          <span className="genre-chip">{movie.genre}</span>
        </div>
        <h3>{movie.title}</h3>
        <p className="movie-tagline">{movie.tagline}</p>
        <span className="add-to-list" aria-hidden="true"><span>＋</span> Į sąrašą</span>
      </div>
    </article>
  )
}

function App() {
  return (
    <main className="app-shell" id="pradzia">
      <div className="scene-backdrop" aria-hidden="true" />
      <header className="topbar">
        <a className="brand" href="#pradzia" aria-label="MovieMatch pradžia">
          <span className="brand-mark" aria-hidden="true"><span className="brand-moon">☾</span><span className="brand-bat">✦</span></span>
          <span className="brand-name"><span>movie</span><span>match</span><small>HELOVINO LEIDIMAS</small></span>
        </a>

        <nav className="main-nav" aria-label="Pagrindinė navigacija">
          <a href="#pradzia" className="nav-item active" aria-current="page"><HomeIcon /><span>Pradžia</span></a>
          <a href="#filmai" className="nav-item"><SearchIcon /><span>Ieškoti filmų</span></a>
          <a href="#filmai" className="nav-item"><BookmarkIcon /><span>Mano sąrašai</span></a>
        </nav>
        <button className="login-button" type="button">Prisijungti</button>
      </header>

      <section className="hero-section" aria-labelledby="hero-title">
        <div className="hero-copy">
          <div className="eyebrow"><span>TAVO KELIAS</span><i /> <span>ŠIURPIAS ISTORIJAS</span></div>
          <h1 id="hero-title">Ženk į <em>siaubo</em> pasaulį<span className="title-period">.</span></h1>
          <p className="hero-description">Nuo šiurpą keliančių klasikų iki naujausių siaubo filmų.<br className="desktop-break" /> Atrask, įvertink ir susikurk savo siaubo filmų kolekciją.</p>
        </div>
      </section>

      <section className="movies-section" id="filmai" aria-labelledby="movies-title">
        <div className="section-heading">
          <h2 id="movies-title">Šio vakaro <em>filmai</em> <span className="section-ghost" aria-hidden="true">☻</span></h2>
          <a className="view-all" href="#filmai">Žiūrėti visus <span aria-hidden="true">→</span></a>
        </div>
        <div className="movie-grid">
          {movies.map((movie, index) => <MovieCard key={movie.title} movie={movie} index={index} />)}
        </div>
      </section>

      <footer className="page-footer"><span>MOVIEMATCH · HELOVINO LEIDIMAS</span><span>GERO IR ŠIURPAUS VAKARO</span></footer>
    </main>
  )
}

export default App
