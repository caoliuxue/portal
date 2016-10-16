<%@ page contentType="text/html; charset=UTF-8"%>
<%@page import="java.net.URL,java.net.HttpURLConnection,java.io.InputStream,java.io.BufferedReader,java.io.InputStreamReader,com.letv.workbench.util.CookieUtil"%>
<%
	InputStream in = null;
	BufferedReader reader = null;
	HttpURLConnection conn = null;
	try{
		URL url = new URL(request.getParameter("url"));
	    conn = (HttpURLConnection) url.openConnection();
	    conn.setConnectTimeout(3000);
		String myCookie = request.getHeader("Cookie");
	    conn.setRequestProperty("Cookie", myCookie);
	    in = conn.getInputStream();
	    reader = new BufferedReader(new InputStreamReader(in, "utf-8"));
	    String line = null;
	    StringBuffer buffer = new StringBuffer();
	    while ((line = reader.readLine()) != null) {
			buffer.append(line);
	    }
		response.setContentType("application/json;charset=utf-8");
		out.print(buffer.toString());
	}catch(Exception e){
	    System.out.println("从【" + request.getParameter("url") + "】获取数据失败");
	    e.printStackTrace();
	}finally{
	    if(in!=null){
	    	in.close();
	    }
	    if(reader!=null){
	    	reader.close();
	    }
	    if(conn!=null){
	    	conn.disconnect();
	    }
	}
%>