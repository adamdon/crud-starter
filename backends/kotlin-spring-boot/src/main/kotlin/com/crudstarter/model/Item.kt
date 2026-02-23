package com.crudstarter.model

import com.fasterxml.jackson.annotation.JsonProperty
import org.springframework.data.annotation.Id
import org.springframework.data.mongodb.core.mapping.Document

@Document(collection = "items")
data class Item(
    @Id
    @JsonProperty("_id")
    val id: String? = null,
    val ref: String,
    val name: String
)
