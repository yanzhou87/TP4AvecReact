package library;

import library.model.*;
import library.service.ServiceClient;
import library.service.ServiceAdmin;
import library.service.ServiceReact;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import javax.transaction.Transactional;
import java.time.LocalDate;
import java.util.List;
import java.util.Optional;


@SpringBootApplication
public class MainLibrary implements CommandLineRunner {

    @Autowired
    private ServiceAdmin serviceLibrary;

    @Autowired
    private ServiceClient serviceClient;
    @Autowired
    private ServiceReact serviceReact;
    public static void main(String[] args) {
        SpringApplication.run(MainLibrary.class, args);
    }

    @Override
    public void run(String... args) throws Exception {

        Client client = serviceLibrary.saveClient(new Client("yan","zhou", 34));
        Client client1 = serviceLibrary.saveClient(new Client("client", "clicli", 20));
        Client client2 = serviceLibrary.saveClient(new Client("client22", "clicli22", 40));
        Optional<Admin> admin = serviceLibrary.saveAdmin(new Admin("admin1","ad"));
        System.out.println(serviceReact.getAllClients());
        System.out.println(serviceReact.getAllAdmins());
        Book book = serviceLibrary.saveBook(new Book("book", "yan",  "Roman",
                "2010-02-09",10,"yanZhou", 300));

        serviceLibrary.saveBook(book);
        System.out.println(serviceReact.getAllBooks());
        CD cd = serviceLibrary.saveCD(new CD("cd1"));
        System.out.println(serviceReact.getAllCds());
        DVD dvd = serviceLibrary.saveDVD(new DVD("dvd1","author11",3,1));
        System.out.println(serviceReact.getAllDVDs());

        Object[] bookSeach = serviceClient.findBookBySeach("bo").get(0);
        System.out.println("find book By seach by name bo : " + bookSeach[0]);

        Emprunt emprunt = serviceLibrary.saveEmprunt(book,  serviceLibrary.findClientById(1L), LocalDate.of(2022,4,1));
        Emprunt emprunt1 = serviceLibrary.saveEmprunt(dvd, serviceLibrary.findClientById(1L), LocalDate.of(2022,5,1));

        System.out.println("Avant retour : " +emprunt);
        serviceClient.returnEmprunt(serviceLibrary.findClientById(1L), book.getId(), LocalDate.of(2022,6,1));

        System.out.println(emprunt1);
        System.out.println("Après retour : " + emprunt);
    }
}
