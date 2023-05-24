package com.telusko.ProductSpringWeb;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.Year;
import java.util.List;
import java.util.stream.Stream;
@Service
public class ProductService {
    @Autowired
    ProductDB db;

    public List<Product> getAllProducts() {
        List<Product> prods = db.findAll();
        return prods;
    }

    public Product getProduct(String name){
        return db.findByName(name);
    }

    public void addProduct(Product p) {
        db.save(p);
    }

    public List<Product> getProductWithText(String text) {
        String str = text.toLowerCase();
        return db.findBySubstring(str);
    }

    public List<Product> getProductInPlace(String text) {
        String str = text.toLowerCase();
        return db.findByPlace(text);
    }

    public List<Product> getProductsWithoutWarranty() {
        int year = Year.now().getValue();
        return db.findByWarrantyLessThan(year);
     }
}
