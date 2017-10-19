<%@ page language="java" contentType="text/html; charset=UTF-8" %>
<%@ page import="java.util.*" %>
<%@ page import="weaver.hrm.*" %>
<%@ page import="weaver.general.*" %>
<jsp:useBean id="rs" class="weaver.conn.RecordSet" scope="page" />
<%
User user = HrmUserVarify.getUser (request , response) ;
String litm = Util.null2String(request.getParameter("litm"));
rs.executeSql("select count(*) as res from proddta.f4101@jde_dblink where IMLITM = '"+litm+"'");
out.println(Util.null2String(rs.getString("res")));
%>
