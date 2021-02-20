package com.example.tenet.service;

import com.example.tenet.dao.MonitorComponentDao;
import com.example.tenet.entity.MonitorComponentEntity;
import com.example.tenet.model.MonitorComponentDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MonitorComponentService {

    @Autowired
    private MonitorComponentDao monitorComponentDao;

    public int insertMonitorComponen(int MonitorId){
        MonitorComponentEntity monitorComponentEntity = new MonitorComponentEntity();
        monitorComponentEntity.setMonitorId(MonitorId);
        monitorComponentDao.insertMonitorComponen(monitorComponentEntity);
        return monitorComponentEntity.getMonitorComponentId();
    }
    //根据monitorId获取页面全部组件
    public List<MonitorComponentDto> getMonitorComponentDtoListByMonitorId(int MonitorId){
        return monitorComponentDao.getMonitorComponentDtoListByMonitorId(MonitorId);
    }

    //更新数据页面组件数据
    public int upMonitorComponentData(List<MonitorComponentDto> monitorComponentDtoList){
        for(int i = 0;i<monitorComponentDtoList.size();i++){
            monitorComponentDao.upMonitorComponentData(monitorComponentDtoList.get(i));
        }
        return 0;
    }
}
