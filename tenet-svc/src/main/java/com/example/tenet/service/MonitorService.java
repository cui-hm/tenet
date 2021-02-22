package com.example.tenet.service;

import com.example.tenet.dao.MonitorDao;
import com.example.tenet.entity.MonitorEntity;
import com.example.tenet.model.MonitorDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

//页面的业务层
@Service
public class MonitorService {

    @Autowired private MonitorDao monitorDao;

    @Autowired private MonitorComponentService monitorComponentService;



    public int insertWithData(String data) {
        MonitorEntity monitorEntity = new MonitorEntity();
        monitorEntity.setData(data);
        monitorEntity.setName("Undefined");
        monitorEntity.setTittle("未命名的页面");
        monitorEntity.setTittleExplain("请填写页面说明");
        monitorDao.insert(monitorEntity);
        return monitorEntity.getId();
    }

    public List<Integer> getAllMonitorId(){
        return monitorDao.getAllMonitorId();
    }

    public MonitorDto getMonitorData(int monitorId){
        MonitorDto monitorDto = new MonitorDto();
        MonitorEntity monitorEntity = monitorDao.getMonitorData(monitorId);
        monitorDto.setMonitorId(monitorEntity.getId());
        monitorDto.setData(monitorEntity.getData());
        monitorDto.setName(monitorEntity.getName());
        monitorDto.setTittle(monitorEntity.getTittle());
        monitorDto.setMonitorComponentList(monitorComponentService.getMonitorComponentDtoListByMonitorId(monitorId));
        return monitorDto;
    }

    public String upMonitorData(MonitorDto monitorDto){
        MonitorEntity monitorEntity = new MonitorEntity(monitorDto.getMonitorId(),monitorDto.getData(),monitorDto.getTittle(),monitorDto.getName());
        monitorDao.upMonitorData(monitorEntity);
        monitorComponentService.upMonitorComponentData(monitorDto.getMonitorComponentList());
        return "保存成功";
    }
}
