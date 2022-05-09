package library.service;

import library.exception.UnsufficientFunds;
import library.forms.*;
import library.model.*;
import library.repository.*;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;


@Service
public class ServiceReact {
    private ArticleRepository articleRepository;

    private LibraryUserRepository libraryUserRepository;

    private EmpruntRepository empruntRepository;

    private AmendeRepository amendeRepository;

    private ServiceAdmin serviceAdmin;

    private ServiceClient serviceClient;

    public ServiceReact(ArticleRepository articleRepository, LibraryUserRepository libraryUserRepository,
                        EmpruntRepository empruntRepository, AmendeRepository amendeRepository,
                        ServiceAdmin serviceAdmin, ServiceClient serviceClient) {
        this.articleRepository = articleRepository;
        this.libraryUserRepository = libraryUserRepository;
        this.empruntRepository = empruntRepository;
        this.amendeRepository = amendeRepository;
        this.serviceAdmin = serviceAdmin;
        this.serviceClient = serviceClient;
    }

    public List<SaveClientForm> getAllClients() {
        List<SaveClientForm> clientForms = new ArrayList<>();
        List<Client> clients = libraryUserRepository.finAllClients();
        for (int i = 0; i < clients.size(); i++) {
            Client client = clients.get(i);
            SaveClientForm clientForm = new SaveClientForm(client.getId(),client.getFirstName(),client.getLastName(),client.getAge());
            clientForms.add(clientForm);
        }
        return clientForms;
    }

    public List<SaveAdminForm> getAllAdmins() {
        List<SaveAdminForm> adminDtos = new ArrayList<>();
        List<Admin> admins = libraryUserRepository.findAllAdmins();
        for (Admin admin : admins) {
            SaveAdminForm adminDto = new SaveAdminForm(admin.getId(), admin.getFirstName(), admin.getLastName(), admin.getAge());
            adminDtos.add(adminDto);
        }
        return adminDtos;
    }

    public List<SaveBookForm> getAllBooks() {
        List<SaveBookForm> bookForms = new ArrayList<>();
        List<Article> articles = articleRepository.findAll();
        for (Article a : articles) {
            if (a instanceof Book) {
                SaveBookForm bookForm = new SaveBookForm(a.getId(),a.getTitle(),
                        a.getAuthor(),a.getArticleType(),a.getYearPublication(),
                        a.getNombreExemplaires(),((Book) a).getEditor(),((Book) a).getNumbrePages());
                bookForms.add(bookForm);
            }
        }
        return bookForms;
    }

    public List<SaveCdForm> getAllCds() {
        List<SaveCdForm> cdForms = new ArrayList<>();
        List<Article> articles = articleRepository.findAll();
        for (Article cd : articles) {
            if (cd instanceof CD) {
              SaveCdForm saveCdForm = new SaveCdForm(cd.getId(),cd.getTitle(),
                      cd.getAuthor(),cd.getNombreExemplaires(),((CD) cd).getDurationMovie());
              cdForms.add(saveCdForm);
            }
        }
        return cdForms;
    }

    public List<SaveDvdForm> getAllDVDs() {
        List<SaveDvdForm> dvdForms = new ArrayList<>();
        List<Article> articles = articleRepository.findAll();
        for (Article dvd : articles) {
            if (dvd instanceof DVD) {
                SaveDvdForm saveDvdForm = new SaveDvdForm(dvd.getId(),dvd.getTitle(),
                        dvd.getAuthor(),dvd.getNombreExemplaires(),((DVD) dvd).getDurationMovie());
                dvdForms.add(saveDvdForm);
            }
        }
        return dvdForms;
    }

    public List<SaveEmpruntForm> getAllEmprunts() {
        List<SaveEmpruntForm> listEmpruntsDto = new ArrayList<>();
        List<Emprunt> listEmprunts = empruntRepository.findAll();
        for (int i = 0; i < listEmprunts.size(); i++) {
            Emprunt emprunt = listEmprunts.get(i);
            SaveEmpruntForm empruntForm = new SaveEmpruntForm(emprunt.getId(),
                    emprunt.getClient().getId(), emprunt.getArticle().getId(),
                    emprunt.getDateEmprunt().toString(),emprunt.getDateReturnAttendu().toString(),
                    emprunt.getDateReturn()==null ? "" : emprunt.getDateReturn().toString(),
                    emprunt.isReturnEmprdunt());
            listEmpruntsDto.add(empruntForm);
        }

        return listEmpruntsDto;
    }


