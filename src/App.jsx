import { useEffect, useState } from 'react'
import horrorTop50 from './data/horrorTop50.json'
import './App.css'

const movies = horrorTop50.slice(0, 10)
const getGenres = () => ['Siaubo']
const movieDescriptions = [
  'Jaunavedžių pora įsikuria sename dvare, kur užrakintas kambarys ir paslaptingi įvykiai pažadina seną paslaptį.',
  'FBI praktikantė kreipiasi į įkalintą psichiatrą, kad sugautų pavojingą serijinį žudiką.',
  'Pinigus pavogusi sekretorė sustoja nuošaliame motelyje, kurio savininkas slepia nerimą keliančią paslaptį.',
  'Žiemą atokiame viešbutyje apsistojusi šeima susiduria su tėvo vis stiprėjančia beprotybe.',
  'Antarktidos tyrimų stotyje mokslininkų komandą persekioja pavidalą keičianti būtybė.',
  'Vyras leidžiasi ieškoti paslėpto turto, kurį saugo senovinė ir bauginanti esybė.',
  'Pakrantės miestelį terorizuojant didžiuliam rykliui, šerifas ir jo bendražygiai leidžiasi į pavojingą medžioklę.',
  'Šeima ieško pagalbos, kai jauną mergaitę ima veikti nepaaiškinama antgamtinė jėga.',
  'Žmona ir jos meilužis sumano nužudyti jos vyrą, tačiau netrukus jų planą apgaubia nauja paslaptis.',
  'Viduramžių mokslininkas sudaro sandorį su velniu, trokšdamas žinių ir pasaulietiškų malonumų.',
]

const USERS_API = 'https://testapi.io/api/Slavstan/resource/vartotojaimovies'

async function getApiUsers() {
  const response = await fetch(USERS_API)
  if (!response.ok) throw new Error('Nepavyko pasiekti vartotojų duomenų bazės.')
  const result = await response.json()
  if (Array.isArray(result)) return result
  if (Array.isArray(result.data)) return result.data
  if (Array.isArray(result.records)) return result.records
  return result && typeof result === 'object' ? [result] : []
}

function HomeIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m3.5 10 8.5-7 8.5 7M5.5 9v11h13V9M9.5 20v-7h5v7" /></svg>
}

function SearchIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="10.8" cy="10.8" r="7.3" /><path d="m16.2 16.2 5 5" /></svg>
}

function BookmarkIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 3.5h12v17l-6-4-6 4z" /></svg>
}

