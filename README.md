🎉 Wydarznik - System Organizacji Wydarzeń

Witamy w Wydarzniku — intuicyjnej aplikacji internetowej, która umożliwi Ci tworzenie, zarządzanie i uczestniczenie w wydarzeniach w Twojej okolicy.

📖 Spis treści

Opis projektu

Funkcjonalności

Zrzuty ekranu

Technologie

Instalacja i uruchomienie

Struktura projektu

Plik .env

Dodatkowe funkcje

Komentarze i sesje

Licencja

🔍 Opis projektu

Wydarznik to system wspierający organizację wydarzeń towarzyskich, kulturalnych lub edukacyjnych. Każdy zalogowany użytkownik może tworzyć wydarzenia, zapraszać gości, filtrować eventy oraz do nich dołączać.

🌐 Funkcjonalności

✅ Rejestracja i logowanie

✅ Tworzenie nowych wydarzeń (nazwa, data, lokalizacja, obrazek)

✅ Lista gości i dodawanie uczestników

✅ Edycja i usuwanie wydarzeń

✅ Filtrowanie po mieście, dacie i weekendach

✅ Sugestie wydarzeń dla Warszawy, Krakowa i Wrocławia

✅ Tryb ciemny (Dark Mode)

✅ Interfejs responsywny i przyjazny użytkownikowi

📷 Zrzuty ekranu

W aplikacji można zobaczyć m.in.:

Stronę główną z hero sekcją

Ekran logowania i rejestracji

Widok listy wydarzeń

Karty wydarzeń z akcjami: edytuj, usuń, detale

Formularz tworzenia nowego wydarzenia

Sekcję sugestii z gotowymi eventami z miast

Wersję ciemnego motywu (dark mode)

🤖 Technologie

Projekt korzysta z następujących narzędzi:

Node.js + Express (serwer aplikacji)

MongoDB + Mongoose (baza danych i ORM)

EJS (renderowanie widoków po stronie serwera)

CSS (ręczne stylowanie)

Express-session (sesje użytkownika)

Helmet (zabezpieczenia HTTP)

Dotenv (zmienne środowiskowe)

⚖️ Instalacja i uruchomienie

1. Klonowanie repozytorium:

git clone https://github.com/twoj-login/wydarznik.git
cd wydarznik

2. Instalacja zależności:

npm install

3. Konfiguracja bazy danych:

Upewnij się, że MongoDB jest zainstalowany i uruchomiony lokalnie lub masz link do MongoDB Atlas.

4. Utwórz plik .env:

PORT=3000
MONGO_URI=mongodb://localhost:27017/wydarznik
SESSION_SECRET=jakisSekretnyKod

5. Uruchomienie aplikacji:

npm start

Aplikacja będzie działać pod adresem:

http://localhost:3000

📋 Struktura projektu

controllers/         // logika autoryzacji i wydarzeń
models/              // schematy Mongoose
routes/              // ścieżki routingu
views/               // szablony EJS
public/css/          // style aplikacji
public/images/       // zasoby graficzne
.env                 // zmienne środowiskowe
app.js               // główny plik serwera

📁 Plik .env

Przykładowa konfiguracja:

PORT=3000
MONGO_URI=mongodb://localhost:27017/wydarznik
SESSION_SECRET=jakisSekretnyKod

Dzięki temu dane są bezpieczne i nie znajdują się w repozytorium.

🔮 Dodatkowe funkcje

🌜 Tryb ciemny – przełącznik motywu jasnego i ciemnego

📱 Wersja mobilna – pełna responsywność

❌ Obsługa braku danych (empty states)

🔎 Sugestie wydarzeń na podstawie miasta

🗨️ Komentarze i sesje

📝 Użytkownicy mogą dodawać komentarze do wydarzeń — tworząc interaktywną przestrzeń do komunikacji.

🔐 Dane logowania użytkowników są bezpiecznie przechowywane w sesjach, co pozwala na zachowanie stanu logowania przez cały czas trwania sesji.

📄 Licencja

Projekt edukacyjny, stworzony w ramach zaliczenia z Node.js.
Nie do użytku komercyjnego. Autor: Imię i nazwisko / GitHub login





