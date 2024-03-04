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
async function insertionSort() {
    document.getElementById("generate").disabled = true;
    for (let i = 1; i < 10; i++) {
        document.getElementById("iteration").innerHTML="Iteration "+(i+1);
        let a="box"+i;//id of h1
        let b="boxs"+i;//id of div
        let key = document.getElementById(a).innerHTML;
        key=parseInt(key);
        document.getElementById("reference").innerHTML="Checking for the correct position of "+key;
        document.getElementById(a).innerHTML="";
        document.getElementById("upperdiv").innerHTML=key;
        await new Promise((resolve) =>
                setTimeout(() => {
                    resolve();
                }, 1000)
        )
        let j=i-1;
        let flag=0;
        while(flag==0 && j>=0){
            let k="box"+j;
            let currentValue = document.getElementById(k).innerHTML;
            currentValue=parseInt(currentValue);
            if(currentValue>key){
                document.getElementById("swap").innerHTML="Moving  "+currentValue+"  to  "+"  index  "+(j+1);
                let q="box"+(j+1);
                document.getElementById(k).innerHTML="";
                document.getElementById(q).innerHTML=currentValue;
                await new Promise((resolve) =>
                    setTimeout(() => {
                        resolve();
                    }, 1000)
                )
                j-=1;
                document.getElementById("swap").innerHTML="";
            }
            else{
                flag=1;
            }
        }
        let e="box"+(j+1);
        document.getElementById("upperdiv").innerHTML="";
        document.getElementById(e).innerHTML=key;
        await new Promise((resolve) =>
            setTimeout(() => {
                resolve();
            }, 500)
        )
    }
    document.getElementById("generate").disabled = false;
    document.getElementById("iteration").innerHTML="Sorted";
    document.getElementById("reference").innerHTML="";
  }
  document.getElementById("start").disabled = true;