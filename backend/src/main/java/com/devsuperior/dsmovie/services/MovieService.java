package com.devsuperior.dsmovie.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.devsuperior.dsmovie.dto.MovieDTO;
import com.devsuperior.dsmovie.entities.Movie;
import com.devsuperior.dsmovie.entities.User;
import com.devsuperior.dsmovie.repositories.MovieRepository;

@Service
public class MovieService {
	@Autowired
	
	private MovieRepository repository;
	
	
	@Transactional(readOnly = true)
	public Page<MovieDTO> findAll(Pageable pageable) {
		
		Page<Movie> result =  repository.findAll(pageable);
		Page<MovieDTO> page= result.map(res -> new MovieDTO(res));
		return page;	
		
	}
	
	@Transactional(readOnly = true)
	
	public MovieDTO findById(Long id) {
		Movie result =  repository.findById(id).get();
		MovieDTO dto= new MovieDTO(result);
		return dto;	
		
	}
	
	@Transactional(readOnly = true)
	
	public MovieDTO saveMovie(MovieDTO dto) {
		
		Movie movie = repository.findById(dto.getId()).get();
		if(movie ==null) {
			movie = new Movie();
			movie.setTitle(dto.getTitle());
			movie.setScore(dto.getScore());
			movie.setCount(dto.getCount());
			movie.setImage(dto.getImage());
			movie = repository.save(movie);
			
		}
		
		
		return dto;	
		
	}
	
	

}