function GeneratedPoster({ movie, index }) {
  const gradientId = `poster-gradient-${index}`
  const titleLines = movie.title.split(' ')
  const lines = []
  let line = ''
  titleLines.forEach((word) => {
    if (`${line} ${word}`.trim().length > 17 && line) {
      lines.push(line)
      line = word
    } else line = `${line} ${word}`.trim()
  })
  if (line) lines.push(line)

  return (
    <svg className="generated-poster" viewBox="0 0 300 450" role="img" aria-label={`Sukurtas ${movie.title} filmo plakatas`} preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
          <stop stopColor={['#311a3b', '#18263b', '#34302d', '#20162b', '#1a3140', '#683622', '#12354a', '#20262c', '#22202d', '#28242a'][index]} />
          <stop offset="1" stopColor={['#09080d', '#080b12', '#07080d', '#08070d', '#090e13', '#140a08', '#07121c', '#09090d', '#0a0a0d', '#101012'][index]} />
        </linearGradient>
        <radialGradient id={`glow-${index}`}>
          <stop stopColor={['#e8a355', '#c5d7e8', '#f1d6b6', '#e5523f', '#c9e8f0', '#e88448', '#48a8d4', '#d4a78a', '#d9d8dc', '#b8a2b3'][index]} stopOpacity=".8" />
          <stop offset="1" stopColor="#151019" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="300" height="450" fill={`url(#${gradientId})`} />
      <circle cx={index % 2 ? 224 : 80} cy="142" r={index % 3 ? 118 : 145} fill={`url(#glow-${index})`} opacity=".64" />
      <g className={`poster-scene poster-scene-${index}`} fill="none" strokeLinecap="round" strokeLinejoin="round">
        {index === 0 && <><path d="M33 320V165l117-80 117 80v155M62 320V177l88-60 88 60v143" stroke="#d5a46e" strokeOpacity=".5" strokeWidth="3" /><rect x="112" y="186" width="76" height="134" rx="38" fill="#171018" stroke="#d9ae78" strokeWidth="2" /><circle cx="151" cy="252" r="7" fill="#e5bb81" stroke="none" /><path d="M150 252v39" stroke="#e5bb81" strokeWidth="2" /></>}
        {index === 1 && <><path d="M150 115c-52 0-82 47-73 93 8 40 41 66 73 66s65-26 73-66c9-46-21-93-73-93Z" fill="#c9c4b8" fillOpacity=".16" stroke="#d6d4ca" strokeOpacity=".75" strokeWidth="2" /><path d="M101 164c24-31 74-47 105-17m-111 61 35 10m80-10-35 10m-25 2v34m-37-49-30 81m104-81 30 81" stroke="#d6d4ca" strokeOpacity=".62" strokeWidth="4" /><path d="M142 235c5-8 13-8 18 0" stroke="#e2b488" strokeWidth="3" /></>}
        {index === 2 && <><path d="M52 328V199l98-73 98 73v129" fill="#08090d" fillOpacity=".55" stroke="#c4b3a4" strokeOpacity=".58" strokeWidth="2" /><path d="M126 328v-91a24 24 0 0 1 48 0v91" fill="#d6d0c4" fillOpacity=".1" stroke="#d6d0c4" strokeOpacity=".6" strokeWidth="2" /><path d="M30 330h240M150 107v29m-12-14h24" stroke="#d6d0c4" strokeOpacity=".5" strokeWidth="2" /><circle cx="150" cy="219" r="3" fill="#f1c08b" stroke="none" /></>}
        {index === 3 && <><path d="M58 345V125h184v220M84 345V157h132v188M110 345V189h80v156" stroke="#d66c4e" strokeOpacity=".56" strokeWidth="3" /><path d="M135 345V226a15 15 0 0 1 30 0v119" fill="#08080c" stroke="#e7b38a" strokeOpacity=".6" strokeWidth="2" /><path d="M45 345h210" stroke="#e7b38a" strokeOpacity=".55" strokeWidth="3" /></>}
        {index === 4 && <><path d="M0 303c46-25 72-22 116 0s73 24 112 0 50-21 72-13v160H0Z" fill="#b3d1d9" fillOpacity=".17" stroke="#c5e4eb" strokeOpacity=".57" strokeWidth="2" /><path d="M0 340c48-20 76-20 119 0s76 20 119 0 42-18 62-13" stroke="#c5e4eb" strokeOpacity=".45" strokeWidth="2" /><path d="m120 280 38-89 39 89-39-20Z" fill="#090c10" stroke="#e4eef0" strokeOpacity=".72" strokeWidth="2" /><circle cx="155" cy="153" r="3" fill="#fff1c9" stroke="none" /></>}
        {index === 5 && <><path d="m-20 318 79-76 42 39 54-103 55 107 50-72 70 105" fill="#160f10" stroke="#e8a064" strokeOpacity=".62" strokeWidth="2" /><circle cx="215" cy="135" r="45" fill="#b94531" fillOpacity=".62" stroke="none" /><path d="M0 325h300M25 351h240" stroke="#d58855" strokeOpacity=".48" strokeWidth="2" /><path d="M143 236c10-22 25-22 35 0v74h-35Z" fill="#08080c" stroke="#d9a074" strokeOpacity=".65" strokeWidth="2" /></>}
        {index === 6 && <><path d="M0 302c57-31 102-25 150 0s94 30 150-3v151H0Z" fill="#1c5272" fillOpacity=".58" stroke="#77c3dc" strokeOpacity=".72" strokeWidth="2" /><path d="M0 340c54-22 100-18 150 5s96 24 150-4" stroke="#9de2ee" strokeOpacity=".7" strokeWidth="3" /><path d="m122 299 39-112 40 112-40-31Z" fill="#080b10" stroke="#b7dce4" strokeOpacity=".8" strokeWidth="2" /><circle cx="220" cy="114" r="30" fill="#d7d9cf" fillOpacity=".28" stroke="none" /></>}
        {index === 7 && <><path d="M0 321h300M43 321V257h48v64m19 0v-85h57v85m23 0v-61h53v61" stroke="#d1c0ac" strokeOpacity=".44" strokeWidth="2" /><path d="M144 107c-9 39-39 57-39 93 0 27 19 43 45 43s45-16 45-43c0-36-30-54-39-93Z" fill="#160f17" stroke="#e3c3a2" strokeOpacity=".68" strokeWidth="2" /><path d="M150 156v43m-20-15 20 15 20-15" stroke="#df775c" strokeWidth="2" /></>}
        {index === 8 && <><rect x="46" y="155" width="208" height="180" rx="8" fill="#d2d0cb" fillOpacity=".1" stroke="#d9d5ce" strokeOpacity=".58" strokeWidth="2" /><path d="M65 179h170m-170 21h170m-170 21h170m-170 21h170m-170 21h170m-170 21h170" stroke="#d9d5ce" strokeOpacity=".23" strokeWidth="2" /><path d="M122 268c11-24 44-24 56 0v67h-56Z" fill="#101014" stroke="#c5c1bb" strokeOpacity=".54" strokeWidth="2" /><circle cx="151" cy="247" r="21" fill="#d8d4ce" fillOpacity=".46" stroke="none" /></>}
        {index === 9 && <><path d="M0 330 45 277l31 38 46-110 29 64 46-138 42 169 29-46 32 57v139H0Z" fill="#09090d" stroke="#d3bdab" strokeOpacity=".56" strokeWidth="2" /><path d="M70 321h160M100 293h105" stroke="#df8d55" strokeOpacity=".54" strokeWidth="2" /><path d="M128 257c5-18 16-29 28-29s23 11 28 29v65h-56Z" fill="#171117" stroke="#cc9e88" strokeOpacity=".6" strokeWidth="2" /><path d="m132 238-10-24 26 13m20 11 10-24-26 13" stroke="#c78c79" strokeWidth="3" /></>}
      </g>
      <rect y="315" width="300" height="135" fill="#08070b" fillOpacity=".72" />
      <text x="22" y="356" fill="#f7ead7" fontFamily="Georgia,serif" fontSize={lines.length > 2 ? 17 : 20} fontWeight="700" letterSpacing="1">
        {lines.map((titleLine, lineIndex) => <tspan key={titleLine} x="22" dy={lineIndex === 0 ? 0 : 23}>{titleLine.toUpperCase()}</tspan>)}
      </text>
      <text x="22" y="425" fill="#e17d45" fontFamily="Arial,sans-serif" fontSize="9" fontWeight="700" letterSpacing="3">A HORROR CLASSIC · {movie.year}</text>
    </svg>
  )
}

