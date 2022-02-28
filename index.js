
function mcq(){
    let a ="Object Oriented";
    
    let count=0;
    let b ="Both A and B";
  let c ="Both A and B";
   let d="Ignores statement"
    let e ="All of the above" 
    var ele = document.getElementsByName('1');
    for(i = 0; i < ele.length; i++) {
        if(ele[i].checked)
      //  document.getElementById("result").innerHTML
        //        = "Gender: "+ele[i].value;
        if(ele[i].value==a)
        count++;
        
       
    }
   
    var ele2 = document.getElementsByName('2');
              
    for(i = 0; i < ele2.length; i++) {
        if(ele2[i].checked)
    
        if(ele2[i].value==b)
        count++;
        
       
    }
    var ele3 = document.getElementsByName('3');
              
    for(i = 0; i < ele3.length; i++) {
        if(ele3[i].checked)
    
        if(ele3[i].value==c)
        count++;
        
       
    }
    var ele4 = document.getElementsByName('4');
              
    for(i = 0; i < ele4.length; i++) {
        if(ele4[i].checked)
    
        if(ele4[i].value==d)
        count++;
       
       
    }
    var ele5 = document.getElementsByName('5');
              
    for(i = 0; i < ele5.length; i++) {
        if(ele5[i].checked)
   
        if(ele5[i].value==e)
        count++;
   
       
    }

    if(count>=4)
    alert("Passed");
    else if(count <=3 && count>=2)
    alert("May be");
    else
    alert("Failed");
}