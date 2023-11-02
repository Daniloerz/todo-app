package com.ensolvers.todoapp.service;

import com.ensolvers.todoapp.config.exceptions.NotFoundException;
import com.ensolvers.todoapp.mapper.ItemRequestMapper;
import com.ensolvers.todoapp.mapper.ItemResponseMapper;
import com.ensolvers.todoapp.model.dto.ItemDtoRequest;
import com.ensolvers.todoapp.model.dto.ItemDtoResponse;
import com.ensolvers.todoapp.model.entity.Item;
import com.ensolvers.todoapp.repository.IitemRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;


@Service
@RequiredArgsConstructor
public class ItemServiceImpl implements IItemService{

    private final IitemRepository iitemRepository;
    private final ItemResponseMapper itemResponseMapper;
    private final ItemRequestMapper itemRequestMapper;

    @Transactional(readOnly = true)
    public List<ItemDtoResponse> getAllItems(){
        return itemResponseMapper.entityToDtoList(iitemRepository.findAll());
    }

    public ItemDtoResponse getItemResponseById(Long itemId) {
        Item item = getItemEntityByid(itemId);
        return itemResponseMapper.entityToDtoResponse(item);
    }

    @Transactional
    public ItemDtoResponse createItem(ItemDtoRequest itemDtoRequest) {
        Item item = itemRequestMapper.requestToEntity(itemDtoRequest);
        return itemResponseMapper.entityToDtoResponse(iitemRepository.save(item));
    }

    @Transactional
    public ItemDtoResponse updateItem(ItemDtoRequest itemDtoRequest, Long id) {
        Item itemToBeUpdate = getItemEntityByid(id);
        itemToBeUpdate.setTitle(itemDtoRequest.getTitle());
        itemToBeUpdate.setDescription(itemDtoRequest.getDescription());
        itemToBeUpdate.setCategory(itemDtoRequest.getCategory());
        return itemResponseMapper.entityToDtoResponse(iitemRepository.save(itemToBeUpdate));
    }

    @Transactional
    public ItemDtoResponse updateItemStatus(Long itemId, String status) {
        Item itemToBeUpdate = getItemEntityByid(itemId);
        itemToBeUpdate.setStatus(status);
        return itemResponseMapper.entityToDtoResponse(iitemRepository.save(itemToBeUpdate));
    }

    @Transactional
    public ItemDtoResponse deleteItem(Long id){

        ItemDtoResponse itemDtoResponse= getItemResponseById(id);
        iitemRepository.deleteById(id);

        return itemDtoResponse;
    }

    @Transactional(readOnly = true)
    public Item getItemEntityByid (Long itemId){
        return iitemRepository.findById(itemId)
                .orElseThrow(() -> new NotFoundException("No data found exception"));
    }

}
