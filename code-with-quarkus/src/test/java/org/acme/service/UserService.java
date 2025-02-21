package org.acme.service;

import jakarta.enterprise.context.ApplicationScoped;
import jakarta.transaction.Transactional;
import java.util.List;

import org.acme.model.User;
import org.acme.repository.UserRepository;


@ApplicationScoped
public class UserService {

  private final UserRepository userRepository;

  public UserService(UserRepository userRepository) {
    this.userRepository = userRepository;
}

  public List<User> getAllUsers() {
      return userRepository.listAll();
  }

    @Transactional
    public void addUser(User user) {
        userRepository.persist(user);
    }

}
