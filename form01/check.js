function check()
{
	// daặt tên là f
	var username=f.TenDangNhap.value;
	var password=f.MatKhau.value;
	if(username == '')
	{
		alert('Tên đăng nhập không được bỏ trống !!!');
		return false;
	}
	if(password == '')
	{
		alert('Mật Khẩu không được bỏ trống !!!');
		return false;
	}
	return true;
}