package com.example.tenet.dao;

import com.example.tenet.entity.NoteEntity;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

@Mapper
@Repository
public interface NoteDao {
    int insert(@Param("noteEntity") NoteEntity noteEntity);
}
