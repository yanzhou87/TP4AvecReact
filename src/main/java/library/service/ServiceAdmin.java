package library.service;


import library.exception.UnsufficientFunds;
import library.model.*;
import library.repository.*;
import org.springframework.stereotype.Component;

import javax.transaction.Transactional;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;


@Component
public class ServiceAdmin {

    private ArticleRepository articleRepository;

    private LibraryUserRepository libraryUserRepository;

    private EmpruntRepository empruntRepository;

    private AmendeRepository amendeRepository;

    public ServiceAdmin(ArticleRepository articleRepository, LibraryUserRepository libraryUserRepository,  EmpruntRepository empruntRepository, AmendeRepository amendeRepository) {
        this.articleRepository = articleRepository;
        this.libraryUserRepository = libraryUserRepository;
        this.empruntRepository = empruntRepository;
        this.amendeRepository = amendeRepository;
    }

    public Article saveArticle(Article article) {
        return articleRepository.save(article);
    }

    public LibraryUser saveUser(LibraryUser libraryUseruser) {
        return libraryUserRepository.save(libraryUseruser);
    }

    public Emprunt saveEmprunt(Article article, Client client, LocalDate date) throws UnsufficientFunds {

        Emprunt emprunt = new Emprunt();
        if(article.getNombreExemplaires() == 0 ){
            throw new UnsufficientFunds("nombre exemplaires = 0");
        }
        if (article.getNombreExemplaires() != 0) {
                    emprunt.setArticle(article);
                    emprunt.setClient(client);
                    emprunt.setDateEmprunt(date);
                    article.setNombreExemplaires(article.getNombreExemplaires()-1);
                    emprunt.setDateReturnAttendu(emprunt.getDateEmprunt().plusDays(article.dayEmprunt()));
        }

        article.setNombreExemplaires(article.getNombreExemplaires() - 1);
        articleRepository.save(article);
        client.addEmprunt(emprunt);
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

    public Optional<Admin> saveAdmin(Admin admin) {
        return Optional.of(libraryUserRepository.save(admin));
    }

    public CD saveCD(CD cd) {
        return articleRepository.save(cd);
    }
    public DVD saveDVD(DVD dvd) {
        return articleRepository.save(dvd);
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

    public List<CD> getAllCds() {
        List<CD> cds = new ArrayList<>();
        List<Article> articles =  articleRepository.findAll();
        for(Article cd : articles){
            if(cd instanceof CD){
                cds.add((CD)cd);
            }
        }
        return cds;
    }

    public List<DVD> getAllDVDs() {
        List<DVD> dvds = new ArrayList<>();
        List<Article> articles =  articleRepository.findAll();
        for(Article dvd : articles){
            if(dvd instanceof DVD){
                dvds.add((DVD) dvd);
            }
        }
        return dvds;
    }

    public Admin findAdminById(Long id) {
        return libraryUserRepository.findAdminById(id);
    }

    public Client findClientById(Long id) {
        return libraryUserRepository.findClientById(id).get();
    }
}

