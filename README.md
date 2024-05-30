System organizacji wydarzeñ 

1. Opis projektu:

Projekt System organizacji i  wydarzeñ  ma na celu stworzenie platformy, która pozwala u¿ytkownikom przegl¹daæ wydarzenia, tworzyæ, edytowaæ i usuwaæ nowe wydarzenia, a tak¿e listê goœci, która pokazuje, kto mo¿e uczestniczyæ w wydarzeniach. 

*Funkcje
-Tworzenie nowych wydarzeñ
-Edycja szczegó³ów wydarzenia
-Zapraszanie goœci
-Monitorowanie postêpu wydarzenia
-Usuwanie organizacji zdarzeñ

2. Rejestracja i autoryzacja:

Nowi u¿ytkownicy bêd¹ mogli za³o¿yæ konto,Zalogowani u¿ytkownicy bêd¹ równie¿ mogli tworzyæ wydarzenia i organizacje, dodawaæ daty, listy goœci, edytowaæ i usuwaæ je, wprowadzaj¹c swoje dane.

3.Dodaj now¹ organizacjê i wydarzenie:

Zarejestrowani u¿ytkownicy mog¹ dodaæ nowe wydarzenie i organizacjê.Dodawanie organizacji i wydarzenia, nazwy wydarzenia, daty wydarzenia i listy goœci.

4.Edytowaæ i usuwaæ organizacje i wydarzenia :

Zarejestrowani u¿ytkownicy bêd¹ mogli modyfikowaæ i usuwaæ zaplanowane wydarzenia.Zmieniaæ, aktualizowaæ i ca³kowicie usuwaæ dane organizacji i wydarzeñ.

5.Przegl¹danie wydarzeñ i organizacji :

Przegl¹daæ wydarzenia i organizacje, u¿ytkownicy bêd¹ mogli przegl¹daæ zaplanowane wydarzenia.

W skrócie System i  organizacji wydarzeñ pozwala u¿ytkownikom tworzyæ, usuwaæ, zarz¹dzaæ i monitorowaæ ró¿ne wydarzenia. U¿ytkownicy mog¹ zapraszaæ goœci i œledziæ ich udzia³.

6.U¿yte technologie:

app.js
Jest to g³ówny punkt wejœcia aplikacji. Konfiguruje serwer Express, ³¹czy siê z baz¹ danych MongoDB za pomoc¹ Mongoose.

user.js
Definiuje schemat danych u¿ytkownika w MongoDB przy u¿yciu Mongoose. 

event.js
Definiuje schemat danych zdarzeñ w MongoDB przy u¿yciu Mongoose. 

authController.js
Zawiera logikê uwierzytelniania i autoryzacji u¿ytkowników.

/eventController.js
Zawiera logikê zarz¹dzania zdarzeniami.

authRoutes.js
Definiuje trasy zwi¹zane z uwierzytelnianiem u¿ytkowników (logowanie, rejestracja, wylogowanie).

routes/eventRoutes.js
Definiuje trasy zwi¹zane z zarz¹dzaniem zdarzeniami (przegl¹danie, tworzenie, aktualizacja, usuwanie zdarzeñ).

login.ejs
Szablon EJS dla strony logowania.

views/register.ejs
Szablon EJS dla strony rejestracji. 

views/events.ejs
Szablon EJS dla strony wydarzeñ.

views/editEvent.ejs
Szablon EJS do edycji istniej¹cego wydarzenia.

views/newEvent.ejs
Szablon EJS do tworzenia nowego wydarzenia.

public/css/styles.css
(Opcjonalnie) Plik CSS do stylizacji szablonów EJS.

package.json
Ten plik zawiera metadane dotycz¹ce projektu oraz listê zale¿noœci i skryptów projektu.

package-lock.json
Ten plik jest automatycznie generowany przez npm i zawiera dok³adne wersje zainstalowanych zale¿noœci

Instalacja :

Sklonuj repozytorium:
-git clone 
WA¯NE
Po sklonowaniu, aby uruchomiæ ten projekt nale¿y zainstalowaæ:

-Pobieranie MongoDB https://www.mongodb.com/try/download/community i zainstaluj go.
*Aby uruchomiæ aplikacjê, nale¿y zainstalowaæ dodatkowe paczki:
-npm init -y
-npm install express mongoose body-parser express-session helmet bcrypt ejs
-npm install --save-dev nodemon
*Po zainstalowaniu paczek, uruchom aplikacjê za pomoc¹ polecenia:
-npm start

Aplikacja bêdzie dostêpna pod adresem :
http://localhost:3000
