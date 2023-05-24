package com.telusko.ProductSpringWeb;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface ProductDB extends JpaRepository<Product, Integer> {
    Product findByName(String name);

    List<Product> findByPlace(String text);

    List<Product> findByWarrantyLessThan(int year);

    @Query("SELECT e FROM Product e WHERE LOWER(e.name) LIKE %:substring% " +
            "OR LOWER(e.type) LIKE %:substring% " +
            "OR LOWER(e.place) LIKE %:substring%")
    List<Product> findBySubstring(String substring);


}
