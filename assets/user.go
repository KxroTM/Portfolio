package db

import (
	"database/sql"
	"fmt"
	"regexp"
	"unicode"
)

func Login(username string, password string) bool {
	db, err := sql.Open("sqlite3", "./db/Db.sql")
	checkErr(err, "Error opening database:")
	defer db.Close()

	var passwordDB string
	err = db.QueryRow("SELECT password FROM users WHERE username = ?", username).Scan(&passwordDB)
	if err != nil {
		return false
	}
	if passwordDB == password {
		fmt.Println("Login success")
		return true
	}
	return false
}
func Register(username string, password string) bool {
	db, err := sql.Open("sqlite3", "./db/Db.sql")
	checkErr(err, "Error opening database:")
	defer db.Close()

	var passwordDB string
	err = db.QueryRow("SELECT password FROM users WHERE username = ?", username).Scan(&passwordDB)
	if err == nil {
		return false
	}

	_, err = db.Exec("INSERT INTO users (username, password) VALUES (?, ?)", username, password)
	checkErr(err, "Error inserting user:")
	if err := validatePassword(password); err != nil {
		fmt.Println("Password validation failed:", err)
		return false
	}
	return true

}
func validatePassword(password string) error {
	if len(password) < 5 || len(password) > 16 {
		return fmt.Errorf("le mot de passe doit avoir entre 8 et 16 caractères")
	}

	if containsSpace(password) {
		return fmt.Errorf("le mot de passe ne doit pas contenir d'espace")
	}

	if IsPasswordValid(password) {
		return fmt.Errorf("le mot de passe doit contenir uniquement des lettres et des chiffres")
	}

	return nil
}
func containsSpace(s string) bool {
	for _, r := range s {
		if r == ' ' {
			return true
		}
	}
	return false
}
func IsPasswordValid(password string) bool {
	if len(password) < 8 {
		return false
	}

	lowerCheck := false
	upperCheck := false
	digitCheck := false
	specialCharCheck := false

	specialCharsPattern := `[^a-zA-Z0-9]`
	regexp := regexp.MustCompile(specialCharsPattern)

	for _, char := range password {
		if unicode.IsLower(char) {
			lowerCheck = true
		}
		if unicode.IsUpper(char) {
			upperCheck = true
		}
		if unicode.IsDigit(char) {
			digitCheck = true
		}
		if regexp.MatchString(string(char)) {
			specialCharCheck = true
		}
	}

	return lowerCheck && upperCheck && digitCheck && specialCharCheck
}
