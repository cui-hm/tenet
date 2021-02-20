package com.example.tenet.service;

import com.example.tenet.dao.ComponentDao;
import com.example.tenet.entity.ComponentEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CompontService {

    @Autowired
    private ComponentDao componentDao;

    public String insertComponent(ComponentEntity componentEntity){
        String componentName = componentEntity.getComponentName();
        List<String> getAllComponentNameList = componentDao.getAllComponentName();
        for(String s : getAllComponentNameList){
            if(s.equals(componentName)){
                return "失败:组件库内已有'"+componentName+"'请确认组件名是否正确,或更改组件名称";
            }
        }
        if(componentDao.insertComponent(componentEntity) == 1){
            return "发布成功";
        }else{
            return "失败";
        }
    };

    public List<String> getAllComponentName(){

        return componentDao.getAllComponentName();
    }

    public List<ComponentEntity> getAllComponentData(){

        return componentDao.getAllComponentData();
    }
}
