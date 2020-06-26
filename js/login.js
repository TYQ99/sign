/************
 *
 *  改编新加部分
 */
var teacher01=document.getElementById("boss01");//获取注册部分对象
var teacher02=document.getElementById("boss02");//获取登录部分对象
var facebook=document.getElementById("faceb");//获取使用其他方式注册按钮对象
var facebook01=document.getElementById("faceb01");//获取使用其他方式登录按钮对象
var denlu=document.getElementById("on");//获取转向登录按钮的对象
var zhuc=document.getElementById("candy")//获取转向注册按钮的对象
    teacher02.style.display="none";//暂时让登录部分看不到
    //操作其他方式注册按钮对象
    facebook.onclick=function(){
        alert("对不起，此功能没有资金开发")
    }
     //操作其他方式登录按钮对象
     facebook01.onclick=function(){
        alert("对不起，此功能没有资金开发")
    }
    //操作转向注册按钮对象
    zhuc.onclick=function(){
        teacher01.style.display="block"
        teacher02.style.display="none"
    }
/**
 * 
 * 此为原注册页面控制
 * 
 */
var subm=document.getElementById("in");//获取注册按钮事件对象
var key=false;//控制让其注册之后才能登陆
    subm.onclick=function(){
    //让按钮，点击变色
    if (subm.style.background=="#8C8C8C") {
        subm.style.background="#D8B07A"
    }else if(subm.style.background=="rgb(216, 176, 122)"){
        subm.style.background="black"
        subm.style.color="white"
    }else if(subm.style.background=="black"){
        subm.style.background="#8C8C8C"
        subm.style.color="#63B8FF"
    }else{
        subm.style.background="#D8B07A"
    }
    //1.获取输入框中注册内容
    var regAccount=document.getElementById("one").value;
    var regPassword=document.getElementById("two").value;
    var regEmail=document.getElementById("three").value;
    //2.判断并给予提示
    if(regAccount.length<5){
        document.getElementById("sp_one").innerHTML="大于等于5位"
        document.getElementById("sp_one").className="error"
    }else{
        document.getElementById("sp_one").innerHTML="输入真确!"
        document.getElementById("sp_one").className="success"
    }
    if (regPassword.length<6) {
        document.getElementById("sp_two").innerHTML="大于等于6位"
        document.getElementById("sp_two").className="error"
    } else {
        document.getElementById("sp_two").innerHTML="输入真确!"
        document.getElementById("sp_two").className="success"
    }
    if((regEmail.indexOf("@")!=-1)&&(regEmail.indexOf(".")!=-1)
        &&(regEmail.indexOf("@")<regEmail.indexOf("."))){
            document.getElementById("sp_three").innerHTML="输入真确!"
            document.getElementById("sp_three").className="success"
            if(regAccount.length>=5&&regPassword.length>=6){
                //待添加
                addRegUser(regAccount,regPassword,regEmail);
                showUser();//展示已添加
                //将JSON类型转换为string类型
                var str=JSON.stringify(json);
                //储存到 sessionStorage 中
                sessionStorage.setItem("users",str);
                alert("添加第"+json.regAccount.length+
                "个注册用户成功！<br>请记住您新注册的账号/密码："+regAccount+"/"+regPassword);
                key=true;
            }
        }else{
            document.getElementById("sp_three").innerHTML="***@.****"
            document.getElementById("sp_three").className="error"
        }
    }
    //操作转向登录按钮对象
    denlu.onclick=function(){
        if (key) {
            teacher02.style.display="block"
            teacher01.style.display="none"
        } else {
            alert("对不起！您还没有账号！")
        }
    }
/***
 * 
 * 原登录部分代码
 */
var frist=document.getElementById("on2");//获取登录按钮事件
//操作登录按钮事件
frist.onclick=function(){
    var logAccount=document.getElementById("logAccount").value;
    var logPassword=document.getElementById("logPassword").value;
    if (validate(logAccount,logPassword)==true){
        alert("登录成功！");
        sessionStorage.setItem("regAccount",logAccount);
        sessionStorage.setItem("regPassword",logPassword);
        window.location="try.html"
        //关闭计时器
        //clearInterval(time);
    }else{
        alert("登录失败，请重新尝试登录！");
    }
}

//显示40s倒计时，计时结束关闭窗口
// var sum=40;
// var times=document.getElementById("times");
// var time=setInterval(function(){
// times.innerHTML=sum;
// //让数字变色
// if (times.style.color=="red") {
//     times.style.color="green"
// }else if(times.style.color=="green"){
//     times.style.color="black"
// }else if(times.style.color=="black"){
//     times.style.color="red"
// }else{
//     times.style.color="green"
// }

// sum--;
// if(sum==0){
//     //关闭窗口
//     //window.location.href="about:blank";
//     //window.close();
// }
// },1000);

// //获取对象
// var font=document.getElementById("font");
// //让字为红色
// font.style.color="red";