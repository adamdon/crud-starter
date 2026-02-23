package com.crudstarter.api

import com.crudstarter.model.Item
import com.crudstarter.service.ItemService
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/api")
class ItemController(private val itemService: ItemService) {

    @GetMapping("/readAll")
    fun readAll(): List<Item> = itemService.readAll()

    @PostMapping("/create")
    fun create(@RequestBody item: Item): Item = itemService.create(item)

    @PostMapping("/update")
    fun update(@RequestBody item: Item): Long = itemService.update(item)

    @PostMapping("/delete")
    fun delete(@RequestBody item: Item): Long = itemService.delete(item)
}
