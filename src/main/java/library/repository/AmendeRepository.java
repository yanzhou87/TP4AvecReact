package library.repository;

import library.model.Amende;
import library.model.Book;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface AmendeRepository extends JpaRepository<Amende, Long> {
    @Query("select a from Amende a where a.id = :bookId")
    Optional<Amende> findAmendeById(@Param("bookId") long bookId);

    @Query("select a from Amende a where a.client.id = :clientId")
    List<Amende> findAmendeByClientId(@Param("clientId") long clientId);
}
