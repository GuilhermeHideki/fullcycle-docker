FROM golang:1.17-alpine as builder

WORKDIR /app
COPY . .
RUN go build main.go


FROM scratch
COPY --from=builder /app/main /app/main
ENTRYPOINT [ "/app/main" ]
