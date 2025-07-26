//First Program:

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.Statement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class jdbc {
 public static void main(String[] args) throws ClassNotFoundException, SQLException {
	 Class.forName("com.mysql.cj.jdbc.Driver"); // registering the driver
	 
	 Connection con= DriverManager.getConnection("jdbc:mysql://localhost:3306/kaviya","root","root");
	 System.out.println("Connection Created");
	 
	 Statement s = con.createStatement();
//	 
	 ResultSet rs = s.executeQuery("SELECT * FROM kaviya.datas;");
//	 
	 while(rs.next()) {
		 int id = rs.getInt("id");
		 String name = rs.getString("name");
		 System.out.println(id+"\t\t"+name);
		 
		 
	 }
	 con.close();
 }
}

