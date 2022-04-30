package library.service;


import library.model.*;
import library.repository.*;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Service
@Component
public class ServiceAdmin {

    private ArticleRepository articleRepository;

    private LibraryUserRepository libraryUserRepository;

    private ExemplaireRepository exemplaireRepository;

    private EmpruntRepository empruntRepository;

    private AmendeRepository amendeRepository;

    public ServiceAdmin(ArticleRepository articleRepository, LibraryUserRepository libraryUserRepository, ExemplaireRepository exemplaireRepository, EmpruntRepository empruntRepository, AmendeRepository amendeRepository) {
        this.articleRepository = articleRepository;
        this.libraryUserRepository = libraryUserRepository;
        this.exemplaireRepository = exemplaireRepository;
        this.empruntRepository = empruntRepository;
        this.amendeRepository = amendeRepository;
    }

    public Article saveArticle(Article article) {
        return articleRepository.save(article);
    }

    public List<Exemplaire> saveExemplaire(Article article, int nbSave) {
        List<Exemplaire> exemplaires = new ArrayList<>();
        for (int i = 0; i < nbSave; i++) {
            Exemplaire exemplaire = exemplaireRepository.save(new Exemplaire(article));
            exemplaires.add(exemplaire);
        }
        return exemplaires;
    }

    public LibraryUser saveUser(LibraryUser libraryUseruser) {
        return libraryUserRepository.save(libraryUseruser);
    }

    public Emprunt saveEmprunt(Article article, List<Exemplaire> exemplaires, Client client, LocalDate date) {
        boolean isAddExemplaire = false;
        Emprunt emprunt = new Emprunt();

        if (article.getNombreExemplaires() != 0) {
            for (Exemplaire exemplaire : exemplaires) {
                if (!exemplaire.isBorrowed() && !isAddExemplaire) {
                    emprunt.setExemplaire(exemplaire);
                    emprunt.setClient(client);
                    emprunt.setDateEmprunt(date);
                    exemplaire.setBorrowed(true);
                    exemplaireRepository.save(exemplaire);
                    isAddExemplaire = true;
                }
            }
        }

        article.setNombreExemplaires(article.getNombreExemplaires() - 1);
        articleRepository.save(article);
        return empruntRepository.save(emprunt);
    }

    @Transactional
    public void addEmpruntToClient(long empruntId, long clientId) {
        var empruntOpt = empruntRepository.findEmpruntById(empruntId);
        var clientOpt = libraryUserRepository.findClientById(clientId);

        Emprunt emprunt = empruntOpt.get();
        Client client = clientOpt.get();

        client.addEmprunt(emprunt);
        libraryUserRepository.save(client);

    }

    public EmpruntRepository getEmpruntRepository() {
        return empruntRepository;
    }




    public Client saveClient(Client client) {
        return  libraryUserRepository.save(client);
    }
    public List<Client> getAllClients() {
        return libraryUserRepository.finAllClients();
    }
    public List<Admin> getAllAdmins() {
        return libraryUserRepository.findAllAdmins();
    }

    public Admin saveAdmin(Admin admin) {
        return libraryUserRepository.save(admin);
    }

    public Book saveBook(Book book) {
        return articleRepository.save(book);
    }

    public List<Book> getAllBooks() {
        List<Book> books = new ArrayList<>();
        List<Article> articles =  articleRepository.findAll();
        for(Article a : articles){
            if(a instanceof Book){
                books.add((Book)a);
            }
        }
        return books;
    }

    public List<CD> getAllCDs() {
        List<CD> cds = new ArrayList<>();
        List<Article> articles =  articleRepository.findAll();
        for(Article cd : articles){
            if(cd instanceof CD){
                cds.add((CD)cd);
            }
        }
        return cds;
    }


//    public Optional<Client> saveClient(Client newClient) {
//        return libraryUserRepository.saveClient(newClient.getId(), newClient);
//    }
}

