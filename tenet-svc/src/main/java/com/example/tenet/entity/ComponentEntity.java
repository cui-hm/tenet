package com.example.tenet.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@NoArgsConstructor
@AllArgsConstructor
public class ComponentEntity {
    private int id;
    private String componentName;
    private String componentConfig;
    private String componentRem;
    private String url;
}
