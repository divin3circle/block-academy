package com.learn.block_academy.repository;

import com.learn.block_academy.model.User;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    boolean existsByEmail(@NotBlank(message = "Email is required") @Email(message = "Email should be valid") String email);
    Optional<User> findByEmail(String email);
}