function MovieCard({ movie, index, onSelect }) {
  const genres = getGenres()

  return (
    <article
      className={`movie-card ${index === 0 ? 'featured-card' : ''}`}
      style={{ '--card-order': index }}
      role="button"
      tabIndex={0}
      onClick={() => onSelect(movie)}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault()
          onSelect(movie)
        }
      }}
      aria-label={`Rodyti filmo ${movie.title} informaciją`}
    >
      <div className="movie-poster movie-rank">
        <GeneratedPoster movie={movie} index={index} />
        <span className="poster-rating"><span aria-hidden="true">★</span> {movie.rating.toFixed(1)} <small>IMDb</small></span>
        <span className="poster-open-hint">Filmo informacija</span>
      </div>
      <div className="movie-info">
        <div className="movie-facts">
          <span className="movie-year">{movie.year}</span>
          {genres.slice(0, 2).map((genre) => <span className="genre-chip" key={genre}>{genre}</span>)}
        </div>
        <h3>{movie.title}</h3>
        <p className="movie-tagline">{movieDescriptions[index]}</p>
      </div>
    </article>
  )
}

function App() {
  const [loginOpen, setLoginOpen] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [currentUser, setCurrentUser] = useState(() => localStorage.getItem('moviematch-current-user') || '')
  const [loginError, setLoginError] = useState('')
  const [loginBusy, setLoginBusy] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState('all')
  const [selectedMovie, setSelectedMovie] = useState(null)
  const filteredMovies = movies.filter((movie) => {
    const matchesSearch = movie.title.toLocaleLowerCase('lt').includes(searchQuery.trim().toLocaleLowerCase('lt'))
    const matchesCategory = activeCategory === 'all' || getGenres().includes('Siaubo')
    return matchesSearch && matchesCategory
  })

  useEffect(() => {
    if (!selectedMovie) return undefined
    function closeOnEscape(event) {
      if (event.key === 'Escape') setSelectedMovie(null)
    }
    document.addEventListener('keydown', closeOnEscape)
    return () => document.removeEventListener('keydown', closeOnEscape)
  }, [selectedMovie])

  useEffect(() => {
    if (currentUser) localStorage.setItem('moviematch-current-user', currentUser)
  }, [currentUser])

  async function handleLogin(event) {
    event.preventDefault()
    const name = username.trim()
    if (!name || !password) {
      setLoginError('Įveskite vardą ir slaptažodį.')
      return
    }

    setLoginBusy(true)
    setLoginError('')
    try {
      const users = await getApiUsers()
      const found = users.find((user) => user?.vardas?.toLowerCase() === name.toLowerCase())
      if (found) {
        if (String(found.password) !== password) {
          setLoginError('Šiam vardui įvestas neteisingas slaptažodis.')
          return
        }
      } else {
        const response = await fetch(USERS_API, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ vardas: name, password }),
        })
        if (!response.ok) throw new Error('Nepavyko sukurti vartotojo duomenų bazėje.')
      }

      setCurrentUser(name)
      setLoginOpen(false)
      setPassword('')
    } catch (error) {
      setLoginError(error instanceof TypeError
        ? 'Nepavyko susisiekti su API. Patikrinkite interneto ryšį arba API CORS nustatymus.'
        : (error.message || 'Prisijungti nepavyko. Bandykite dar kartą.'))
    } finally {
      setLoginBusy(false)
    }
  }

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
          <a href="#filmai" className={`nav-item ${searchOpen ? 'active' : ''}`} onClick={() => setSearchOpen(true)}><SearchIcon /><span>Ieškoti filmų</span></a>
          <a href="#filmai" className="nav-item"><BookmarkIcon /><span>Mano sąrašai</span></a>
        </nav>
        <div className="account-actions">
          {currentUser && <span className="account-name">{currentUser}</span>}
          {currentUser && <button className="logout-header-button" type="button" onClick={() => { setCurrentUser(''); localStorage.removeItem('moviematch-current-user') }}>Atsijungti</button>}
          {!currentUser && <button className="login-button" type="button" onClick={() => { setLoginOpen(true); setLoginError('') }}>Prisijungti</button>}
        </div>
      </header>

      {loginOpen && (
        <div className="login-overlay" onMouseDown={(event) => { if (event.target === event.currentTarget) setLoginOpen(false) }}>
          <section className="login-dialog" role="dialog" aria-modal="true" aria-labelledby="login-title">
            <button className="login-close" type="button" aria-label="Uždaryti" onClick={() => setLoginOpen(false)}>×</button>
            <span className="login-eyebrow">MOVIEMATCH PASKYRA</span>
            <h2 id="login-title">Prisijunk <em>prie nakties</em></h2>
            <p>Jūsų filmų sąrašai bus saugomi pagal vartotojo vardą.</p>
            <form onSubmit={handleLogin}>
              <label htmlFor="login-username">Vardas</label>
              <input id="login-username" autoComplete="username" value={username} onChange={(event) => setUsername(event.target.value)} placeholder="Įveskite vardą" autoFocus />
              <label htmlFor="login-password">Slaptažodis</label>
              <input id="login-password" type="password" autoComplete="current-password" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="Įveskite slaptažodį" />
              {loginError && <p className="login-error" role="alert">{loginError}</p>}
              <button className="login-submit" type="submit" disabled={loginBusy}>{loginBusy ? 'Jungiamasi…' : 'Prisijungti'}</button>
            </form>
          </section>
        </div>
      )}

      <section className="hero-section" aria-labelledby="hero-title">
        <div className="hero-copy">
          <div className="eyebrow"><span>TAVO KELIAS</span><i /> <span>ŠIURPIAS ISTORIJAS</span></div>
          <h1 id="hero-title">Ženk į <em>siaubo</em> pasaulį<span className="title-period">.</span></h1>
          <p className="hero-description">Nuo šiurpą keliančių klasikų iki naujausių siaubo filmų.<br className="desktop-break" /> Atrask, įvertink ir susikurk savo siaubo filmų kolekciją.</p>
        </div>
      </section>

      <section className="movies-section" id="filmai" aria-labelledby="movies-title">
        <div className="section-heading">
          <h2 id="movies-title">{searchQuery ? <>Paieškos <em>rezultatai</em></> : <>Top 10 <em>siaubo filmų</em></>} <span className="section-ghost" aria-hidden="true">☻</span></h2>
          <a className="view-all" href="#filmai">Žiūrėti visus <span aria-hidden="true">→</span></a>
        </div>
        <div className="catalog-filters" aria-label="Filmų kategorijos">
          <button type="button" className={activeCategory === 'all' ? 'selected' : ''} onClick={() => setActiveCategory('all')}>Visi filmai</button>
          <button type="button" className={activeCategory === 'horror' ? 'selected' : ''} onClick={() => setActiveCategory('horror')}>Horror Movies</button>
        </div>
        {searchOpen && (
          <form className="movie-search" role="search" onSubmit={(event) => event.preventDefault()}>
            <SearchIcon />
            <input
              type="search"
              aria-label="Ieškoti filmų pagal pavadinimą"
              placeholder="Įveskite filmo pavadinimą..."
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              autoFocus
            />
            {searchQuery && <button type="button" onClick={() => setSearchQuery('')}>Išvalyti</button>}
          </form>
        )}
        <div className="movie-grid">
          {filteredMovies.map((movie) => <MovieCard key={movie.title} movie={movie} index={movies.indexOf(movie)} onSelect={setSelectedMovie} />)}
        </div>
        {filteredMovies.length === 0 && <p className="no-movies">Filmų pagal „{searchQuery}“ nerasta.</p>}
      </section>

      {selectedMovie && (
        <div className="movie-detail-overlay" onMouseDown={(event) => { if (event.target === event.currentTarget) setSelectedMovie(null) }}>
          <section className="movie-detail-dialog" role="dialog" aria-modal="true" aria-labelledby="movie-detail-title">
            <button className="login-close" type="button" aria-label="Uždaryti filmo informaciją" onClick={() => setSelectedMovie(null)}>×</button>
            <div className="movie-detail-poster">
              <GeneratedPoster movie={selectedMovie} index={movies.indexOf(selectedMovie)} />
            </div>
            <div className="movie-detail-copy">
              <span className="login-eyebrow">HORROR MOVIES · TOP {String(movies.indexOf(selectedMovie) + 1).padStart(2, '0')}</span>
              <h2 id="movie-detail-title">{selectedMovie.title}</h2>
              <div className="movie-detail-facts">
                <span className="rating"><span aria-hidden="true">★</span> {selectedMovie.rating.toFixed(1)} IMDb</span>
                <span>{selectedMovie.year}</span>
                {getGenres().map((genre) => <span className="genre-chip" key={genre}>{genre}</span>)}
              </div>
              <h3>Aprašymas</h3>
              <p>{movieDescriptions[movies.indexOf(selectedMovie)]}</p>
              <a className="imdb-detail-link" href={`https://www.imdb.com/title/${selectedMovie.id}/`} target="_blank" rel="noreferrer">Peržiūrėti IMDb informaciją ↗</a>
            </div>
          </section>
        </div>
      )}

      <footer className="page-footer"><span>Information courtesy of IMDb</span><a href="https://www.imdb.com" target="_blank" rel="noreferrer">https://www.imdb.com</a><span>Used with permission.</span><span>Original illustrated posters.</span></footer>
    </main>
  )
}

export default App
