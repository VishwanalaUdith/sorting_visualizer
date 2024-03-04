function randomValue(){
    let max=50;
    let min=-50;
    for(let i=1;i<=8;i++){
        let p="box"+i;
        document.getElementById(p).innerHTML=Math.floor(Math.random() * (max - min + 1) ) + min;
    }
    document.getElementById("start").disabled = false;
    
  }
  //Left side of array
  async function breakLeft(){
    document.getElementsByClassName("c41")[0].style.display ='';
    document.getElementsByClassName("c42")[0].style.display ='';
    let a=document.getElementById("21").innerHTML;
    a=parseInt(a);
    let b=document.getElementById("22").innerHTML;
    b=parseInt(b);
    document.getElementById("last-1").innerHTML=a;
    document.getElementById("last-2").innerHTML=b;
    document.getElementById("last-1").style.backgroundColor="orange";
    document.getElementById("last-2").style.backgroundColor="orange";
    await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
            }, 1000
    ))
    if(a>b){
      document.getElementById("21").innerHTML=b;
      document.getElementById("22").innerHTML=a;
    }
    await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
            }, 1000
    ))
    document.getElementsByClassName("c41")[0].style.display='none';
    document.getElementsByClassName("c42")[0].style.display='none';
  }
  
  async function breakRight(){
    document.getElementsByClassName("c43")[0].style.display ='';
    document.getElementsByClassName("c44")[0].style.display ='';
    let a=document.getElementById("23").innerHTML;
    a=parseInt(a);
    let b=document.getElementById("24").innerHTML;
    b=parseInt(b);
    document.getElementById("last-3").innerHTML=a;
    document.getElementById("last-4").innerHTML=b;
    document.getElementById("last-3").style.backgroundColor="orange";
    document.getElementById("last-4").style.backgroundColor="orange";
    await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
            }, 1000
    ))
    if(a>b){
      document.getElementById("23").innerHTML=b;
      document.getElementById("24").innerHTML=a;
    }
    await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
            }, 1000
    ))
    document.getElementsByClassName("c43")[0].style.display='none';
    document.getElementsByClassName("c44")[0].style.display='none';
  }
  
  async function copyLeft1(){
    document.getElementsByClassName("c3left")[0].style.display ='';
    document.getElementsByClassName("c3mid1")[0].style.display ='';
    for(let i=1;i<=4;i++){
      let v="left-1"+i;
      let b="2"+i;
      document.getElementById(b).innerHTML=document.getElementById(v).innerHTML;
    }
    await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
            }, 1500
    ))
    breakLeft();
    await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
            }, 2000
    ))
    breakRight();
  }
  
  async function merge2LeftPortions(){
    for(let s=1;s<=4;s++){
      let h="left-1"+s;
      document.getElementById(h).innerHTML="";
    }
    let i=1,j=3,k=1;
    while(i<=2 && j<=4){
      let x="2"+i;
      let y="2"+j;
      let z="left-1"+k;
      let a=document.getElementById(x).innerHTML;
      a=parseInt(a);
      let b=document.getElementById(y).innerHTML;
      b=parseInt(b);
      document.getElementById(x).style.backgroundColor="orange";
      document.getElementById(y).style.backgroundColor="orange";
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
            }, 750
      ))
      if(a<b){
        document.getElementById(z).innerHTML=a;
        i+=1;
      }
      else{
        document.getElementById(z).innerHTML=b;
        j+=1;
      }
      k++;
      document.getElementById(x).style.backgroundColor="";
      document.getElementById(y).style.backgroundColor="";
    }
    while(i<=2){
      
      let x="2"+i;
      let z="left-1"+k;
      document.getElementById(x).style.backgroundColor="orange";
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
            }, 750
            ))
    
    document.getElementById(z).innerHTML=document.getElementById(x).innerHTML;
    document.getElementById(x).style.backgroundColor="";
    i++;
    k++;
  }
  while(j<=4){
    
    let x="2"+j;
    let z="left-1"+k;
    document.getElementById(x).style.backgroundColor="orange";
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
          }, 750
    ))
    document.getElementById(z).innerHTML=document.getElementById(x).innerHTML;
    document.getElementById(x).style.backgroundColor="";
    j++;
    k++;
  }
  document.getElementsByClassName("c3left")[0].style.display='none';
  document.getElementsByClassName("c3mid1")[0].style.display='none';
}

