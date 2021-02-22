package com.example.tenet.Controller;

import com.example.tenet.exeption.MonitorException;
import com.example.tenet.model.MonitorDto;
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

    //获取 一个大屏数据
    @GetMapping("/getMonitorData")
    public ResponseWrapper getMonitorData(@RequestParam("monitorId") int monitorId)
            throws MonitorException {
        return ResponseWrapper.successResponess(monitorService.getMonitorData(monitorId));
    }

    @GetMapping("/getAllMonitorId")
    public ResponseWrapper getAllMonitorId() {
        return ResponseWrapper.successResponess(monitorService.getAllMonitorId());
    }

    @PostMapping("/upMonitorData")
    public ResponseWrapper upMonitorData(@RequestBody MonitorDto monitorDto) {

        return ResponseWrapper.successResponess(monitorService.upMonitorData(monitorDto));
    }

}
