package com.telusko.ProductSpringWeb;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ProductController {
    @Autowired
    ProductService service;
    @GetMapping("/products")
    public List<Product> getAllProducts() {
        return service.getAllProducts();
    }

    @GetMapping("/product/{name}")
    public Product getProduct(@PathVariable String name) {
        return service.getProduct(name);
    }

    @PostMapping("/product")
    public void addProduct(@RequestBody Product p) {
        service.addProduct(p);

    }

    @GetMapping("/product/search/{text}")
    public List<Product> getProductWithText(@PathVariable String text) {
        return service.getProductWithText(text);
    }

    @GetMapping("/product/place/{place}")
    public List<Product> getProductInPlace(@PathVariable String place) {
        return service.getProductInPlace(place);
    }

    @GetMapping("/product/no-warranty")
    public List<Product> getProductsWithoutWarranty() {
        return service.getProductsWithoutWarranty();
    }
}
