package rest.etb.com.co.controller;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import rest.etb.com.co.soap.SoapClient;
import rest.etb.com.co.stub.AuthADETB;
import rest.etb.com.co.stub.AuthADETBResponse;
import rest.etb.com.co.stub.FindADETB;
import rest.etb.com.co.stub.FindADETBResponse;



@CrossOrigin(origins = "*", methods= {RequestMethod.GET,RequestMethod.POST})
@RestController
@RequestMapping("/V1")
public class soapController {

	@Autowired
	private SoapClient client;
	
	
	//Metodo Para Verificar si el usuario existe
	@PostMapping("/auth")
	public AuthADETBResponse item(@RequestBody AuthADETB auth) throws InterruptedException {
		
		return client.getAuth(auth);
		
	//Metodo Login devuelve Boolean
	}
	@PostMapping("/find")
	public FindADETBResponse findAd(@RequestBody FindADETB find) {
		
			return client.getFind(find);
	}
}
