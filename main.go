package main

import (
	"net/http"
	db "portfolio/assets"

	gin "github.com/gin-gonic/gin"
)

func main() {

	r := gin.Default()

	r.Use(func(c *gin.Context) {
		c.Writer.Header().Set("Access-Control-Allow-Origin", "http://localhost:3000")
		c.Writer.Header().Set("Access-Control-Allow-Credentials", "true")
		c.Writer.Header().Set("Access-Control-Allow-Headers", "Content-Type, Content-Length, Authorization")
		c.Writer.Header().Set("Access-Control-Allow-Methods", "POST, OPTIONS, GET, PUT")

		if c.Request.Method == "OPTIONS" {
			c.AbortWithStatus(204)
			return
		}

		c.Next()
	})

	r.GET("/projects", func(c *gin.Context) {
		projects := db.GetAllProjects()

		if c.Query("filtre") != "" {
			filteredProjects := db.GetProjectsByLanguage(c.Query("filtre"))
			c.JSON(http.StatusOK, filteredProjects)
			return
		}

		c.JSON(http.StatusOK, projects)
	})

	r.POST("/login", func(c *gin.Context) {
		username := c.Query("username")
		password := c.Query("password")

		if db.Login(username, password) {
			c.JSON(http.StatusOK, gin.H{"message": "Login successful!"})
		} else {
			c.JSON(http.StatusUnauthorized, gin.H{"message": "Invalid credentials"})
		}
	})

	r.Run(":8080")
}
