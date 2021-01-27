package com.example.tenet.Controller;

import com.example.tenet.entity.NoteEntity;
import com.example.tenet.service.NoteService;
import com.example.tenet.wrapper.ResponseWrapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/note")
public class NoteController {

    @Autowired private NoteService noteService;

    @PostMapping("/insertNote")
    public ResponseWrapper insertNote(@RequestBody NoteEntity noteEntity){
        System.out.println(noteEntity);
        noteService.insertNote(noteEntity);
        return ResponseWrapper.successResponess("成功");
    }




}
