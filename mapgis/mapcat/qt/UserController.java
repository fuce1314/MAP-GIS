package cn.com.jetshine.fgzx.controller;


import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import cn.com.jetshine.fgzx.model.User;
import cn.com.jetshine.fgzx.service.IUserService;
import cn.hutool.core.io.FileUtil;
import cn.hutool.json.JSONObject;
import cn.hutool.json.JSONUtil;
import lombok.extern.slf4j.Slf4j;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

/**
 * <p>
 *  前端控制器
 * </p>
 *
 * @author fc
 * @since 2022-09-22
 */
@Controller
@RequestMapping("/fgzx/user")
public class UserController {
	@Autowired
	private IUserService iUserService;
	
	@GetMapping("/xxx")
	@ResponseBody
	public Object xxx(){
		List<User> list= iUserService.list();
		return list;
	}
	
	@GetMapping("/s")
	@CrossOrigin
	@ResponseBody
	public String xx(String callback,String ak,String sign,String timeStamp,String wd){
		String str=FileUtil.readString("C:\\Users\\Administrator\\Desktop\\地图猫\\mapcat\\webapps\\ROOT\\mapcat\\qt\\s\\"+wd,"UTF-8");
		str=str.replaceAll("BMapGL._rd._cbk29413", callback);
		str=str.replaceAll("R4pWCxXH9qm9ZpbnppGyxUGKydAd6esD", ak);
		str=str.replaceAll("1664007183580", timeStamp);
		str=str.replaceAll("c36fbe695f7f", sign);
		return str;
	}
	
	@GetMapping("/cen")
	@CrossOrigin
	@ResponseBody
	public String xx2(String callback,String ak,String sign,String timeStamp,String b){
		String str="/**/\n"
				+ ""+callback+" && "+callback+"({\n"
				+ "    \"bound_rank_params\": {\n"
				+ "        \"nc\": 1\n"
				+ "    },\n"
				+ "    \"content\": {\n"
				+ "        \"business\": \"\\u6fb6\\u2542\\u69e6\\u5997,\\u93c2\\u7248\\u02c9,\\u7455\\u51a8\\ue18d\\u5b80\",\n"
				+ "        \"district\": \"\\u5a0c\\u6b0f\\u6f7d\\u9367\\u6fc6\\u5c2f\",\n"
				+ "        \"name\": \"\\u4e2d\\u56fd\",\n"
				+ "        \"sup_bus\": 0,\n"
				+ "        \"sup_lukuang\": 0,\n"
				+ "        \"sup_subway\": 0,\n"
				+ "        \"type\": 1,\n"
				+ "        \"uid\": 1\n"
				+ "    },\n"
				+ "    \"current_city\": {\n"
				+ "        \"code\": 1,\n"
				+ "        \"geo\": \".=kZQFFBbkuwaA;\",\n"
				+ "        \"level\": 0,\n"
				+ "        \"name\": \"\\u4e2d\\u56fd\",\n"
				+ "        \"sup\": 0,\n"
				+ "        \"sup_bus\": 0,\n"
				+ "        \"sup_business_area\": 0,\n"
				+ "        \"sup_lukuang\": 0,\n"
				+ "        \"sup_subway\": 0,\n"
				+ "        \"type\": 0,\n"
				+ "        \"up_province_name\": \"\\u4e2d\\u56fd\"\n"
				+ "    },\n"
				+ "    \"err_msg\": \"\",\n"
				+ "    \"hot_city\": [\"\\u91cd\\u5e86\\u5e02|132\", \"\\u5317\\u4eac\\u5e02|131\", \"\\u4e0a\\u6d77\\u5e02|289\", \"\\u5e7f\\u5dde\\u5e02|257\", \"\\u6df1\\u5733\\u5e02|340\", \"\\u6210\\u90fd\\u5e02|75\", \"\\u5929\\u6d25\\u5e02|332\", \"\\u5357\\u4eac\\u5e02|315\", \"\\u676d\\u5dde\\u5e02|179\", \"\\u6b66\\u6c49\\u5e02|218\"],\n"
				+ "    \"result\": {\n"
				+ "        \"data_security_filt_res\": 0,\n"
				+ "        \"error\": 0,\n"
				+ "        \"illegal\": 0,\n"
				+ "        \"qid\": \"\",\n"
				+ "        \"time\": 0,\n"
				+ "        \"type\": 4,\n"
				+ "        \"qt\": \"cen\",\n"
				+ "        \"b\": \""+b+"\",\n"
				+ "        \"l\": \"8\",\n"
				+ "        \"ie\": \"utf-8\",\n"
				+ "        \"oue\": \"1\",\n"
				+ "        \"fromproduct\": \"jsapi\",\n"
				+ "        \"callback\": \""+callback+"\",\n"
				+ "        \"ak\": \""+ak+"\",\n"
				+ "        \"v\": \"gl\",\n"
				+ "        \"timeStamp\": \""+timeStamp+"\",\n"
				+ "        \"sign\": \""+sign+"\"\n"
				+ "    },\n"
				+ "    \"uii_err\": 0,\n"
				+ "    \"anti_auth\": \"\"\n"
				+ "})\n"
				+ "";
		return str;
	}
	
	@GetMapping("/ext")
	@CrossOrigin
	@ResponseBody
	public String xx3(String callback,String ak,String sign,String timeStamp,String adname){
		
		String str=FileUtil.readString("C:\\Users\\Administrator\\Desktop\\地图猫\\mapcat\\webapps\\ROOT\\mapcat\\qt\\ext\\"+adname,"UTF-8");
		str=str.replaceAll("BMapGL._rd._cbk50949", callback);
		str=str.replaceAll("R4pWCxXH9qm9ZpbnppGyxUGKydAd6esD", ak);
		str=str.replaceAll("1664007183580", timeStamp);
		str=str.replaceAll("c36fbe695f7f", sign);
		
		return str;
	}
	
	@GetMapping("/gc")
	@CrossOrigin
	@ResponseBody
	public String gc(String callback,String ak,String sign,String timeStamp,String cn,String wd){
		
		String str=FileUtil.readString("C:\\Users\\Administrator\\Desktop\\地图猫\\mapcat\\webapps\\ROOT\\mapcat\\qt\\gc\\"+cn+"\\"+wd,"UTF-8");
		JSONObject jsonObject=JSONUtil.parseObj(str);
		JSONObject jsonObject2= jsonObject.getJSONObject("result");
		jsonObject2.accumulate("callback", "BMapGL._rd._cbk96954");
		jsonObject2.accumulate("ak", "R4pWCxXH9qm9ZpbnppGyxUGKydAd6esD");
		jsonObject2.accumulate("v", "gl");
		jsonObject2.accumulate("timeStamp", "1664007183580");
		jsonObject2.accumulate("sign", "c36fbe695f7f");
		jsonObject2.accumulate("v", "gl");
		
		StringBuffer s=new StringBuffer("/**/BMapGL._rd._cbk96954 && BMapGL._rd._cbk96954(");
		s.append(jsonObject.toString());
		s.append(")");
		str=s.toString();
		str=str.replaceAll("BMapGL._rd._cbk96954", callback);
		str=str.replaceAll("R4pWCxXH9qm9ZpbnppGyxUGKydAd6esD", ak);
		str=str.replaceAll("1664007183580", timeStamp);
		str=str.replaceAll("c36fbe695f7f", sign);
		
		return str;
	}
	

}
