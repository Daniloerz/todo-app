package com.ensolvers.todoapp.mapper;

import com.ensolvers.todoapp.model.dto.ItemDtoResponse;
import com.ensolvers.todoapp.model.entity.Item;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface ItemResponseMapper {
    List<ItemDtoResponse> entityToDtoList(List<Item> item);

    ItemDtoResponse entityToDtoResponse(Item item);
}
