function check()
{
	// daặt tên là f
	var ht=f.HoTen.value;
	var dc=f.DiaChi.value;
	var em=f.Email.value;
	var dt=f.DienThoai.value;
	
	var emRegExp = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
	var dtRegExp = /(84|0[3|5|7|8|9])+([0-9]{8})\b/
	
	if(!emRegExp.test(em))
		{
			alert('Email không hợp lệ');
			return false;
		}
		if(!emRegExp.test(em))
		{
			alert('Email không hợp lệ');
			return false;
		}
	if(ht == '')
	{
		alert('Họ tên  không được bỏ trống !!!');
		return false;
	}
	if(dc == '')
	{
		alert('Địa chỉ không được bỏ trống !!!');
		return false;
	}
	if(em == '')
	{
		alert('Email không được bỏ trống !!!');
		return false;
	}
	if(dt == '')
	{
		alert('Điện thoại không được bỏ trống !!!');
		return false;
	}
	return true;
}