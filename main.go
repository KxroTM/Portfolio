package main

import (
	"net/http"
	db "portfolio/assets"

	gin "github.com/gin-gonic/gin"
)

func main() {

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
	r.GET("/login", func(c *gin.Context) {
		username := c.Query("username")
		password := c.Query("password")

		if db.Login(username, password) {
			c.JSON(http.StatusOK, gin.H{"message": "User exists"})
			return
		}
	})

	r.Run(":8080")
}
