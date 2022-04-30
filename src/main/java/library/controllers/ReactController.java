package library.controllers;

import library.model.Admin;
import library.model.Book;
import library.model.CD;
import library.model.Client;
import library.service.ServiceAdmin;
import library.service.ServiceClient;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/")
public class ReactController {

    Logger logger = LoggerFactory.getLogger(ReactController.class);

    private ServiceAdmin serviceAdmin;
    private ServiceClient serviceClient;

    public ReactController(ServiceAdmin serviceAdmin, ServiceClient serviceClient) {
        this.serviceAdmin = serviceAdmin;
        this.serviceClient = serviceClient;
    }

    @GetMapping("/clients")
    @CrossOrigin(origins = "http://localhost:3000")
    public List<Client> getAllClients() {
        return serviceAdmin.getAllClients();
    }

    @GetMapping("/admins")
    @CrossOrigin(origins = "http://localhost:3000")
    public List<Admin> getAllAdmins() {
        return serviceAdmin.getAllAdmins();
    }

    @GetMapping("/books")
    @CrossOrigin(origins = "http://localhost:3000")
    public List<Book> getAllBooks() {
        return serviceAdmin.getAllBooks();
    }
    @GetMapping("/cds")
    @CrossOrigin(origins = "http://localhost:3000")
    public List<CD> getAllCDs() {
        return serviceAdmin.getAllCDs();
    }
}
