package com.example.tenet.dao;
import com.example.tenet.entity.ComponentEntity;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
@Repository
public interface ComponentDao {

    int insertComponent(@Param("ComponentEntity") ComponentEntity componentEntity);

    List<String> getAllComponentName();

}
