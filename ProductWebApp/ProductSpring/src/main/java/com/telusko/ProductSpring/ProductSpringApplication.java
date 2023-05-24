package com.telusko.ProductSpring;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

import java.util.stream.Stream;

@SpringBootApplication
public class ProductSpringApplication {

	public static void main(String[] args) {
		ApplicationContext context = SpringApplication.run(ProductSpringApplication.class, args);
		ProductService service = context.getBean(ProductService.class);
		Stream<Product> products = service.getAllProducts();
		products.forEach(p -> System.out.println(p));

		System.out.println("==============================================");
		System.out.println("Getting a product by name");
		Product prod = service.getProduct("Logi Mouse");
		System.out.println(prod);

		System.out.println("==============================================");
		System.out.println("a Particular text");

		products = service.getProductWithText("black");
		products.forEach(p -> System.out.println(p));


		System.out.println("==============================================");
		System.out.println("Products in a particular place");
		products = service.getProductInPlace("White Table");
		products.forEach(p -> System.out.println(p));

		System.out.println("==============================================");
		System.out.println("Getting products out of warrenty");
		products = service.getProductsWithoutWarrenty();
		products.forEach(p -> System.out.println(p));

	}
}
