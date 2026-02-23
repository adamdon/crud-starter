package com.crudstarter.repository

import com.crudstarter.model.Item
import org.springframework.data.mongodb.repository.MongoRepository

interface ItemRepository : MongoRepository<Item, String>
