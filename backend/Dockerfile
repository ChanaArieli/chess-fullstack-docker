FROM openjdk:8
ADD target/docker-chess.jar docker-chess.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "docker-chess.jar"]
