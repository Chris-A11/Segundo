package rest.etb.com.co;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.CrossOrigin;
@CrossOrigin(origins = "*")
@SpringBootApplication
public class ConsumeWsdlApplication {

	public static void main(String[] args) {
		SpringApplication.run(ConsumeWsdlApplication.class, args);
		
	}

}
