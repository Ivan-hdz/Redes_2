import java.net.*;
import java.io.*;
public class Cliente{
	public static void main(String[] args){
		try{
			BufferedReader br=new BufferedReader(new InputStreamReader(System.in));
			System.out.println("Escriba la direccion del servidor");
			String host=br.readLine();
			int pto=9999;
			Socket cliente=new Socket(host,pto);
			System.out.println("Conexion establecida");
			PrintWriter salida=new PrintWriter(new OutputStreamWriter(cliente.getOutputStream()));
			for(;;){
				System.out.println("mensaje");
				String msj=br.readLine();
				if(msj.compareToIgnoreCase("salir")==0){
					System.out.println("Adios");
					br.close();
					cliente.close();
					break;
				}else{
					salida.println(msj);
					salida.flush();
					BufferedReader entrada=new BufferedReader(new InputStreamReader(cliente.getInputStream()));
					String en=entrada.readLine();
					System.out.println(en); 
				}
			}
		}catch(Exception e){
			e.printStackTrace();
		}
	}

}