FROM golang:1.21.6

RUN curl -sL https://deb.nodesource.com/setup_16.x | bash - \
    && apt-get install -y nodejs

WORKDIR /

COPY go.mod go.sum ./
RUN go mod download

COPY . .

RUN npm install

EXPOSE 8080
EXPOSE 3000

CMD ["sh", "-c", "go run main.go & npm start"]
