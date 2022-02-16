package com.mypackage.pojo;

import org.springframework.stereotype.Component;

import javax.persistence.EntityManager;
import javax.persistence.Persistence;
import javax.persistence.TypedQuery;
import java.util.List;


public class BookService {
    /*public EntityManager em = Persistence.createEntityManagerFactory("entityManager").createEntityManager();

    public Book add(Book book){
        em.getTransaction().begin();
        Book bookFromDB = em.merge(book);
        em.getTransaction().commit();
        return bookFromDB;
    }

    public void delete(int id){
        em.getTransaction().begin();
        em.remove(get(id));
        em.getTransaction().commit();
    }

    public Book get(int id){
        return em.find(Book.class, id);
    }

    public void update(Book car){
        em.getTransaction().begin();
        em.merge(car);
        em.getTransaction().commit();
    }

    public List<Book> getAll(){
        TypedQuery<Book> namedQuery = em.createNamedQuery("Book.getAll", Book.class);
        return namedQuery.getResultList();
    }*/
}
