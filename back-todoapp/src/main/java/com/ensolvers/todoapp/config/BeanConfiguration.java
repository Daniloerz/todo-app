package com.ensolvers.todoapp.config;

import com.ensolvers.todoapp.mapper.ItemRequestMapper;
import com.ensolvers.todoapp.mapper.ItemResponseMapper;
import com.ensolvers.todoapp.repository.IitemRepository;
import com.ensolvers.todoapp.service.ItemServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
@RequiredArgsConstructor
public class BeanConfiguration {

    private final IitemRepository iitemRepository;
    private final ItemResponseMapper itemResponseMapper;
    private final ItemRequestMapper itemRequestMapper;

    @Bean
    public ItemServiceImpl itemService(IitemRepository iitemRepository,
                                       ItemResponseMapper itemResponseMapper,
                                       ItemRequestMapper itemRequestMapper){
        return new ItemServiceImpl(iitemRepository, itemResponseMapper,itemRequestMapper);
    }
}
