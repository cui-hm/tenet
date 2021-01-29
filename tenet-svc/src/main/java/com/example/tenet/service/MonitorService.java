package com.example.tenet.service;

import com.example.tenet.dao.MonitorDao;
import com.example.tenet.entity.MonitorEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

//页面的业务层
@Service
public class MonitorService {

    @Autowired private MonitorDao monitorDao;


    public int insertWithData(String data) {
        MonitorEntity monitorEntity = new MonitorEntity();
        monitorEntity.setData(data);
        monitorDao.insert(monitorEntity);
        return monitorEntity.getId();
    }

    public List<Integer> getAllMonitorId(){
        return monitorDao.getAllMonitorId();
    }

}
