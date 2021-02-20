package com.example.tenet.Controller;

import com.example.tenet.entity.ComponentEntity;
import com.example.tenet.service.CompontService;
import com.example.tenet.wrapper.ResponseWrapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/component")
public class ComponentController {

    @Autowired private CompontService compontService;

    //往组件库 插入一个组件
    @PostMapping("/insertComponent")
    public ResponseWrapper insertComponent(@RequestBody ComponentEntity componentEntity){
        return ResponseWrapper.successResponess(compontService.insertComponent(componentEntity));
    }

    @GetMapping("/getAllComponentName")
    public ResponseWrapper getAllComponentName(){
        return ResponseWrapper.successResponess(compontService.getAllComponentName());
    }

    @GetMapping("/getAllComponentData")
    public ResponseWrapper getAllComponentData(){
        return ResponseWrapper.successResponess(compontService.getAllComponentData());
    }


}
