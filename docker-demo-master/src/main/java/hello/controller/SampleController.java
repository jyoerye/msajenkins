package hello.controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
 
@RestController
public class SampleController {
 
    @RequestMapping("/test")
    public String index(@RequestParam("id") String id,@RequestParam("fname") String fname,@RequestParam("lname") String lname) {
    	System.out.println(id + fname + lname);
        return "Greetings from Spring Boot!";
    }
 
}