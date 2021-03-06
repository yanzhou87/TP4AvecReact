package library.repository;

import library.model.Article;
import library.model.Book;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface ArticleRepository extends JpaRepository<Article, Long> {

    @Query("select a from Article a where a.id = :bookId")
    Optional<Article> findArticleById(@Param("bookId") long bookId);

    @Query("select a from Article a where a.title like %:seach% or a.author like %:seach% or a.yearPublication like %:seach% or a.articleType like %:seach%")
    List<Object[]> findBookBySeach(@Param("seach") String seach);

    @Query("select b from Book b where b.id = :bookId")
    Optional<Book> findBookById(@Param("bookId") long bookId);


}