    public SaveClientForm saveClient(SaveClientForm newClient) {
       Client client = new Client(newClient.getId(), newClient.getFirstName(), newClient.getLastName(), newClient.getAge());
        Client myclient = libraryUserRepository.save(client);
        System.out.println(myclient);
        SaveClientForm saveClientForm = new SaveClientForm(myclient.getId(),myclient.getFirstName(), myclient.getLastName(), myclient.getAge());
        return saveClientForm;
    }

    public SaveAdminForm saveAdmin(SaveAdminForm newAdmin) {
        Admin admin = new Admin(newAdmin.getId(), newAdmin.getFirstName(), newAdmin.getLastName(), newAdmin.getAge());
        Admin myAdmin = libraryUserRepository.save(admin);
        SaveAdminForm saveAdminForm = new SaveAdminForm(myAdmin.getId(), myAdmin.getFirstName(), myAdmin.getLastName(), myAdmin.getAge());
        return saveAdminForm;
    }

    public SaveEmpruntForm saveEmprunt(SaveEmpruntForm newEmprunt) throws UnsufficientFunds {
        System.out.println("emprunt saveEmprunt newEmprunt: " + newEmprunt);
        Emprunt myEmprunt = serviceAdmin.saveEmprunt(articleRepository.findArticleById(newEmprunt.getArticleId()).get() ,
                libraryUserRepository.findClientById(newEmprunt.getClientId()).get(),LocalDate.now());
        System.out.println(myEmprunt);
        SaveEmpruntForm saveEmpruntForm = new SaveEmpruntForm(myEmprunt.getId(),
                myEmprunt.getClient().getId(),myEmprunt.getArticle().getId(),
                myEmprunt.getDateEmprunt().toString(), myEmprunt.getDateReturnAttendu().toString());
        System.out.println(saveEmpruntForm);
        return saveEmpruntForm;
    }
    public Optional<Book> getBookById(Long id) {
        return articleRepository.findBookById(id);
    }

    public Optional<SaveClientForm> findClientById(Long id) {
        Client client = libraryUserRepository.findClientById(id).get();

        SaveClientForm saveClientForm = new SaveClientForm(client.getId(), client.getFirstName(), client.getLastName(), client.getAge());
        return Optional.of(saveClientForm);
    }
    public Optional<SaveAdminForm> findAdminsById(Long id) {
        Admin admin = libraryUserRepository.findAdminById(id);
        SaveAdminForm saveAdminForm = new SaveAdminForm(admin.getId(),admin.getFirstName(),admin.getLastName(),admin.getAge());
        return Optional.of(saveAdminForm);
    }

    public Optional<SaveEmpruntForm> findEmpruntById(Long id) {
        Emprunt emprunt = empruntRepository.findEmpruntById(id).get();
        SaveEmpruntForm saveEmpruntForm = new SaveEmpruntForm(emprunt.getId(),emprunt.getClient().getId(),
                emprunt.getArticle().getId(),emprunt.getDateEmprunt().toString(),emprunt.getDateReturnAttendu().toString(),
                emprunt.getDateReturn()==null ? "" : emprunt.getDateReturn().toString(),
                emprunt.isReturnEmprdunt());
        return Optional.of(saveEmpruntForm);
    }

    public Optional<SaveBookForm> findBookById(Long id) {
        Book book = articleRepository.findBookById(id).get();
        SaveBookForm bookForm = new SaveBookForm(book.getId(), book.getTitle(),
                book.getAuthor(), book.getArticleType(), book.getYearPublication(),
                book.getNombreExemplaires(), book.getEditor(), book.getNumbrePages());
        return Optional.of(bookForm);
    }


