package com.example.tenet.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
public class MonitorEntity {
    private int id;
    private String data;
    private String url;
    private String tittle;
    private String name;
    private String tittleExplain;

    public MonitorEntity(int id,String data,String tittle,String name){
        this.id=id;
        this.data=data;
        this.tittle=tittle;
        this.name=name;
    };

    public MonitorEntity(){};
}
