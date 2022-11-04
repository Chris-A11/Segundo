package rest.etb.com.co.soap;







import java.io.IOException;

import javax.xml.soap.MimeHeaders;
import javax.xml.transform.TransformerException;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.oxm.jaxb.Jaxb2Marshaller;
import org.springframework.stereotype.Service;
import org.springframework.ws.WebServiceMessage;
import org.springframework.ws.client.core.WebServiceMessageCallback;
import org.springframework.ws.client.core.WebServiceTemplate;
import org.springframework.ws.soap.saaj.SaajSoapMessage;

import rest.etb.com.co.stub.AuthADETB;
import rest.etb.com.co.stub.AuthADETBResponse;
import rest.etb.com.co.stub.FindADETB;
import rest.etb.com.co.stub.FindADETBResponse;

@Service
//Clase encargada de la invocacion de los servicios
public class SoapClient {
	
	
	//Url de Consulta
    private String endpoint = "http://autenticar.etb.net.co/consulta.asmx";

    @Autowired
    private Jaxb2Marshaller jaxb2Marshaller;
    
    private WebServiceTemplate webServiceTemplate;

    
    //Servicio login Username y pwd
    public AuthADETBResponse getAuth(AuthADETB request) {	    
    	
    	webServiceTemplate = new WebServiceTemplate(jaxb2Marshaller);
    	
    	return (AuthADETBResponse) webServiceTemplate.marshalSendAndReceive(endpoint, request,new WebServiceMessageCallback(){
            @Override
            public void doWithMessage(WebServiceMessage message) throws IOException, TransformerException {
                SaajSoapMessage soapMessage = (SaajSoapMessage) message;
                MimeHeaders mimeHeader = soapMessage.getSaajMessage().getMimeHeaders();
                mimeHeader.setHeader("Content-Type", "application/json;charset=UTF-8;"); 
                mimeHeader.setHeader("SOAPAction", "http://autenticar.etb.net.co/AuthADETB");
            
            }
        });
                
    }
    	
    	
    //*Servicio comprobar si el usuario Existe
    public FindADETBResponse getFind(FindADETB request) {       

   	webServiceTemplate = new WebServiceTemplate(jaxb2Marshaller);
   	
   	return (FindADETBResponse) webServiceTemplate.marshalSendAndReceive(endpoint, request,new WebServiceMessageCallback(){
        @Override
        public void doWithMessage(WebServiceMessage message) throws IOException, TransformerException {
            SaajSoapMessage soapMessage = (SaajSoapMessage) message;
            MimeHeaders mimeHeader = soapMessage.getSaajMessage().getMimeHeaders();
            mimeHeader.setHeader("Content-Type", "application/json;charset=UTF-8;"); 
            mimeHeader.setHeader("SOAPAction", "http://autenticar.etb.net.co/FindADETB");
        
        }
    });
   }
    	
}
 
   

