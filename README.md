# nutflix-series-java-api
API de gestion des séries pour le démonstrateur Nutflix

## Technologies

Cette API fonctionne dans un environnement Kubernetes et embarque son propre Tomcat.
 
**La stack utilisée est  :**

- :metal: [Java 11](https://openjdk.java.net/projects/jdk/11/) : le langage ! 
- :wrench: [Iris-back-java](https://github.com/ugieiris/u-iris-back-java) : outillage Iris, v1.0.0 
- :electric_plug: [SpringBoot](https://spring.io/projects/spring-boot) : Framework Spring 2.3.1.RELEASE
- :whale: [Docker](https://docs.docker.com/) : conteneurisation de l'api à partir de l'image OpenJdk 11 Iris
- :rocket: [Kubernetes](https://kubernetes.io/) : pour déployer l'image docker  
- :card_index: [Flyway](https://flywaydb.org/) : pour versionner le schéma de BDD
- :floppy_disk: [PostgreSql](https://www.postgresql.org/docs/9.6/index.html) : SGBD v9.6
- :green_book: [Stoplight](https://stoplight.io/p/docs/gh/stoplightio/studio) : pour concevoir le swagger
- :kimono: [OpenApi v3](https://swagger.io/) : pour décrire le swagger
- :white_check_mark: [Mockito](https://site.mockito.org/) : tests unitaires


**Liens complémentaires :**

- :page_facing_up: [Migrer un projet existant en Java 11](https://wikidev.groupement.systeme-u.fr/wikidev/doku.php/tran/java/faq/migrer_un_projet_existant_en_java_11)
- :page_facing_up: [Conteneuriser et migrer votre API Spring Boot sous Kubernetes](https://wikidev.groupement.systeme-u.fr/wikidev/doku.php/tran/java/faq/conteneuriser_et_migrer_votre_api_spring_boot_sur_kubernetes)
- :file_folder: [Descripteurs Kubernetes de base](https://github.com/ugieiris/k8s-deploy-base/tree/master/apps)
- :file_folder: [Descripteurs Kubernetes d'intégration](https://github.com/ugieiris/k8s-deploy-int/tree/master/onprem/apps)
- :page_facing_up: [Framework Flywaydb](https://wikidev.groupement.systeme-u.fr/wikidev/doku.php/tran/java/faq/comment_mettre_en_place_flyway_pour_gerer_la_bdd_de_son_application?s[]=flyway)
 
## Installation

> installation des dépendances

```shell
$ mvn clean install
```

> démarrage de l'api

```shell
$ mvn spring-boot:run "-Dspring-boot.run.profiles=dev" 
```
