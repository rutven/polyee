# Build
mvn clean package && docker build -t name.legkodymov.javaee8/service .

# RUN

docker rm -f service || true && docker run -d -p 8080:8080 -p 4848:4848 --name service name.legkodymov.javaee8/service 