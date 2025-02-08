function rock(){
         
         let value = Math.floor(Math.random()*3);
         let r = 0 ;
         if(value==r){
                  alert("Tie");
         }
         else if(value==1){
                  alert("computer won");
         }
         else{
                  alert("your won ");
         }
} 

function paper(){
         let value = Math.floor(Math.random()*3);
         let p = 1;
         if(value==p){
                  alert("Tie");
         }
         else if(value==2){
                  alert("computer won");
         }
         else{
                  alert(" your won ");
         }

}

function scisser(){
         let value = Math.floor(Math.random()*3);
         let s = 2;
         if(value==s){
                  alert("Tie");
         }
         else if(value==1){
                  alert("computer won");
         }
         else{
                  alert(" your won ");
         }
}