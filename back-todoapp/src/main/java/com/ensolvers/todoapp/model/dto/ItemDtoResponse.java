package com.ensolvers.todoapp.model.dto;

import lombok.Data;

@Data
public class ItemDtoResponse {

    private Long id;
    private String title;
    private String description;
    private String category;
    private String status;

}
