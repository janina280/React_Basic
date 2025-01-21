# React_Basic

Acest repository conține un proiect de bază realizat cu **React**, destinat învățării și explorării funcționalităților principale ale framework-ului.

## Structura proiectului

- **blog/** - Include componentele și stilurile utilizate pentru a implementa o aplicație de tip blog.
- **data/db.json** - Fișierul JSON utilizat pentru simularea unei baze de date locale.
- **package.json** - Fișierul de configurare pentru dependențe și scripturi.
- **README.md** - Documentația proiectului.
- **package-lock.json** - Gestionează versiunile exacte ale dependențelor.

## Tehnologii utilizate

- **React**: Framework-ul principal utilizat pentru dezvoltarea aplicației.
- **JavaScript**: Limbajul principal de programare.
- **CSS**: Pentru stilizarea componentelor.
- **HTML**: Structura de bază a paginilor.
- **JSON Server**: Utilizat pentru simularea unei baze de date REST.

## Instalare și rulare

1. Clonează acest repository:
   ```bash
   git clone https://github.com/janina280/React_Basic.git

2. Accesează directorul proiectului:
     ```bash
     cd React_Basic

3. Instalează dependențele:
   ```bash
   npm install

4. Rulează proiectul:
    ```bash
    npm start

5. Deschide browser-ul și accesează http://localhost:3000.
   

## Configurarea bazei de date


1. Asigură-te că ai instalat json-server
   ```bash
   npm install -g json-server

2. Rulează serverul JSON cu comanda:
    ```bash
    npx json-server --watch data/db.json --port 8000

3. Serverul va fi disponibil la http://localhost:8000.
