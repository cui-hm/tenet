package com.example.tenet.wrapper;

import lombok.Data;

@Data
public class ResponseWrapper {
    private boolean success;
    private String message;
    private Object data;

    public static ResponseWrapper successResponess(Object Data){
        ResponseWrapper responseWrapper = new ResponseWrapper();
        responseWrapper.success = true;
        responseWrapper.data = Data;
        return responseWrapper;
    }

    public static ResponseWrapper failResponess(String message){
        ResponseWrapper responseWrapper = new ResponseWrapper();
        responseWrapper.success = false;
        responseWrapper.message = message;
        return responseWrapper;
    }

}
