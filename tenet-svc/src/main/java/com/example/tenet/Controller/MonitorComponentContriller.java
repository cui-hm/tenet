package com.example.tenet.Controller;

import com.example.tenet.service.MonitorComponentService;
import com.example.tenet.wrapper.ResponseWrapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/MonitorComponent")
public class MonitorComponentContriller {

    @Autowired private MonitorComponentService monitorComponentService;

    @PostMapping(value = "/insertMonitorComponent")
    public ResponseWrapper insertMonitorComponent(@RequestBody int monitorId){
        return ResponseWrapper.successResponess(monitorComponentService.insertMonitorComponen(monitorId));
    }
}
