var numericalValues = new Array();
numericalValues["edr"]= 10;
numericalValues["av"]= 5;
numericalValues["both"]= 10;
numericalValues["none"]= 2;
numericalValues["idk"]= 2;
numericalValues["cisoandsoc"]= 10;
numericalValues["cisoandit"]= 5;
numericalValues["soc"]= 5;
numericalValues["it"]= 2;
  

//得到scoreA了！
function getScoreA(){
  var scoreA = 0;
  var form = document.forms["survey"];
  var product = form.elements["product"];
  for(var i=0; i<product.length; i++){
      if(product[i].checked){
          scoreA = numericalValues[survey.product[i].value];
          break;
      }
  }
  return scoreA;
}
  
//ScoreB
function getScoreB(){
  var scoreB = 0;
  var form = document.forms["survey"];
  var security = form.elements["security"];
  for(var i=0; i<security.length; i++){
      if(security[i].checked){
          scoreB = numericalValues[survey.security[i].value];
          break;
      }
  }
  return scoreB;
}

// 得到total了！
function getTotal(){
  var totalScore = getScoreA() + getScoreB();
  if (totalScore >= 20){
    window.location.assign("wine_tv.html");
  } else if( totalScore > 10 & totalScore < 20){
    window.location.assign("wine_mdr.html");
  }else {
    window.location.assign("wine_ts.html");
  }
}

// 取text值
function processFormData() {
  const form = document.forms['survey'];    // 取得 name 屬性為 form 的表單
  const product = form.querySelector('input[name="product"]:checked').value;
  const name = form.elements.name.value;  // 取得 elements 集合中 name 屬性為 name 的值
  const email = form.elements.email.value;// 取得 elements 集合中 name 屬性為 email 的值
  alert("\n你的姓名是 " + name + "\n電子郵件是 " + email);
}
submitBtn.addEventListener("click", processFormData);

//radio button
function radio()
{
    var selectedIndex = -1;
    var survey = document.getElementById("survey");
    var i = 0;
    
    for (i=0; i<survey.product.length; i++)
    {
        if (survey.product[i].checked)
        {
            selectedIndex = i;
            alert("您选择项的 value 是：" + survey.product[i].value);
            break;
        }
    }
    
    if (selectedIndex < 0)
    {
        alert("您没有选择任何项");
    }
}