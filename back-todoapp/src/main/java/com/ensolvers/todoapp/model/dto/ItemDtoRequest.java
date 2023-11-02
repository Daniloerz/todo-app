package com.ensolvers.todoapp.model.dto;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

@Data
public class ItemDtoRequest {

    @JsonIgnore
    private Long id;
    private String title;
    private String description;
    private String category;
    private String status;

}
