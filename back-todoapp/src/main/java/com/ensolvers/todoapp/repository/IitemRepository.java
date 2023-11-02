package com.ensolvers.todoapp.repository;

import com.ensolvers.todoapp.model.entity.Item;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IitemRepository extends JpaRepository<Item, Long> {
}
