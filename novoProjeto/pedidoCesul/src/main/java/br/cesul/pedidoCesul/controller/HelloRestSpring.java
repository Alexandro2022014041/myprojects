package br.cesul.pedidoCesul.controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
@RestController
@RequestMapping("/helloRest")
public class HelloRestSpring {
    @GetMapping("/spring")
    public String helloRestSpring(){
        return "Hello Rest Spring CESUL";
    }
}
