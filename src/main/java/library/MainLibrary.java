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
    @Transactional
    public void run(String... args) throws Exception {

        Client client = serviceLibrary.saveClient(new Client("yan","zhou", 34));
        Optional<Admin> admin = serviceLibrary.saveAdmin(new Admin("admin1","ad"));
        System.out.println(serviceReact.getAllClients());
        System.out.println(serviceReact.getAllAdmins());
        Book book = serviceLibrary.saveBook(new Book("book", "yan", "2010-02-09", "Roman", "yanZhou", 300));
        book.setNombreExemplaires(10);
        serviceLibrary.saveBook(book);
        System.out.println(serviceReact.getAllBooks());
        CD cd = serviceLibrary.saveCD(new CD("cd1"));
        System.out.println(serviceReact.getAllCds());
        DVD dvd = serviceLibrary.saveDVD(new DVD("dvd1","author11",3,1));
        System.out.println(serviceReact.getAllDVDs());

        Emprunt emprunt = serviceLibrary.saveEmprunt(book,  client, LocalDate.now());
        System.out.println(emprunt);

        //final Article book = serviceLibrary.saveArticle(new Book("book", "yan", "2010-02-09", "Roman", "yanZhou", 300));
//        final Article cd = serviceLibrary.saveArticle(new CD("cd"));
//        final Article dvd = serviceLibrary.saveArticle(new DVD("dvd"));
//
//        List<Exemplaire> exemplaires = serviceLibrary.saveExemplaire(book, 10);
//        book.setNombreExemplaires(exemplaires.size());
//        serviceLibrary.saveArticle(book);
//        book.setExemplaires(exemplaires);
//        serviceLibrary.saveArticle(book);
//
//        System.out.println("////// Recherche d’un document selon les criteres /////////");
//        List<Object[]> books = serviceClient.findBookBySeach("Roman");
//        Object[] book1 = books.get(0);
//        System.out.println(book1[0]);
//
//        LibraryUser client = serviceLibrary.saveUser(new Client("Yan", "Zhou", 99));
//
//        Emprunt emprunt = serviceLibrary.saveEmprunt(book, exemplaires, (Client) client, LocalDate.now());
//        emprunt.getExemplaire().setEmpruntId(emprunt.getId());
//
//        List<Object[]> emprunts = serviceClient.findEmpruntByClientId(client.getId());
//        Object[] emprunt1 = emprunts.get(0);
//        System.out.println(emprunt1[0]);
//
//        serviceLibrary.addEmpruntToClient(emprunt.getId(), client.getId());
//        //serviceLibrary.addEmpruntToClient(emprunt, (Client)client); 哪个好
//
//        System.out.println("///// Avant retourner un emprunt //////");
//        System.out.println(serviceClient.findClientById(client.getId()));
//
//        System.out.println("///// après retourner un emprunt //////");
//        serviceClient.returnEmprunt((Client) client, book.getId(), LocalDate.of(2022,6,1));
//        System.out.println(serviceClient.findClientById(client.getId()));

    }
}
