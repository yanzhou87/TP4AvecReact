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

    public SaveBookForm(String id, String title, String author, String articleType) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.articleType = articleType;
    }

    public SaveBookForm(){
        this(new Book());
    }
    public SaveBookForm(Book book){
        this(Long.toString(book.getId()),book.getTitle(),book.getAuthor(),book.getArticleType());
    }

    public Book toBook(){
        return new Book(title,author,articleType);
    }
}
