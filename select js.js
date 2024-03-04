function randomValueGenerator(){
    let max=50;
    let min=-50;
    for(let i=1;i<=10;i++){
        let j=i-1;
        let p="box"+j;
        document.getElementById(p).innerHTML=Math.floor(Math.random() * (max - min + 1) ) + min;
    }
    document.getElementById("start").disabled = false;
}

async function selectionSort() {
    document.getElementById("generate").disabled = true;
    for (let i = 0; i < 10; i++) {
        document.getElementById("iteration").innerHTML="Iteration "+(i+1);
        let flag=0;
        let a="box"+i;//id of h1
        let b="boxs"+i;//id of div
        for (let j = i + 1; j < 10; j++) {
            document.getElementById("reference").innerHTML="Comparing Elements at Index "+i+" and "+j;
            let c="box"+j;//id of h1
            let d="boxs"+j;//id of div
            let num1=document.getElementById(a).innerHTML;
            num1=parseInt(num1);
            let num2=document.getElementById(c).innerHTML;
            num2=parseInt(num2);
            document.getElementById(b).style.backgroundColor="#FAEBD7";
            document.getElementById(d).style.backgroundColor="#FAEBD7";
            await new Promise((resolve) =>
                setTimeout(() => {
                    resolve();
                }, 1000)
            )
            if (num1>num2) {
                document.getElementById("reference").innerHTML="Swapping Elements at Index "+i+" and "+j; 
                document.getElementById(a).innerHTML=num2;
                document.getElementById(c).innerHTML=num1;
                document.getElementById(b).style.backgroundColor="orange";
                document.getElementById(d).style.backgroundColor="orange";
                
                await new Promise((resolve) =>
                    setTimeout(() => {
                        resolve();
                    }, 1000)
                ) 
                document.getElementById(b).style.backgroundColor="white";
                document.getElementById(d).style.backgroundColor="white";
                flag=1; 
            }
            document.getElementById(b).style.backgroundColor="white";
            document.getElementById(d).style.backgroundColor="white";
        }
        if(flag==0){
            document.getElementById("reference").innerHTML="";
            document.getElementById("iteration").innerHTML="Sorted!";
            await new Promise((resolve) =>
                setTimeout(() => {
                    resolve();
                }, 1000)
            )
            document.getElementById("iteration").innerHTML="";
            break;
        }
    }
    document.getElementById("generate").disabled = false;
  }
  document.getElementById("start").disabled = true;