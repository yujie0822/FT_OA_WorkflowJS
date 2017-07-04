<%@ page language="java" contentType="text/html; charset=UTF-8" %> 
<%@ page import="java.util.*" %>
<%@ page import="weaver.hrm.*" %>
<%@ page import="weaver.general.*" %>
<jsp:useBean id="rs" class="weaver.conn.RecordSet" scope="page" />
<%
User user = HrmUserVarify.getUser (request , response) ;
String operation = Util.null2String(request.getParameter("operation"));
if (operation.equals("getPLM")) {
	String plineids = ",";
	String userid = "" + user.getUID();
	String userids = userid;
	ArrayList<User> usrs= (ArrayList<User>) User.getBelongtoUsersByUserId(userid);
	for(User u:usrs){
		userids = userids + "," + u.getUID();
	}
	rs.executeSql("select code from uf_pline where code in (select pline from matrixtable_5 where plm in (" + userids + "))");
	while (rs.next()) {
		String plineid = Util.null2String(rs.getString("code"));
		plineids = plineids + plineid + ",";
	}
	out.println(plineids);
} else if (operation.equals("getPLGM")) {
	String plineids = ",";
	String userid = "" + user.getUID();
	String userids = userid;
	ArrayList<User> usrs= (ArrayList<User>) User.getBelongtoUsersByUserId(userid);
	for(User u:usrs){
		userids = userids + "," + u.getUID();
	}
	rs.executeSql("select code from uf_pline where code in (select pline from matrixtable_5 where plgm in (" + userids + "))");
	while (rs.next()) {
		String plineid = Util.null2String(rs.getString("code"));
		plineids = plineids + plineid + ",";
	}
	out.println(plineids);
}
%>


