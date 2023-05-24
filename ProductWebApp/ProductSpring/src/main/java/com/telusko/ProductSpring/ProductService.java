package com.telusko.ProductSpring;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.time.Year;
import java.util.List;
import java.util.stream.Stream;
@Service
public class ProductService {
    @Autowired
    ProductDB db;

    public Stream<Product> getAllProducts() {
        List<Product> prods = db.findAll();
        Stream<Product> productStream = prods.stream();
        return productStream;
    }

    public Product getProduct(String name){
        return db.findByName(name);
    }

    public Stream<Product> getProductWithText(String text) {
        String str = text.toLowerCase();
        List<Product> prods = db.findBySubstring(text);
        Stream<Product> products = prods.stream();
        return products;
    }

    public Stream<Product> getProductInPlace(String text) {
        String str = text.toLowerCase();
        List<Product> prods = db.findByPlace(text);
        Stream<Product> products = prods.stream();
        return products;
    }

    public Stream<Product> getProductsWithoutWarrenty() {
        int year = Year.now().getValue();
        List<Product> products = db.findByWarrantyLessThan(year);
        Stream<Product> prods = products.stream();
         return prods;
     }
}
