package library.controllers;

import library.forms.*;
import library.model.*;
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
    public ResponseEntity<List<SaveClientForm>> getAllClients() {
        return new ResponseEntity<>(serviceReact.getAllClients(), HttpStatus.OK);
    }
    @GetMapping("/clients/{id}")
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<SaveClientForm> getClient(@PathVariable Long id) {
        logger.info("getAllTodos");
        return  serviceReact.findClientById(id)
                .map(client -> ResponseEntity.status(HttpStatus.OK).body(client))
                .orElse(ResponseEntity.status(HttpStatus.CONFLICT).build());
    }
//    @GetMapping("/clients/{id}")
//    @CrossOrigin(origins = "http://localhost:3000")
//    public ResponseEntity<SaveClientForm> getClient(@PathVariable Long id) {
//        return new ResponseEntity<>(serviceReact.findClientById(id).get(), HttpStatus.OK);
//    }

    @GetMapping("/admins")
    @CrossOrigin(origins = "http://localhost:3000")
    public  ResponseEntity<List<SaveAdminForm>> getAllAdmins() {
        return new ResponseEntity<>(serviceReact.getAllAdmins(),HttpStatus.OK);
    }

    @GetMapping("/admins/{id}")
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<SaveAdminForm> getAdmin(@PathVariable Long id) {
        return  serviceReact.findAdminsById(id)
                .map(admin -> ResponseEntity.status(HttpStatus.OK).body(admin))
                .orElse(ResponseEntity.status(HttpStatus.CONFLICT).build());
    }

    @GetMapping("/books")
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<List<SaveBookForm>> getAllBooks() {
        return new ResponseEntity<>(serviceReact.getAllBooks(), HttpStatus.OK);
    }

    @GetMapping("/books/{id}")
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<SaveBookForm> getBook(@PathVariable Long id) {
        return  serviceReact.findBookById(id)
                .map(book -> ResponseEntity.status(HttpStatus.OK).body(book))
                .orElse(ResponseEntity.status(HttpStatus.CONFLICT).build());
    }

    @GetMapping("/cds")
    @CrossOrigin(origins = "http://localhost:3000")
    public  ResponseEntity<List<SaveCdForm>> getAllCDs() {
        return new ResponseEntity<>(serviceReact.getAllCds(), HttpStatus.OK);
    }

    @GetMapping("/dvds")
    @CrossOrigin(origins = "http://localhost:3000")
    public List<DVD> getAllDVDs() {
        return serviceReact.getAllDVDs();
    }

    @GetMapping("/emprunts")
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<List<SaveEmpruntForm>> getAllEmprunts() {
        return new ResponseEntity<>( serviceReact.getAllEmprunts(), HttpStatus.OK);
    }

    @GetMapping("/emprunts/{id}")
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<SaveEmpruntForm> getEmprunt(@PathVariable Long id) {
        logger.info("getAllTodos");
        return  serviceReact.findEmpruntById(id)
                .map(emprunt -> ResponseEntity.status(HttpStatus.CREATED).body(emprunt))
                .orElse(ResponseEntity.status(HttpStatus.CONFLICT).build());
    }

    @PostMapping("/clients")
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<SaveClientForm> addClient(@RequestBody SaveClientForm newClient) {
        return new ResponseEntity<>(serviceReact.saveClient(newClient),HttpStatus.CREATED);
    }

    @PostMapping("/admins")
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<SaveAdminForm> addClient(@RequestBody SaveAdminForm newAdmin) {
        return new ResponseEntity<>(serviceReact.saveAdmin(newAdmin), HttpStatus.CREATED);
    }

    @PostMapping("/books")
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<SaveBookForm> addBook(@RequestBody SaveBookForm newBook) {
        return new ResponseEntity<>(serviceReact.saveBook(newBook), HttpStatus.CREATED);
    }
    @PostMapping("/emprunts")
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<SaveEmpruntForm> addEmprunt(@RequestBody SaveEmpruntForm newEmprunt) {
        return new ResponseEntity<>(serviceReact.saveEmprunt(newEmprunt), HttpStatus.CREATED);
    }


}
