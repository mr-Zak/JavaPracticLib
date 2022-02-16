package com.mypackage.dao;

import com.mypackage.pojo.Book;

import java.sql.SQLException;
import java.util.List;

public interface BookDAO {
    List<Book> allBooks();
    void addBook(Book books) throws SQLException;
    void deleteBook(Book books);
    void edit(Book books);
    Book getById(int id);
}
