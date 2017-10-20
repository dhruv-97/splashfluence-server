function validate(){
	if(form.BRAND_NAME.value==""){
		alert('Please Enter The Brand Name.');
		form.BRAND_NAME.focus();
		return false;
	}
	if(form.BRAND_URL.value==""){
		alert('Please Enter The Brand Url');
		form.BRAND_URL.focus();
		return false;
	}
	if(form.USERNAME.value==""){
		alert('Please Enter Your Name');
		form.USERNAME.focus();
		return false;
	}
	if(form.PASSWORD.value==""){
		alert('Please Enter Your Password');
		form.PASSWORD.focus();
		return false;
	}
	if(form.PHONE_NO.value=="") {
		alert("Please Enter The Phone Number.");
		form.PHONE_NO.focus();
		return false;
	}
	if(isNaN(form.PHONE_NO.value)) {
		alert("Please Enter a Valid Phone Number.");
		form.PHONE_NO.focus();
		return false;
	}
	if((form.PHONE_NO.value).length < 10) {
		alert("Phone Number Should Be Minimum 10 Digits Long.");
		form.PHONE_NO.focus();
		return false;
	}
	if((form.PHONE_NO.value).length > 10) {
		alert("Phone Number Should Be Maximum 10 Digits Long.");
		form.PHONE_NO.focus();
		return false;
	}
	if(form.EMAIL_ID.value=="") {
		alert("Please Enter a Valid Email Id.");
		form.EMAIL_ID.focus();
		return false;
	}
	return true;
}	