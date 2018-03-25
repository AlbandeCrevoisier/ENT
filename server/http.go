package main

import(
	"log"
	"net/http"
)

func main() {
	log.Printf("Server started.")
	log.Fatal(http.ListenAndServe("localhost:8080", http.FileServer(http.Dir("/home/archie/telecom/4A/ent/web/"))))
}

