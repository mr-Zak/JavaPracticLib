package com.mypackage.pojo;

import com.mypackage.dao.BookDAO;
import org.springframework.jdbc.core.RowCallbackHandler;
import org.springframework.stereotype.Component;

import javax.imageio.stream.FileImageInputStream;
import java.awt.*;
import java.io.File;
import java.io.FileInputStream;
import java.io.InputStream;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

@Component
public class BookDaoImpl implements BookDAO{

    @Override
    public List<Book> allBooks() {
        ArrayList<Book> bookList = new ArrayList<Book>();
        PSQLClient client = new PSQLClient();
        client.getTemplate().query("SELECT * FROM lib_books", (RowCallbackHandler) rs -> {
            Book book = new Book();
            book.setId(rs.getInt(1));
            book.setName(rs.getString(2).trim());
            book.setFilePath(rs.getString(3).trim());
            book.setImagePath(rs.getString(4).trim());
            bookList.add(book);
        });
        client.getContext().close();

        return bookList;
    }

    @Override
    public void addBook(Book book) {
        PSQLClient client = new PSQLClient();
        File file = new File("C:/Users/a.zakirov/IdeaProjects/untitled1/src/main/resources/static/image/hp_1.png");
        try(PreparedStatement ps = client.getDataSource().getConnection().prepareStatement("INSERT INTO lib_books(bookname, bookfilepath, imagepath) VALUES( ?, ?, ?)")) {
//            FileInputStream fis = new FileInputStream(file);
            ps.setString(1, book.getName());
            ps.setString(2, book.getFilePath());
            ps.setString(3, book.getImagePath());
            client.getDataSource().getConnection().commit();
//            fis.close();
        } catch (Exception e){
            e.printStackTrace();
        } finally {
            client.getContext().close();
        }

    }

    @Override
    public void deleteBook(Book books) {
        PSQLClient client = new PSQLClient();
        try(PreparedStatement ps = client.getDataSource().getConnection().prepareStatement("Delete FROM lib_books WHERE id = ?")) {
            ps.setInt(1, books.getId());
            ps.executeUpdate();
        } catch (Exception e){
            e.printStackTrace();
        }
        client.getContext().close();
    }

    @Override
    public void edit(Book books) {

    }

    @Override
    public Book getById(int id) {
        Book book = new Book();
        PSQLClient client = new PSQLClient();
        try(PreparedStatement ps = client.getDataSource().getConnection().prepareStatement("SELECT * FROM lib_books WHERE id = ?")) {
            ps.setInt(1, id);
            ResultSet result = ps.executeQuery();
            while(result.next()){
                book.setId(result.getInt( 1));
                book.setName(result.getString(2).trim());
                book.setFilePath(result.getString(3).trim());
                book.setImagePath(result.getString(4).trim());
            }
        } catch (Exception e){
            e.printStackTrace();
        }
        finally {
            client.getContext().close();
            return book;
        }
    }
}
