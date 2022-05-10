package library.service;

import library.forms.SaveEmpruntForm;
import library.model.*;
import library.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.temporal.ChronoUnit;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
@Service
public class ServiceClient {
    private List<Client> clients = new ArrayList<>();
    @Autowired
    private ArticleRepository articleRepository;

    @Autowired
    private LibraryUserRepository libraryUserRepository;

    @Autowired
    private EmpruntRepository empruntRepository;

    @Autowired
    private AmendeRepository amendeRepository;

    public Optional<Article> findArticleById(long id) {
        return articleRepository.findArticleById(id);
    }

    public List<Object[]> findBookBySeach(String seach) {
        return articleRepository.findBookBySeach(seach);
    }

    public List<Object[]> findEmpruntByClientId(long id) {
        return empruntRepository.findEmpruntByClientId(id);
    }

    public Emprunt returnEmprunt(Client client, long bookId, LocalDate dateReturn) {
        client.setAmendes(amendeRepository.findAmendeByClientId(client.getId()));

       Emprunt myEmprunt = new Emprunt();
        for (Emprunt emprunt : client.getEmprunts()) {
            if(emprunt.getArticle().getId() == bookId){
                emprunt.setDateReturn(dateReturn);
                emprunt.setReturnEmprdunt(true);
             Article article =  articleRepository.findArticleById(bookId).get();
             article.setNombreExemplaires(article.getNombreExemplaires() +1);
             articleRepository.save(article);
             empruntRepository.save(emprunt);

                long duration = ChronoUnit.DAYS.between(emprunt.getDateEmprunt(),emprunt.getDateReturn());
                if (duration > emprunt.getArticle().dayEmprunt()) {
                    Amende amende = new Amende(client, duration);
                    amendeRepository.save(amende);
                    client.addAmende(amende);
                    Client client1 = libraryUserRepository.getClientWithAmendes(client.getId()).get();
                    client1.setEmprunts(libraryUserRepository.findClientById(client.getId()).get().getEmprunts());
                    libraryUserRepository.save(client1);
                }
                myEmprunt = emprunt;
            }
        }
        return myEmprunt;
    }

    public List<LibraryUser> findAllClients() {
        return libraryUserRepository.findAll();
    }
    public List<LibraryUser> findAllAdmins() {
        return libraryUserRepository.findAll();
    }

    public List<Article> findAllArticles() {
        return articleRepository.findAll();
    }

    public List<Emprunt> findAllEmprunts() {
        return empruntRepository.findAll();
    }

    public List<Admin> getAllAdmins() {
       return   libraryUserRepository.findAllAdmins();
    }

    public Admin findAdminById(long id) {
        return libraryUserRepository.findAdminById(id);
    }

    private Client save(Client client){
        clients.add(client);
        return client;
    }


    public Emprunt saveEmprunt(SaveEmpruntForm newEmprunt) {
        Client client = libraryUserRepository.findClientById(newEmprunt.getClientId()).get();
        Article article = articleRepository.findArticleById(newEmprunt.getArticleId()).get();

        Emprunt myEmprunt = empruntRepository.save(new Emprunt(newEmprunt.getId(), client,
                article));
        myEmprunt.setDateReturnAttendu(myEmprunt.getDateEmprunt().plusDays(article.dayEmprunt()));
        empruntRepository.save(myEmprunt);
        article.setNombreExemplaires(
                article.getNombreExemplaires() - 1);
        articleRepository.save(article);
        client.addEmprunt(myEmprunt);
        libraryUserRepository.save(client);
        return myEmprunt;
    }

    public Emprunt updateEmprunt(SaveEmpruntForm newEmprunt) {
        Client client = libraryUserRepository.findClientById(newEmprunt.getClientId()).get();
        Article article = articleRepository.findArticleById(newEmprunt.getArticleId()).get();

        Emprunt myEmprunt = empruntRepository.save(new Emprunt(newEmprunt.getId(), client,article,
                newEmprunt.getDateEmprunt(),newEmprunt.getDateReturnAttendu()));
        myEmprunt.setReturnEmprdunt(true);
        myEmprunt.setDateReturn( LocalDate.of(2022,6,1));//pour avoir un amende
        empruntRepository.save(myEmprunt);
        article.setNombreExemplaires(article.getNombreExemplaires() + 1);
        articleRepository.save(article);

        long duration = ChronoUnit.DAYS.between(myEmprunt.getDateEmprunt(),myEmprunt.getDateReturn());
        if (duration > myEmprunt.getArticle().dayEmprunt()) {
            Amende amende = new Amende(client, duration);
            amendeRepository.save(amende);
            client.addAmende(amende);
            Client client1 = libraryUserRepository.getClientWithAmendes(client.getId()).get();
            client1.setEmprunts(libraryUserRepository.findClientById(client.getId()).get().getEmprunts());
            libraryUserRepository.save(client1);
        }
        return myEmprunt;
    }

    public List<Amende> findAllAmende() {
        return  amendeRepository.findAll();
    }

    public Amende findAmendeById(Long id) {
        return  amendeRepository.findAmendeById(id).get();
    }

    public Book findBookById(Long id) {
        return  articleRepository.findBookById(id).get();
    }

    public Emprunt findEmpruntById(long id) {
        return empruntRepository.findEmpruntById(id).get();
    }
}
