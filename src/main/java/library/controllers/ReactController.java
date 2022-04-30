package library.controllers;

import library.model.*;
import library.service.ServiceAdmin;
import library.service.ServiceClient;
import library.service.ServiceReact;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/")
public class ReactController {

    Logger logger = LoggerFactory.getLogger(ReactController.class);

    private ServiceReact serviceReact;
    public ReactController(ServiceReact serviceReact) {
        this.serviceReact = serviceReact;
    }

    @GetMapping("/clients")
    @CrossOrigin(origins = "http://localhost:3000")
    public List<Client> getAllClients() {
        return serviceReact.getAllClients();
    }

    @GetMapping("/clients/{id}")
    @CrossOrigin(origins = "http://localhost:3000")
    public Optional<Client> getClient(@PathVariable Long id) {
        return serviceReact.getClientById(id);
    }

    @GetMapping("/admins")
    @CrossOrigin(origins = "http://localhost:3000")
    public List<Admin> getAllAdmins() {
        return serviceReact.getAllAdmins();
    }

    @GetMapping("/admins/{id}")
    @CrossOrigin(origins = "http://localhost:3000")
    public Optional<Admin> getAdmin(@PathVariable Long id) {
        return serviceReact.getAdminById(id);
    }

    @GetMapping("/books")
    @CrossOrigin(origins = "http://localhost:3000")
    public List<Book> getAllBooks() {
        return serviceReact.getAllBooks();
    }

    @GetMapping("/cds")
    @CrossOrigin(origins = "http://localhost:3000")
    public List<CD> getAllCDs() {
        return serviceReact.getAllCds();
    }

    @GetMapping("/dvds")
    @CrossOrigin(origins = "http://localhost:3000")
    public List<DVD> getAllDVDs() {
        return serviceReact.getAllDVDs();
    }

    @GetMapping("/emprunts")
    @CrossOrigin(origins = "http://localhost:3000")
    public List<Emprunt> getAllEmprunts() {
        return serviceReact.getAllEmprunts();
    }

}