async function copyLeft(){
  document.getElementsByClassName("c2left")[0].style.display ='';
  for(let i=1;i<=4;i++){
    let v="left-1"+i;
    let b="box"+i;
    document.getElementById(v).innerHTML=document.getElementById(b).innerHTML;
  }
  await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
          }, 750
  ))
  copyLeft1();
  await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
          }, 7000
  ))
  merge2LeftPortions();
}

//Right Side of the array
async function breakcopyRight1Left(){
  document.getElementsByClassName("c45")[0].style.display ='';
  document.getElementsByClassName("c46")[0].style.display ='';
  let a=document.getElementById("25").innerHTML;
  a=parseInt(a);
  let b=document.getElementById("26").innerHTML;
  b=parseInt(b);
  document.getElementById("last-5").innerHTML=a;
  document.getElementById("last-6").innerHTML=b;
  document.getElementById("last-5").style.backgroundColor="orange";
  document.getElementById("last-6").style.backgroundColor="orange";
  await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
          }, 1000
  ))
  if(a>b){
    document.getElementById("25").innerHTML=b;
    document.getElementById("26").innerHTML=a;
  }
  document.getElementsByClassName("c45")[0].style.display='none';
  document.getElementsByClassName("c46")[0].style.display='none';
}

async function breakcopyRight1Right(){
  document.getElementsByClassName("c47")[0].style.display ='';
  document.getElementsByClassName("c48")[0].style.display ='';
  let a=document.getElementById("27").innerHTML;
  a=parseInt(a);
  let b=document.getElementById("28").innerHTML;
  b=parseInt(b);
  document.getElementById("last-7").innerHTML=a;
  document.getElementById("last-8").innerHTML=b;
  document.getElementById("last-7").style.backgroundColor="orange";
  document.getElementById("last-8").style.backgroundColor="orange";
  await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
          }, 1000
  ))
  if(a>b){
    document.getElementById("27").innerHTML=b;
    document.getElementById("28").innerHTML=a;
  }
  document.getElementsByClassName("c47")[0].style.display='none';
  document.getElementsByClassName("c48")[0].style.display='none';
}

async function copyRight1(){
  document.getElementsByClassName("c3mid2")[0].style.display ='';
  document.getElementsByClassName("c3right")[0].style.display ='';
  for(let i=5;i<=8;i++){
    let v="right-1"+(i-4);
    let b="2"+i;
    document.getElementById(b).innerHTML=document.getElementById(v).innerHTML;
  }
  await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
          }, 1000
  ))
  breakcopyRight1Left();
  await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
          }, 2000
  ))
  breakcopyRight1Right();
}

async function merge2RightPortions(){
  for(let s=1;s<=4;s++){
    let h="right-1"+s;
    document.getElementById(h).innerHTML="";
  }
  let i=5,j=7,k=1;
  while(i<=6 && j<=8){
    let x="2"+i;
    let y="2"+j;
    let z="right-1"+k;
    let a=document.getElementById(x).innerHTML;
    a=parseInt(a);
    let b=document.getElementById(y).innerHTML;
    b=parseInt(b);
    document.getElementById(x).style.backgroundColor="orange";
    document.getElementById(y).style.backgroundColor="orange";
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
          }, 750
    ))
    if(a<b){
      document.getElementById(z).innerHTML=a;
      i+=1;
    }
    else{
      document.getElementById(z).innerHTML=b;
      j+=1;
    }
    k++;
    document.getElementById(x).style.backgroundColor="";
    document.getElementById(y).style.backgroundColor="";
  }
  while(i<=6){
    
    let x="2"+i;
    let z="right-1"+k;
    document.getElementById(x).style.backgroundColor="orange";
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
          }, 750
    ))
    
    document.getElementById(z).innerHTML=document.getElementById(x).innerHTML;
    document.getElementById(x).style.backgroundColor="";
    i++;
    k++;
  }
  while(j<=8){
    
    let x="2"+j;
    let z="right-1"+k;
    document.getElementById(x).style.backgroundColor="orange";
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
          }, 750
    ))
    document.getElementById(z).innerHTML=document.getElementById(x).innerHTML;
    document.getElementById(x).style.backgroundColor="";
    j++;
    k++;
  }
  document.getElementsByClassName("c3mid2")[0].style.display='none';
  document.getElementsByClassName("c3right")[0].style.display='none';
}

