package com.mypackage.services;

import com.mypackage.pojo.Book;
import com.mypackage.repository.BookRepository;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import javax.persistence.EntityManager;
import javax.persistence.Persistence;
import javax.persistence.TypedQuery;
import java.util.List;

@Service
public class BookService implements IBookService {

    private final BookRepository booksRepository;

    public BookService(BookRepository booksRepository) {
        this.booksRepository = booksRepository;
    }

    @Override
    public List<Book> getAllBooks() {
        List<Book> books = (List<Book>) booksRepository.findAll();
        return books;
    }
}
