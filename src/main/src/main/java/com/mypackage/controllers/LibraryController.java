package com.mypackage.controllers;

import com.mypackage.pojo.Book;
import com.mypackage.services.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/books")
public class LibraryController {

    private final BookService bookService;

    @Autowired
    public LibraryController(BookService bookService) {
        this.bookService = bookService;
    }


    @GetMapping
    public List<Book> main(){
        return bookService.getAllBooks();
    }

   /* @GetMapping(value = "/book/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    public Book show(@PathVariable(value = "id") int id) {
        return bookDaoImpl.getById(id);
    }*/

}
