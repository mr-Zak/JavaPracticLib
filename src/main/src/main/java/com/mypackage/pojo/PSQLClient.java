package com.mypackage.pojo;

import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.jdbc.core.JdbcTemplate;

import javax.sql.DataSource;
import java.sql.Connection;
import java.sql.DriverManager;

public class PSQLClient {

    //Connection connection;
    private ClassPathXmlApplicationContext context;
    private DataSource dataSource;
    private JdbcTemplate template;

    public PSQLClient(){
        //this.connection = DriverManager.getConnection()
        this.context = new ClassPathXmlApplicationContext("beans.xml");
        this.dataSource = context.getBean(DataSource.class);
        this.template = new JdbcTemplate(dataSource);
    }

    public ClassPathXmlApplicationContext getContext() {
        return context;
    }

    public DataSource getDataSource() {
        return dataSource;
    }

    public JdbcTemplate getTemplate() {
        return template;
    }
}
