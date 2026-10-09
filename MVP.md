# MovieMatch – Halloween Edition
## MVP (Minimum Viable Product)

### 1. Projekto aprašymas

**Projekto pavadinimas:** MovieMatch – Halloween Edition

**Projekto tipas:** Internetinė siaubo filmų katalogo aplikacija.

**Projekto tikslas:** Sukurti Helovino tematikos internetinę aplikaciją, kurioje vartotojai galėtų atrasti siaubo filmus, peržiūrėti jų informaciją, išsaugoti norimus žiūrėti filmus, pažymėti jau matytus filmus, vertinti filmus ir rašyti komentarus.

Dizainas: tamsus fonas, oranžiniai ir tamsiai violetiniai akcentai, siaubo filmų estetika bei subtilios animacijos.

### 2. Technologijos

- **React + Vite** – aplikacijos kūrimui.
- **JavaScript** – programavimo kalba.
- **CSS** – dizainui ir animacijoms.
- **TMDB API** – filmų informacijai gauti.
- **testapi.io** – projekto duomenų saugojimui (jei ši paslauga bus naudojama projekte).
- **GitHub** – kodo versijoms valdyti ir komandiniam darbui.

### 3. Pagrindinės MVP funkcijos

#### 3.1. Siaubo filmų paieška
- Vartotojas gali ieškoti filmų pagal pavadinimą.
- Rezultatai apribojami siaubo žanru.
- Naudojamas TMDB API.

#### 3.2. Filmo informacijos peržiūra
Rodoma:
- filmo pavadinimas;
- plakatas;
- išleidimo metai;
- trumpas aprašymas;
- TMDB reitingas.

TMDB siaubo žanro ID: `27`.

#### 3.3. Watchlist – norimų žiūrėti filmų sąrašas
- Galima pridėti filmą į sąrašą.
- Galima peržiūrėti išsaugotus filmus.
- Galima pašalinti filmą iš sąrašo.

#### 3.4. Watched – peržiūrėti filmai
- Galima pažymėti filmą kaip peržiūrėtą.
- Galima pakeisti filmo būseną.
- Galima peržiūrėti visus jau matytus filmus.

#### 3.5. Filmų vertinimai
- Vartotojas gali įvertinti filmą nuo 1 iki 10.
- Galima pakeisti savo įvertinimą.
- Įvertinimas išsaugomas duomenų saugykloje.

#### 3.6. Komentarai
- Galima parašyti komentarą apie filmą.
- Galima redaguoti savo komentarą.
- Galima ištrinti savo komentarą.

### 4. Duomenų modelis

Planuojamos trys duomenų kolekcijos. Prieš įgyvendinant reikia patikrinti, kaip pasirinkta duomenų saugykla palaiko kolekcijas ir ryšius.

#### 4.1. Users – vartotojai
- `id` – vartotojo identifikatorius.
- `name` – vartotojo vardas.
- `email` – el. paštas.

#### 4.2. Movies – vartotojo išsaugoti filmai
- `id` – įrašo identifikatorius.
- `userId` – vartotojo identifikatorius.
- `tmdbId` – filmo ID iš TMDB.
- `title` – filmo pavadinimas.
- `status` – `Watchlist` arba `Watched`.

#### 4.3. Reviews – vertinimai ir komentarai
- `id` – įrašo identifikatorius.
- `userId` – vartotojo identifikatorius.
- `movieId` – išsaugoto filmo įrašo identifikatorius.
- `rating` – įvertinimas nuo 1 iki 10.
- `comment` – komentaras.

**Ryšiai:**
- Vienas vartotojas gali turėti daug išsaugotų filmų.
- Kiekvienas išsaugotas filmas susietas su vartotoju.
- Filmas gali turėti vertinimų ir komentarų.
- Kiekvienas vertinimas ar komentaras susietas su vartotoju ir filmu.

### 5. CRUD operacijos

| Operacija | HTTP metodas | Pavyzdys |
|---|---|---|
| Gauti duomenis | GET | Gauti filmų sąrašą |
| Sukurti įrašą | POST | Pridėti filmą arba komentarą |
| Atnaujinti įrašą | PUT arba PATCH | Pakeisti filmo būseną ar komentarą |
| Ištrinti įrašą | DELETE | Pašalinti filmą arba komentarą |

### 6. TMDB API integracija

Naudojama filmų paieškai ir informacijos pateikimui:
- filmų pavadinimai;
- plakatai;
- aprašymai;
- išleidimo datos;
- TMDB reitingai.

API raktą laikyti saugiai ir neįkelti slapto rakto į viešą GitHub saugyklą. Jei API raktas naudojamas kliento pusėje, laikyti jį viešai pasiekiamu ir neįtraukti į jį slaptų privilegijų; prireikus naudoti serverio tarpininką.

### 7. Dizainas ir puslapio struktūra

**Spalvos:**
- juoda – pagrindinis fonas;
- tamsiai violetinė – papildomas fonas;
- oranžinė – pagrindiniai akcentai;
- tamsiai raudona – papildomi akcentai;
- balta – tekstui.

**Vizualiniai elementai:**
- moliūgų, šikšnosparnių, voratinklių ir vaiduoklių motyvai;
- filmų plakatų kortelės;
- subtilios animacijos;
- aiškūs pranešimai apie įkėlimą, klaidas ir tuščius sąrašus.

**Puslapiai / skiltys:**
1. **Home** – pagrindinis puslapis ir filmų rekomendacijos.
2. **Discover** – siaubo filmų paieška.
3. **Watchlist** – norimų žiūrėti filmų sąrašas.
4. **Watched** – jau peržiūrėti filmai.
5. **Reviews** – vertinimai ir komentarai.

Aplikacija turi prisitaikyti prie kompiuterių ir mobiliųjų įrenginių ekranų.

### 9. MVP priėmimo kriterijai

- [ ] Veikia siaubo filmų paieška.
- [ ] Rodoma filmų informacija iš TMDB API.
- [ ] Galima pridėti filmą į Watchlist.
- [ ] Galima pažymėti filmą kaip peržiūrėtą.
- [ ] Galima įvertinti filmą nuo 1 iki 10.
- [ ] Galima sukurti, redaguoti ir ištrinti komentarą.
- [ ] Įgyvendintos reikalingos GET, POST, PUT/PATCH ir DELETE operacijos.
- [ ] Duomenys išlieka perkrovus puslapį.
- [ ] Duomenų įrašai susieti su teisingu vartotoju ir filmu.
- [ ] Rodomos įkėlimo, tuščio rezultato ir klaidos būsenos.
- [ ] Dizainas veikia telefone ir kompiuteryje.
- [ ] Projektas įkeltas į GitHub.
- [ ] Atlikta kodo peržiūra ir pagrindinių funkcijų testavimas.


### 11. Pastabos prieš pradedant programuoti

- Patvirtinti, ar aplikacijoje bus tik vienas bendras naudotojas, ar tikra registracija ir prisijungimas.
- Patikrinti, ar pasirinkta `testapi.io` paslauga tinka numatytiems duomenų ryšiams ir ilgalaikiam saugojimui.
- Patikslinti, ar vienas filmas gali turėti kelis skirtingų vartotojų vertinimus.
- Neįgyvendinti papildomų funkcijų, kurios nėra būtinos MVP.
