package library.repository;

import library.model.Amende;
import library.model.Book;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AmendeRepository extends JpaRepository<Amende, Long> {

}
