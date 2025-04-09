andare sotto la cartella creazione_immagine e eseguire il comando:
```bash
docker build -t nodeapp:1.0.0 .
```

andare sotto la cartella uso_immagine e eseguire il comando:
```bash
docker-compose up -d --build
```

andare sul host localhost:8888 si dovrebbe vedere una quary con alcune infotrmazioni sul db