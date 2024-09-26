package db

import (
	"database/sql"
	"fmt"

	_ "github.com/mattn/go-sqlite3"
)

func checkErr(err error, msg string) {
	if err != nil {
		fmt.Println(msg, err)
		return
	}
}
func UserTableCreate() {
	// co a la base de données
	db, err := sql.Open("sqlite3", "./db/Db.sql")
	checkErr(err, "Error opening database:")
	defer db.Close()

	// Crée la table users
	_, err = db.Exec(`CREATE TABLE IF NOT EXISTS users (
		username TEXT PRIMARY KEY,
		password TEXT)`)
	checkErr(err, "Error creating table users:")
}

func ProjectTableCreate() {

}
