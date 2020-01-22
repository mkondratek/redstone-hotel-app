package com.example.redstonehotelapp.controller;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {

    @GetMapping("/")
    public String index() {
        return "index";
    }

    @GetMapping("/healthcheck")
    public ResponseEntity<HttpStatus> ok() {
        return ResponseEntity.ok(HttpStatus.OK);
    }
}
