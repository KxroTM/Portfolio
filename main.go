package main

import (
	"net/http"
	db "portfolio/assets"

	gin "github.com/gin-gonic/gin"
)

func main() {
	db.UserTableCreate()
	db.ProjectTableCreate()

	r := gin.Default()

	r.GET("/projects", func(c *gin.Context) {
		projects := db.GetAllProjects()

		c.JSON(http.StatusOK, projects)
	})

	r.Run(":8080")
}
