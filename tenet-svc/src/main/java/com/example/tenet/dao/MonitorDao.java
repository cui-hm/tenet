package com.example.tenet.dao;

import com.example.tenet.entity.MonitorEntity;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
@Repository
public interface MonitorDao {

    int insert(@Param("monitorEntity") MonitorEntity monitorEntity);

    List<Integer> getAllMonitorId();

    MonitorEntity getMonitorData(@Param("MonitorId") int MonitorId);
}
