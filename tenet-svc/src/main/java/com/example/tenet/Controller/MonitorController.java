package com.example.tenet.Controller;

import com.example.tenet.service.MonitorService;
import com.example.tenet.wrapper.ResponseWrapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/monitor")
//页面的控制层
public class MonitorController {

    @Autowired private MonitorService monitorService;


    @PostMapping(value = "/insertWithData")
    public ResponseWrapper insertWithData(@RequestBody String data) {
        return ResponseWrapper.successResponess(monitorService.insertWithData(data));
    }


    @GetMapping("/getAllMonitorId")
    public ResponseWrapper getAllMonitorId() {
        return ResponseWrapper.successResponess(monitorService.getAllMonitorId());
    }


}
