package com.example.tenet.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class MonitorComponentEntity {
    int monitorComponentId;
    int monitorId;
    String Data;
}
