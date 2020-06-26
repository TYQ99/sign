    //定义注册用户的json对象
    var json={
        "regAccount":[],
        "regPassword":[],
        "regEmail":[]
    }
    /**
     * 向json添加一个新用户
     * @param {*} newAccount 
     * @param {*} newPassword 
     * @param {*} newEmail 
     */
    function addRegUser(newAccount,newPassword,newEmail){
        json.regAccount.push(newAccount);//数组追加一个元素
        json.regPassword.push(newPassword);
        json.regEmail.push(newEmail);
        console.log("第"+json.regAccount.length+"个用户添加成功！")
    }
    /**
     * 展示json中的三个属性的对应数组元素
     */
    function showUser(){
        for (let i = 0; i < json.regAccount.length; i++) {
        console.log("第"+(i+1)+"个用户账号："+json.regAccount[i]);
        console.log("第"+(i+1)+"个用户密码："+json.regPassword[i]);
        console.log("第"+(i+1)+"个用户邮箱："+json.regEmail[i]);
        }
    }
    /**
     * 进行登录验证，登录时调用传入两个参数，判断两个参数是否与已注册的信息是否有匹配的
     * 还回真假值
     * @param {*} logAccount 
     * @param {*} logPassword 
     */
    function validate(logAccount,logPassword){
        var logged=false;
        //获取 sessionStorage 中的字符串
        var str=sessionStorage.getItem("users");
        //将String类型转换为JSON类型
        var json_user=JSON.parse(str);
    
        console.log("比对验证已注册的"+json_user.regAccount.length+"个用户中···");
        for (var i =0; i < json_user.regAccount.length; i++) {
            if ((json_user.regAccount[i]==logAccount)&&(json_user.regPassword[i]==logPassword)){
                console.log("比对成功！");
                logged=true;
                break;
            }
        }
        return logged;
    }