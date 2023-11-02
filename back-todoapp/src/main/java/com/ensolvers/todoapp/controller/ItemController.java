package com.ensolvers.todoapp.controller;

import com.ensolvers.todoapp.model.dto.ItemDtoRequest;
import com.ensolvers.todoapp.model.dto.ItemDtoResponse;
import com.ensolvers.todoapp.service.IItemService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/items")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:5173")
public class ItemController {

    private final IItemService itemService;

    @PostMapping
    ResponseEntity<?> createItem (@RequestBody ItemDtoRequest itemDtoRequest){

        return ResponseEntity.ok(itemService.createItem(itemDtoRequest));
    }

    @GetMapping
    ResponseEntity<?> getItems(){
        List<ItemDtoResponse> itemDtoResponseList = itemService.getAllItems();

        return ResponseEntity.ok(itemDtoResponseList);
    }

    @PutMapping ("/{id}")
    ResponseEntity<?> updateItem (@RequestBody ItemDtoRequest itemDtoRequest,
                                                @PathVariable Long id){

        return ResponseEntity.ok(itemService.updateItem(itemDtoRequest, id));
    }

    @PatchMapping("/{id}")
    ResponseEntity<?> updateStatusItem (@RequestParam String status,
                                                @PathVariable Long id){
        return ResponseEntity.ok(itemService.updateItemStatus(id, status));
    }

    @DeleteMapping("/{id}")
    ResponseEntity<?> deleteItem (@PathVariable Long id){

        return ResponseEntity.ok(itemService.deleteItem(id));
    }
}