package library.forms;

import library.model.Book;
import lombok.Data;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Data
public class SaveBookForm {
    private String id;

    @NotNull
    @NotBlank
    @Size(min=3)
    private String title;

    @NotNull
    private String author;
    private String articleType;
    private String yearPublication;
    private int nombreExemplaires = 0;
    private String editor;
    private int numbrePages;

    public SaveBookForm(String id, String title, String author, String articleType, String yearPublication, int nombreExemplaires, String editor, int numbrePages) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.articleType = articleType;
        this.yearPublication = yearPublication;
        this.nombreExemplaires = nombreExemplaires;
        this.editor = editor;
        this.numbrePages = numbrePages;
    }

    public SaveBookForm(){
        this(new Book());
    }
    public SaveBookForm(Book book){
        this(Long.toString(book.getId()),book.getTitle(),book.getAuthor(),book.getArticleType(),book.getYearPublication(), book.getNombreExemplaires(), book.getEditor(),book.getNumbrePages());
    }

    public Book toBook(){
        return new Book(title,author,articleType,yearPublication,nombreExemplaires,editor,numbrePages);
    }
}
