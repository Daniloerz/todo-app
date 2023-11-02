package com.ensolvers.todoapp.service;

import com.ensolvers.todoapp.model.dto.ItemDtoRequest;
import com.ensolvers.todoapp.model.dto.ItemDtoResponse;
import com.ensolvers.todoapp.model.entity.Item;

import java.util.List;

public interface IItemService {

    public List<ItemDtoResponse> getAllItems();

    public ItemDtoResponse getItemResponseById(Long itemId);

    public ItemDtoResponse createItem(ItemDtoRequest itemDtoRequest);

    public ItemDtoResponse updateItem(ItemDtoRequest itemDtoRequest, Long id);

    public ItemDtoResponse updateItemStatus(Long itemId, String state);

    public ItemDtoResponse deleteItem(Long id);

    public Item getItemEntityByid (Long itemId);

}
