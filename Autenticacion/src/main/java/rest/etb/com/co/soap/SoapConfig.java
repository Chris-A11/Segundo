package rest.etb.com.co.soap;


import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.oxm.jaxb.Jaxb2Marshaller;

@Configuration
public class SoapConfig {
	


	   //Configuracion JAXB marsheller (Se encarga la conversion del XML)
	    @Bean
	    public Jaxb2Marshaller marshaller(){
	        Jaxb2Marshaller jaxb2Marshaller = new Jaxb2Marshaller();
	        jaxb2Marshaller.setPackagesToScan("rest.etb.com.co.stub");//<<<-----Ruta Package Metodos WSDL
	        return jaxb2Marshaller;
	    }

	 
	    
	}