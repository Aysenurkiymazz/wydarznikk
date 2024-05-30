System organizacji wydarzeń 

1. Opis projektu:

Projekt System organizacji i  wydarzeń  ma na celu stworzenie platformy, która pozwala użytkownikom przeglądać wydarzenia, tworzyć, edytować i usuwać nowe wydarzenia, a także listę gości, która pokazuje, kto może uczestniczyć w wydarzeniach. 

*Funkcje
-Tworzenie nowych wydarzeń

-Edycja szczegółów wydarzenia

-Zapraszanie gości

-Monitorowanie postępu wydarzenia

-Usuwanie organizacji zdarzeń

2. Rejestracja i autoryzacja:

Nowi użytkownicy będą mogli założyć konto,Zalogowani użytkownicy będą również mogli tworzyć wydarzenia i organizacje, dodawać daty, listy gości, edytować i usuwać je, wprowadzając swoje dane.

3.Dodaj nową organizację i wydarzenie:

Zarejestrowani użytkownicy mogą dodać nowe wydarzenie i organizację.Dodawanie organizacji i wydarzenia, nazwy wydarzenia, daty wydarzenia i listy gości.

4.Edytować i usuwać organizacje i wydarzenia :

Zarejestrowani użytkownicy będą mogli modyfikować i usuwać zaplanowane wydarzenia.Zmieniać, aktualizować i całkowicie usuwać dane organizacji i wydarzeń.

5.Przeglądanie wydarzeń i organizacji :

Przeglądać wydarzenia i organizacje, użytkownicy będą mogli przeglądać zaplanowane wydarzenia.

W skrócie System i  organizacji wydarzeń pozwala użytkownikom tworzyć, usuwać, zarządzać i monitorować różne wydarzenia. Użytkownicy mogą zapraszać gości i śledzić ich udział.

6.Użyte technologie:

app.js

Jest to główny punkt wejścia aplikacji. Konfiguruje serwer Express, łączy się z bazą danych MongoDB za pomocą Mongoose.

user.js

Definiuje schemat danych użytkownika w MongoDB przy użyciu Mongoose. 

event.js

Definiuje schemat danych zdarzeń w MongoDB przy użyciu Mongoose. 

authController.js

Zawiera logikę uwierzytelniania i autoryzacji użytkowników.

/eventController.js

Zawiera logikę zarządzania zdarzeniami.

authRoutes.js

Definiuje trasy związane z uwierzytelnianiem użytkowników (logowanie, rejestracja, wylogowanie).

routes/eventRoutes.js

Definiuje trasy związane z zarządzaniem zdarzeniami (przeglądanie, tworzenie, aktualizacja, usuwanie zdarzeń).

login.ejs

Szablon EJS dla strony logowania.

views/register.ejs

Szablon EJS dla strony rejestracji. 

views/events.ejs

Szablon EJS dla strony wydarzeń.

views/editEvent.ejs

Szablon EJS do edycji istniejącego wydarzenia.

views/newEvent.ejs

Szablon EJS do tworzenia nowego wydarzenia.

public/css/styles.css

(Opcjonalnie) Plik CSS do stylizacji szablonów EJS.

package.json

Ten plik zawiera metadane dotyczące projektu oraz listę zależności i skryptów projektu.

package-lock.json

Ten plik jest automatycznie generowany przez npm i zawiera dokładne wersje zainstalowanych zależności

Instalacja :

Sklonuj repozytorium:

-git clone

WAŻNE

Po sklonowaniu, aby uruchomić ten projekt należy zainstalować:

-Pobieranie MongoDB https://www.mongodb.com/try/download/community i zainstaluj go.

*Aby uruchomić aplikację, należy zainstalować dodatkowe paczki:

-npm init -y

-npm install express mongoose body-parser express-session helmet bcrypt ejs

-npm install --save-dev nodemon

*Po zainstalowaniu paczek, uruchom aplikację za pomocą polecenia:

-npm start

Aplikacja będzie dostępna pod adresem :
http://localhost:3000
