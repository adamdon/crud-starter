package com.crudstarter.service

import com.crudstarter.model.Item
import com.crudstarter.repository.ItemRepository
import org.springframework.data.mongodb.core.MongoTemplate
import org.springframework.data.mongodb.core.query.Criteria
import org.springframework.data.mongodb.core.query.Query
import org.springframework.data.mongodb.core.query.Update
import org.springframework.data.mongodb.core.remove
import org.springframework.data.mongodb.core.updateMulti
import com.mongodb.client.result.DeleteResult
import com.mongodb.client.result.UpdateResult
import org.springframework.stereotype.Service

@Service
class ItemService(
    private val repository: ItemRepository,
    private val mongoTemplate: MongoTemplate
) {

    fun readAll(): List<Item> {
        val items: List<Item> = repository.findAll()

        return items
    }

    fun create(item: Item): Item {
        val savedItem: Item = repository.save(item)

        return savedItem
    }

    fun update(item: Item): Long {
        val criteria: Criteria = Criteria.where("ref").`is`(item.ref)
        val query: Query = Query.query(criteria)
        val update: Update = Update().set("name", item.name)
        val result: UpdateResult = mongoTemplate.updateMulti<Item>(query, update)

        return result.modifiedCount
    }

    fun delete(item: Item): Long {
        val criteria: Criteria = Criteria.where("ref").`is`(item.ref)
        val query: Query = Query.query(criteria)
        val result: DeleteResult = mongoTemplate.remove<Item>(query)

        return result.deletedCount
    }
}
