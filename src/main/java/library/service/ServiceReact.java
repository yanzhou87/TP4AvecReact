package library.service;

import library.model.*;
import library.repository.*;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
@Service
public class ServiceReact {
    private ArticleRepository articleRepository;

    private LibraryUserRepository libraryUserRepository;

    private ExemplaireRepository exemplaireRepository;

    private EmpruntRepository empruntRepository;

    private AmendeRepository amendeRepository;

    public ServiceReact(ArticleRepository articleRepository, LibraryUserRepository libraryUserRepository, ExemplaireRepository exemplaireRepository, EmpruntRepository empruntRepository, AmendeRepository amendeRepository) {
        this.articleRepository = articleRepository;
        this.libraryUserRepository = libraryUserRepository;
        this.exemplaireRepository = exemplaireRepository;
        this.empruntRepository = empruntRepository;
        this.amendeRepository = amendeRepository;
    }

    public List<Client> getAllClients() {
        return libraryUserRepository.finAllClients();
    }
    public List<Admin> getAllAdmins() {
        return libraryUserRepository.findAllAdmins();
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

    public Optional<Admin> getAdminById(Long id) {
        return Optional.of(libraryUserRepository.findAdminById(id));
    }

    public Optional<Client> getClientById(Long id) {
        return libraryUserRepository.findClientById(id);
    }

//    public Optional<Admin> saveAdmin(Admin admin) {
//        return Optional.of(libraryUserRepository.save(admin));
//    }
//    public Optional<Client> saveClient(Client client) {
//        return  Optional.of(libraryUserRepository.save(client));
//    }
//    public CD saveCD(CD cd) {
//        return articleRepository.save(cd);
//    }
//    public DVD saveDVD(DVD dvd) {
//        return articleRepository.save(dvd);
//    }
//    public Book saveBook(Book book) {
//        return articleRepository.save(book);
//    }

    public List<Emprunt> getAllEmprunts() {
        return empruntRepository.findAll();
    }
}
