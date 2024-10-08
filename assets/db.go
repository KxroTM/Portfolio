package db

import (
	"database/sql"
	"fmt"

	"github.com/gofrs/uuid"

	_ "github.com/mattn/go-sqlite3"
)

type Project struct {
	ID          string `json:"id"`
	Title       string `json:"title"`
	Description string `json:"description"`
	Logo        string `json:"logo"`
	LinkText    string `json:"linkText"`
	LinkUrl     string `json:"link"`
}

func checkErr(err error, msg string) {
	if err != nil {
		fmt.Println(msg, err)
		return
	}
}

func UserTableCreate() {
	db, err := sql.Open("sqlite3", "./db/Db.sql")
	checkErr(err, "Error opening database:")
	defer db.Close()

	_, err = db.Exec(`CREATE TABLE IF NOT EXISTS users (
		username TEXT PRIMARY KEY,
		password TEXT)`)
	checkErr(err, "Error creating table users:")
}

func ProjectTableCreate() {
	db, err := sql.Open("sqlite3", "./db/Db.sql")
	checkErr(err, "Error opening database:")
	defer db.Close()

	_, err = db.Exec(`CREATE TABLE IF NOT EXISTS projects (
		id TEXT PRIMARY KEY,
		title TEXT,
		description TEXT,
		logo TEXT,
		linkText TEXT,
		linkUrl TEXT)`)
	checkErr(err, "Error creating table projects:")
}

func GetAllProjects() []Project {
	db, err := sql.Open("sqlite3", "./db/Db.sql")
	checkErr(err, "Error opening database:")
	defer db.Close()

	rows, err := db.Query("SELECT * FROM projects")
	checkErr(err, "Error selecting projects:")
	defer rows.Close()

	projects := []Project{}
	for rows.Next() {
		project := Project{}
		err = rows.Scan(&project.ID, &project.Title, &project.Description, &project.Logo, &project.LinkText, &project.LinkUrl)
		checkErr(err, "Error scanning project:")
		projects = append(projects, project)
	}
	return projects
}

func GetProjectsByLanguage(language string) []Project {
	db, err := sql.Open("sqlite3", "./db/Db.sql")
	checkErr(err, "Error opening database:")
	defer db.Close()

	rows, err := db.Query("SELECT * FROM projects WHERE logo LIKE ?", "%"+language+".png")
	checkErr(err, "Error selecting projects:")
	defer rows.Close()

	projects := []Project{}
	for rows.Next() {
		project := Project{}
		err = rows.Scan(&project.ID, &project.Title, &project.Description, &project.Logo, &project.LinkText, &project.LinkUrl)
		checkErr(err, "Error scanning project:")
		projects = append(projects, project)
	}
	return projects
}

func AddProject(project Project) {
	db, err := sql.Open("sqlite3", "./db/Db.sql")
	checkErr(err, "Error opening database:")
	defer db.Close()

	id := uuid.Must(uuid.NewV4()).String()

	_, err = db.Exec("INSERT INTO projects (id, title, description, logo, linkText, linkUrl) VALUES (?, ?, ?, ?, ?, ?)",
		id, project.Title, project.Description, project.Logo, "Voir le Projet", project.LinkUrl)
	checkErr(err, "Error inserting project:")
}

func DeleteProject(id string) {
	db, err := sql.Open("sqlite3", "./db/Db.sql")
	checkErr(err, "Error opening database:")
	defer db.Close()

	_, err = db.Exec("DELETE FROM projects WHERE id = ?", id)
	checkErr(err, "Error deleting project:")
}

func GetProjectById(id string) Project {
	db, err := sql.Open("sqlite3", "./db/Db.sql")
	checkErr(err, "Error opening database:")
	defer db.Close()

	row := db.QueryRow("SELECT * FROM projects WHERE id = ?", id)

	project := Project{}
	err = row.Scan(&project.ID, &project.Title, &project.Description, &project.Logo, &project.LinkText, &project.LinkUrl)
	checkErr(err, "Error scanning project:")

	return project
}

func EditProject(project Project) {
	db, err := sql.Open("sqlite3", "./db/Db.sql")
	checkErr(err, "Error opening database:")
	defer db.Close()

	_, err = db.Exec("UPDATE projects SET title = ?, description = ?, logo = ?, linkUrl = ? WHERE id = ?",
		project.Title, project.Description, project.Logo, project.LinkUrl, project.ID)
	checkErr(err, "Error updating project:")
}