async function copyRight(){
  document.getElementsByClassName("c2right")[0].style.display ='';
  for(let i=1;i<=4;i++){
    let v="right-1"+i;
    let b="box"+(i+4);
    document.getElementById(v).innerHTML=document.getElementById(b).innerHTML;
  }
  await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
          }, 12000
  ))
  copyRight1();
  await new Promise((resolve) =>
  setTimeout(() => {
    resolve();
      }, 6000
))
  merge2RightPortions();
}
async function merge(){
  for(let i=1;i<=8;i++){
    let s="box"+i;
    document.getElementById(s).innerHTML="";
  }
  let i=1,j=1,k=1;
  while(i<=4 && j<=4){
    let c="box"+k;
    let a="left-1"+i;
    let b="right-1"+j;
    let x=document.getElementById(a).innerHTML;
    x=parseInt(x);
    let y=document.getElementById(b).innerHTML;
    y=parseInt(y);
    document.getElementById(a).style.backgroundColor="orange";
    document.getElementById(b).style.backgroundColor="orange";
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
          }, 750
    ))
    if(x<y){
      document.getElementById(c).innerHTML=x;
      i++;
    }
    else{
      document.getElementById(c).innerHTML=y;
      j++;
    }
    document.getElementById(a).style.backgroundColor="";
    document.getElementById(b).style.backgroundColor="";
    k++;
  }
  while(i<=4){
    let c="box"+k;
    let a="left-1"+i;
    document.getElementById(a).style.backgroundColor="orange";
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
          }, 750
    ))
    document.getElementById(c).innerHTML=document.getElementById(a).innerHTML;
    i++;
    k++;
  }
  while(j<=4){
    let c="box"+k;
    let b="right-1"+j;
    document.getElementById(b).style.backgroundColor="orange";
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
          }, 750
    ))
    document.getElementById(c).innerHTML=document.getElementById(b).innerHTML;
    j++;
    k++;
  }
  document.getElementsByClassName("c2left")[0].style.display='none';
  document.getElementsByClassName("c2right")[0].style.display='none';
  document.getElementById("tag").innerHTML="Sorted!";
  await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
          }, 1500
    ))
    document.getElementById("tag").innerHTML="";  
}
async function mergeSort(){
  document.getElementById("generate").disabled = true;
  await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
          }, 750
  ))
  copyLeft();
  
  copyRight();
  await new Promise((resolve) =>
  setTimeout(() => {
    resolve();
      }, 22000
))
  merge();
  document.getElementById("generate").disabled = false;
}


document.getElementsByClassName("c2left")[0].style.display='none';
document.getElementsByClassName("c2right")[0].style.display='none';
document.getElementsByClassName("c3left")[0].style.display='none';
document.getElementsByClassName("c3mid1")[0].style.display='none';
document.getElementsByClassName("c3mid2")[0].style.display='none';
document.getElementsByClassName("c3right")[0].style.display='none';
document.getElementsByClassName("c41")[0].style.display='none';
document.getElementsByClassName("c42")[0].style.display='none';
document.getElementsByClassName("c43")[0].style.display='none';
document.getElementsByClassName("c44")[0].style.display='none';
document.getElementsByClassName("c45")[0].style.display='none';
document.getElementsByClassName("c46")[0].style.display='none';
document.getElementsByClassName("c47")[0].style.display='none';
document.getElementsByClassName("c48")[0].style.display='none';
document.getElementById("start").disabled = true;