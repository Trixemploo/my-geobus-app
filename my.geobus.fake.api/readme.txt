1. mettre .json et .jar dans le même dossier
2. dans le command prompt écrire:
java -jar my-geobus-fake-api-1.0.jar

3. aller au http://localhost:8999/applications dans Insomnia ou Postman


si besoin de changer le port, arrêter l'appli avec Ctrl-C et taper:
java -jar my-geobus-fake-api-1.0.jar --server.port=8999