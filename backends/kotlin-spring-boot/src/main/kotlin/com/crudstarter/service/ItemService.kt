package com.crudstarter.service

import com.crudstarter.model.Item
import com.crudstarter.repository.ItemRepository
import org.springframework.data.mongodb.core.MongoTemplate
import org.springframework.data.mongodb.core.query.Criteria
import org.springframework.data.mongodb.core.query.Query
import org.springframework.data.mongodb.core.query.Update
import org.springframework.stereotype.Service

@Service
class ItemService(
    private val repository: ItemRepository,
    private val mongoTemplate: MongoTemplate
) {

    fun readAll(): List<Item> = repository.findAll()

    fun create(item: Item): Item = repository.save(item)

    fun update(item: Item): Long = mongoTemplate.updateMulti(
        Query.query(Criteria.where("ref").`is`(item.ref)),
        Update().set("name", item.name),
        Item::class.java
    ).modifiedCount

    fun delete(item: Item): Long = mongoTemplate.remove(
        Query.query(Criteria.where("ref").`is`(item.ref)),
        Item::class.java
    ).deletedCount
}
