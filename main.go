package main

import (
	db "portfolio/assets"
	// gin "github.com/gin-gonic/gin"
)

func main() {
	db.Tablecreate()
	db.Register("dgzrgzrgf", "Ffa@!§42e5")

	// r := gin.Default()

	// r.GET("/", func(c *gin.Context) {
	// 	c.JSON(200, gin.H{
	// 		"message": "Hello, Gin with Docker!",
	// 	})
	// })

	// r.Run(":8080")

}
