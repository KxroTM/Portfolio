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

	r.Run(":8080")
}
