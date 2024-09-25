package main

import (
	gin "github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default()

	r.GET("/", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"message": "Hello, Gin with Docker!",
		})
	})

	r.Run(":8080")
}
