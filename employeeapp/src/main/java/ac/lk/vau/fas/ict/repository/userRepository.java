package ac.lk.vau.fas.ict.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import ac.lk.vau.fas.ict.model.User;

public interface UserRepository extends JpaRepository<User,Long>{

}
