import java.net.*;
import java.io.*;
public class Servidor{
	public static void main(String[] args){
		try{
			int pto=9999;
			ServerSocket servidor=new ServerSocket(pto);
			System.out.println("Servidor en espera");
			//Espera conexion
			for(;;){
				Socket cliente=servidor.accept();
				System.out.println("Cliente conectado desde: "+cliente.getRemoteSocketAddress()+":"+cliente.getPort());
				PrintWriter pw=new PrintWriter(new OutputStreamWriter(cliente.getOutputStream()));
				BufferedReader br=new BufferedReader(new InputStreamReader(cliente.getInputStream()));	
				//Recibir n mensajes
				for(;;){
					String msj=br.readLine();//Recibimos mensaje del cliente
					//Si manda el cliente salir se saldar del segundo ciclo infinito
					if(msj.compareToIgnoreCase("salir")==0){
						System.out.println("Cliente se va");
						br.close();
						pw.close();
						cliente.close();
						break;
					}else{
						String eco=msj+" "+" eco";
						pw.println(eco);//Mandamos mensaje al cliente
						pw.flush();
					}
				}
			}
		}catch(Exception e){
			e.printStackTrace();
		}

	}
}