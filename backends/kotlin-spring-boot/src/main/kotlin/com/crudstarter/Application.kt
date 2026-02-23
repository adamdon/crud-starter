package com.crudstarter

import com.crudstarter.repository.ItemRepository
import org.springframework.boot.CommandLineRunner
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.context.annotation.Bean
import org.springframework.data.mongodb.core.MongoTemplate

@SpringBootApplication
class Application {

    @Bean
    fun onStartup(repository: ItemRepository, mongoTemplate: MongoTemplate) =
        CommandLineRunner {
            val db = mongoTemplate.db
            println("MongoDB Connected: ${db.name}")
            repository.deleteAll()
        }
}

fun main(args: Array<String>) {
    println("Backend Starting ...")
    val mongoUri = System.getenv("MONGO_URI")
    if (!mongoUri.isNullOrBlank()) {
        println("Connecting to database - MONGO_URI: $mongoUri")
        System.setProperty("spring.mongodb.uri", mongoUri)
    } else {
        println("Connecting to fallback in memory database - MONGO_URI not set")
    }
    runApplication<Application>(*args)
}
