package com.ensolvers.todoapp.service;

import com.ensolvers.todoapp.mapper.ItemRequestMapper;
import com.ensolvers.todoapp.mapper.ItemResponseMapper;
import com.ensolvers.todoapp.model.dto.ItemDtoRequest;
import com.ensolvers.todoapp.model.dto.ItemDtoResponse;
import com.ensolvers.todoapp.model.entity.Item;
import com.ensolvers.todoapp.repository.IitemRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class ItemServiceImplTest {

    @InjectMocks
    private ItemServiceImpl itemService;

    @Mock
    private IitemRepository itemRepository;

    @Mock
    private ItemResponseMapper itemResponseMapper;

    @Mock
    private ItemRequestMapper itemRequestMapper;

    @BeforeEach
    public void setUp() {
        MockitoAnnotations.initMocks(this);
    }

    @Test
    public void testGetAllItems() {
        List<Item> itemList = new ArrayList<>();
        Item item1 = new Item();
        Item item2 = new Item();
        itemList.add(item1);
        itemList.add(item2);

        List<ItemDtoResponse> itemDtoResponseList = new ArrayList<>();
        ItemDtoResponse dto1 = new ItemDtoResponse();
        ItemDtoResponse dto2 = new ItemDtoResponse();
        itemDtoResponseList.add(dto1);
        itemDtoResponseList.add(dto2);

        when(itemRepository.findAll()).thenReturn(itemList);
        when(itemResponseMapper.entityToDtoList(itemList)).thenReturn(itemDtoResponseList);

        List<ItemDtoResponse> result = itemService.getAllItems();

        assertNotNull(result);
        assertEquals(2, result.size());
        verify(itemRepository, times(1)).findAll();
        verify(itemResponseMapper, times(1)).entityToDtoList(itemList);
    }

    @Test
    public void testCreateItem() {
        ItemDtoRequest itemDtoRequest = new ItemDtoRequest();
        Item item = new Item();
        ItemDtoResponse itemDtoResponse = new ItemDtoResponse();

        when(itemRequestMapper.requestToEntity(itemDtoRequest)).thenReturn(item);
        when(itemRepository.save(item)).thenReturn(item);
        when(itemResponseMapper.entityToDtoResponse(item)).thenReturn(itemDtoResponse);

        ItemDtoResponse result = itemService.createItem(itemDtoRequest);

        assertNotNull(result);
        assertEquals(itemDtoResponse, result);
        verify(itemRequestMapper, times(1)).requestToEntity(itemDtoRequest);
        verify(itemRepository, times(1)).save(item);
        verify(itemResponseMapper, times(1)).entityToDtoResponse(item);
    }

    @Test
    public void testUpdateItem() {
        Long id = 1L;
        ItemDtoRequest itemDtoRequest = new ItemDtoRequest();
        Item itemToBeUpdated = new Item();

        when(itemRepository.findById(id)).thenReturn(Optional.of(itemToBeUpdated));
        when(itemRepository.save(itemToBeUpdated)).thenReturn(itemToBeUpdated);

        ItemDtoResponse result = itemService.updateItem(itemDtoRequest, id);

        verify(itemRepository, times(1)).findById(id);
        verify(itemRepository, times(1)).save(itemToBeUpdated);
    }

    @Test
    public void testDeleteItem() {
        Long id = 1L;
        Item item = new Item();
        ItemDtoResponse itemDtoResponse = new ItemDtoResponse();

        when(itemRepository.findById(id)).thenReturn(Optional.of(item));
        when(itemResponseMapper.entityToDtoResponse(item)).thenReturn(itemDtoResponse);

        ItemDtoResponse result = itemService.deleteItem(id);

        assertNotNull(result);
        verify(itemRepository, times(1)).findById(id);
        verify(itemRepository, times(1)).deleteById(id);
    }
}