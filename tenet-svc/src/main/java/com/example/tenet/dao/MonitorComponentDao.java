package com.example.tenet.dao;

import com.example.tenet.entity.MonitorComponentEntity;
import com.example.tenet.model.MonitorComponentDto;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
@Mapper
@Repository
public interface MonitorComponentDao {
    int insertMonitorComponen(@Param("monitorComponentEntity") MonitorComponentEntity monitorComponentEntity);

    List<MonitorComponentDto> getMonitorComponentDtoListByMonitorId(@Param("MonitorId") int MonitorId);

    int upMonitorComponentData(@Param("monitorComponentDto") MonitorComponentDto monitorComponentDto);
}
