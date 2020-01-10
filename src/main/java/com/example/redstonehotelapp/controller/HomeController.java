package com.example.redstonehotelapp.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class HomeController {

    @RequestMapping(value = "/")
    public String index() {
        return "index";
    }

    @RequestMapping(value = "/healthcheck")
    @ResponseBody
    public ResponseEntity ok() {
        return ResponseEntity.ok(HttpStatus.OK);
    }
}
