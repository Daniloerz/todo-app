package com.ensolvers.todoapp.mapper;

import com.ensolvers.todoapp.model.dto.ItemDtoRequest;
import com.ensolvers.todoapp.model.entity.Item;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface ItemRequestMapper {

    Item requestToEntity (ItemDtoRequest itemDtoRequest);
}
