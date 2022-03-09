package com.mypackage.controllers;

import com.mypackage.pojo.Book;
import com.mypackage.pojo.BookDaoImpl;
import com.mypackage.pojo.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.awt.*;
import java.util.List;

@RestController
@RequestMapping("/books")
public class LibraryController {

    BookDaoImpl bookDaoImpl;

    @Autowired
    public LibraryController(BookDaoImpl bookDaoImpl) {
        this.bookDaoImpl = bookDaoImpl;
    }


    @GetMapping
    public List<Book> getBooksInfo(){
        //model.addAttribute("books", bdi.allBooks());
        return bookDaoImpl.allBooks();
    }

    @GetMapping(value = "/book/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    public Book show(@PathVariable(value = "id") int id) {
        return bookDaoImpl.getById(id);
    }

}
