package library.controllers;

import library.model.*;
import library.service.ServiceAdmin;
import library.service.ServiceClient;
import library.service.ServiceReact;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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

//    @GetMapping("/clients/{id}")
//    @CrossOrigin(origins = "http://localhost:3000")
//    public Optional<Client> getClient(@PathVariable Long id) {
//        return serviceReact.getClientById(id);
//    }

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

    @GetMapping("/books/{id}")
    @CrossOrigin(origins = "http://localhost:3000")
    public Optional<Book> getBook(@PathVariable Long id) {
        return serviceReact.getBookById(id);
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


    @GetMapping("/clients/{id}")
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<Client> getClient(@PathVariable Long id) {
        logger.info("getAllTodos");
        return  serviceReact.findById(id)
                .map(client -> ResponseEntity.status(HttpStatus.CREATED).body(client))
                .orElse(ResponseEntity.status(HttpStatus.CONFLICT).build());
    }
//    @PostMapping("/clients")
//    @CrossOrigin(origins = "http://localhost:3000")
//    public ResponseEntity<Client> addClient(@RequestBody Client newClient, @PathVariable Long id) {
//        return serviceReact.saveClient(newClient).map(client -> ResponseEntity.status(HttpStatus.CREATED).body(client))
//                .orElse(ResponseEntity.status(HttpStatus.CONFLICT).build());
//    }

    @PostMapping("/clients")
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<Client> addClient(@RequestBody Client newClient) {
        serviceReact.saveClient(newClient);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @PostMapping("/admins")
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<Admin> addClient(@RequestBody Admin newAdmin) {
        serviceReact.saveAdmin(newAdmin);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @PostMapping("/emprunts")
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<Emprunt> addClient(@RequestBody Emprunt newEmprunt) {
        serviceReact.saveEmprunt(newEmprunt);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }
}