    public SaveBookForm saveBook(SaveBookForm newBook) {

        Book book = new Book(newBook.getId(), newBook.getTitle(),
                newBook.getAuthor(),
                newBook.getArticleType(),newBook.getYearPublication(), newBook.getNombreExemplaires(),
                newBook.getEditor(), newBook.getNumbrePages());

        Book myBook = articleRepository.save(book);

        SaveBookForm saveBookForm = new SaveBookForm(myBook.getId(), myBook.getTitle(),
                myBook.getAuthor(), myBook.getArticleType(), myBook.getYearPublication(),
                myBook.getNombreExemplaires(), myBook.getEditor(), myBook.getNumbrePages());
        return saveBookForm;
    }

    public SaveCdForm saveCd(SaveCdForm newCd) {
        CD cd = new CD(newCd.getId(), newCd.getTitle(),
                newCd.getAuthor(),
                newCd.getNombreExemplaires(),
                newCd.getDurationMovie());
        CD myCd = articleRepository.save(cd);
        SaveCdForm saveCdForm = new SaveCdForm(myCd.getId(), myCd.getTitle(),
                myCd.getAuthor(), myCd.getNombreExemplaires(), myCd.getDurationMovie());
        return saveCdForm;
    }

    public SaveDvdForm saveDvd(SaveDvdForm newDvd) {
        DVD dvd = new DVD(newDvd.getId(), newDvd.getTitle(),
                newDvd.getAuthor(),
                newDvd.getNombreExemplaires(),
                newDvd.getDurationMovie());
        DVD myDvd = articleRepository.save(dvd);
        SaveDvdForm saveDvdForm = new SaveDvdForm(myDvd.getId(), myDvd.getTitle(),
                myDvd.getAuthor(), myDvd.getNombreExemplaires(), myDvd.getDurationMovie());
        return saveDvdForm;
    }

    public List<SaveArticleForm> findAllArticles() {
        List<Article> articles = articleRepository.findAll();
        List<SaveArticleForm> articleForms = new ArrayList<>();
        for(Article article :articles){
            SaveArticleForm articleForm = new SaveArticleForm(article.getId(),
                    article.getTitle(),article.getAuthor(),article.getNombreExemplaires());
            articleForms.add(articleForm);
        }
        return articleForms;
    }

    public Optional<SaveArticleForm> findArticleById(Long id) {
        Article article = articleRepository.findArticleById(id).get();
        SaveArticleForm articleForm = new SaveArticleForm(article.getId(),article.getTitle(),
                article.getAuthor(),article.getNombreExemplaires());
        return Optional.of(articleForm);
    }

    public Optional<SaveEmpruntForm> updateEmprunt(SaveEmpruntForm newEmprunt) {
        Emprunt myEmprunt = serviceClient.returnEmprunt(
                libraryUserRepository.findClientById(newEmprunt.getClientId()).get(),
                newEmprunt.getArticleId(), LocalDate.now());
        SaveEmpruntForm saveEmpruntForm = new SaveEmpruntForm(myEmprunt.getId(),
                myEmprunt.getClient().getId(), myEmprunt.getArticle().getId(),
                myEmprunt.getDateEmprunt().toString(), myEmprunt.getDateReturnAttendu().toString(),
                myEmprunt.getDateReturn().toString(), myEmprunt.isReturnEmprdunt());
       return Optional.of(saveEmpruntForm);

    }

    public List<SaveAmendeFrom> findAllAmendes() {
        List<Amende> amendes = amendeRepository.findAll();
        List<SaveAmendeFrom> amendeFroms = new ArrayList<>();
        for(Amende amende : amendes){
            SaveAmendeFrom amendeFrom = new SaveAmendeFrom(amende.getId(),
                    amende.getClient().getId(), amende.getAmendeForDay(),amende.getSommeAmende());
            amendeFroms.add(amendeFrom);
        }
        return amendeFroms;
    }

    public Optional<SaveAmendeFrom> findAmendeById(Long id) {
        Amende amende = amendeRepository.findAmendeById(id).get();
        SaveAmendeFrom amendeFrom = new SaveAmendeFrom(amende.getId(),amende.getClient().getId(),
                amende.getAmendeForDay(),amende.getSommeAmende());
        return Optional.of(amendeFrom);
    }
}
