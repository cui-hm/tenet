package com.example.tenet.model;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class MonitorDto {
    private int monitorId;
    private String data;
    private String tittle;
    private String name;
    private List<MonitorComponentDto> monitorComponentList;
}
