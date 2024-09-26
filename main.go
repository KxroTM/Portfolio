package main

import (
	"net/http"
	db "portfolio/assets"

	gin "github.com/gin-gonic/gin"
)

func main() {
	db.AddProject(db.Project{
		ID:          "1",
		Title:       "Portfolio",
		Description: "Mon portfolio",
		Logo:        "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
		LinkText:    "Voir le projet",
		LinkUrl:     "https://www.google.com",
	})

	r := gin.Default()

	r.GET("/projects", func(c *gin.Context) {
		projects := db.GetAllProjects()

		if c.Query("filtre") != "" {
			filteredProjects := db.GetProjectsByLanguage(c.Query("filtre"))
			c.JSON(http.StatusOK, filteredProjects)
			return
		}

		c.JSON(http.StatusOK, projects)
	})

	r.Run(":8080")
}
