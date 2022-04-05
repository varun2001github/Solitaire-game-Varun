
// const prompt=require('prompt-sync')();
let deck1 = [],deck2=[],decktotal=[],collection=[];
let type = ['S', 'S', 'S', 'S'];
let cards = ['K', 'Q', 'J', '10', '9', '8', '7', '6', '5', '4', '3', '2','A'];
let k = 0,c = 0;
//Card creation1
for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 13; j++) {
        deck1.push(cards[j] +" "+type[i]);
        c++;
    }
}
//Card creation1
for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 13; j++) {
        deck2.push(cards[j] +" "+type[i]);
        c++;
    }
}
decktotal=deck1.concat(deck2);

//shuffled array
let flag=0;
let shuffled=[];
let currshuffled=[];
shuffled=decktotal;
shuffle(shuffled);
function shuffle(a){
    a.sort((a,b)=>0.5-Math.random());
    return a;
}
if(flag==0){
  currshuffled=shuffled;
  flag=1;
}
let slen=shuffled.length;

//----------G A M E   A R R A Y   C R E A T I O N    F R O M    S H U F F L E D--------//
const matrixsource=[] ;
const gamematrix=[];
for(let i=0;i<23;i++){
    matrixsource[i]=[];
    gamematrix[i]=[];
    for(let j=0;j<7;j++){
        if(i<5){
            matrixsource[i][j]=currshuffled.pop();
            gamematrix[i][j]=" * ";
        }else if(i==5){
            matrixsource[i][j]=currshuffled.pop();
            gamematrix[i][j]=matrixsource[i][j];
        }else{
            matrixsource[i][j]="   ";
            gamematrix[i][j]="   ";
        }
   }
}
console.log("game list ");
console.log(matrixsource);

for(let i=0;i<23;i++){
    for(let j=0;j<7;j++){
       var str=i+"_"+j;
       document.getElementById(str).innerHTML=gamematrix[i][j];
   }
}
//collection at end
for(let i=0;i<104;i++){
    collection[i]="   ";
}
console.log(gamematrix);

 //  -----------------C A R D     M O V E M E N T-------------------//
 let collastref=5;
//collast is the  last row index
let col0last=5 , col1last=5 , col2last=5 , col3last=5 , col4last=5 , col5last=5 , col6last=5;
let srow , sr,sr1 , scol , sc , count , i , j , a , lastindex , temp , temp1count=0 , temp2count=1 , starflag=0;
function colselect(a){
    if(a==0){
        return col0last;
    }else if(a==1){
        return col1last;
    }else if(a==2){
        return col2last;
    }else if(a==3){
        return col3last;
    }else if(a==4){
        return col4last;
    }else if(a==5){
        return col5last;
    }else if(a==6){
        return col6last;
    }
}
//C h e c k    f o r    s e t  
let gamecount=0,collectioninc=0,iselect,jselect;;
function setswap(jselect,iselect){
   if(collectioninc<104){
     for(j=jselect;j<colselect(iselect);j++){
       temp=gamematrix[j][iselect];
       gamematrix[j][iselect]=collection[collectioninc++];
       collection=gamematrix[j][iselect];
     }
   }
}
function check(){
    let jselectflag=1,k=0;
    console.log("COLLECTIONS:"+gamecount);
    for(i=0;i<7;i++){
      for(j=0;j<colselect(i);j++){
          //cards[] is created at top of js
        if(gamematrix[j][i].charAt(0)==cards[k]){
           if(jselectflag==1){
               jselect=j;
               jselectflag=0;
           }
           k++;
        }if(k==13){
            iselect=i;
            break;
        }
      }
      if(k==13){
        gamecount+=1;
        setswap(jselect,iselect);
        break;
       }
    }
    if(k==13){
        k=0;
    }
    if(gamecount==8){
        alert("C O N G R A T S ...Y O U   W O N....");
    }
}
//onclick card move section//
function move(){
    // var tempmat=[];
    // let tvar1=0,tvar2=0,cvar=0;
    // for(tvar1=0;tvar1<=)
    // tempmat[tvar1]=[];
    // for(tvar2=0;tvar2<15;tvar1++){
    //     tempmat[tvar1][0]=5;
    //     tempmat[tvar1][1]=9;
    //     if(tvar2>=2){
    //       tempmat[tvar2]=cards[cvar++];
    //     }
    // }
    // console.log(tempmat)
    //checks empty input
    let nzflag=1;
   //get input source and destination's row,col
      srow=parseInt(prompt('Source Card Row:'));
      sr=srow; 
      sr1=srow; 
      scol=parseInt(prompt('Source Card Column:'));
      sc=scol; 
      dcol=parseInt(prompt('Destination column:'));
      console.log(sr+" "+scol);
    //   console.log(gamematrix[sr+1][sc]);
      if(srow==null || scol==null || dcol==null||srow=="undefined" || scol=="undefined" || dcol=="undefined"){
          alert("Input cannot be empty");
          nzflag=0;
      }

   //functions
   //destination last row tempvar increment
   function dcolumnvalincrement(){
    if(dcol==0){
        col0last+=1;
    }else if(dcol==1){
        col1last+=1;
    }else if(dcol==2){
        col2last+=1;
    }else if(dcol==3){
        col3last+=1;
    }else if(dcol==4){
        col4last+=1;
    }else if(dcol==5){
        col5last+=1;
    }else if(dcol==6){
        col6last+=1;
    }
   }
   //source last row temp decrement 
   function scolumnvaldecrement(){
    if(scol==0){
        col0last-=1;
    }else if(scol==1){
        col1last-=1;
    }else if(scol==2){
        col2last-=1;
    }else if(scol==3){
        col3last-=1;
    }else if(scol==4){
        col4last-=1;
    }else if(scol==5){
        col5last-=1;
    }else if(scol==6){
        col6last-=1;
    }
   }
   //
   function checknextmin(i){
       if(i<scurrentlastrow){
       //if alphabet
          if ((gamematrix[srow][scol].charCodeAt(0)>65  &&  (gamematrix[srow][scol].charCodeAt(0))<=90)  ){
                    if(gamematrix[i][scol].charAt(0)=='Q' && gamematrix[i+1][scol].charAt(0)=='K'){
                        return 0;
                    }
                    else if(gamematrix[i][scol].charAt(0)=='K' && gamematrix[i+1][scol].charAt(0)=='Q'){
                        return 1;
                    }
                    else if(gamematrix[i][scol].charAt(0)=='J' && gamematrix[i+1][scol].charAt(0)=='Q'){
                        return 0;
                    }
                    else if(gamematrix[i][scol].charAt(0)=='Q' && (gamematrix[i+1][scol]).charAt(0)=='J'){
                        return 1;
                    }
                    else if((gamematrix[i][scol]).charAt(0)=='A' && (gamematrix[i+1][scol]).charAt(0)=='2'){
                        return 0;
                    }
                    else if((gamematrix[i][scol]).charAt(0)=='J' && (gamematrix[i+1][scol]).charAt(0)=='1'){
                        return 1;
                    }
            //if number
           }else if((gamematrix[i][scol].charCodeAt(0))>47 && (gamematrix[srow][scol].charCodeAt(0))<57  ){
                    if((gamematrix[i][scol].charAt(0))=='1' && (gamematrix[i+1][scol]).charAt(0)=='J'){
                        return 0;
                    }
                    else if((gamematrix[i][scol].charAt(0))=='1' && (gamematrix[i+1][scol]).charAt(0)=='9'){
                        return 1;
                    }  
                    else if((gamematrix[i][scol].charAt(0))=='2' && (gamematrix[i+1][scol]).charAt(0)=='A'){
                        return 1;
                    }
                    else if((gamematrix[i][scol].charAt(0))=='9' && (gamematrix[i+1][scol]).charAt(0)=='8'){
                        return 1;
                    }
                    else if(  (gamematrix[i][scol].charCodeAt(0)-1) == ((gamematrix[i+1][scol]).charCodeAt(0))  ){
                        return 1;
                    }else{
                        return 0;
                    }
            }
        }else if(i==scurrentlastrow){
         return 1;
       }
   }
   //Count calculation below source row to last available element
   let dcurrentlastrow=colselect(dcol);
   let scurrentlastrow=colselect(scol);
   let starflag1=0;
   count=0,temp1count=0,temp2count=0;
   if(srow!=scurrentlastrow && nzflag==1){
      for( i=srow;i<=scurrentlastrow;i++){
            temp2count+=1;
            let cm;
            cm=checknextmin(i);
            if(i<=scurrentlastrow && cm==1){
                 temp1count+=1;
                 console.log(temp1count);
            }
        }
        console.log(temp1count);
        console.log(temp2count);
        if(temp1count==temp2count ){
            count=temp2count;
            starflag1=1;
        }else{
            alert('Invalid Selection of source');
        }
        temp1count=0;
        temp2count=0;
    }else if(srow==scurrentlastrow && nzflag==1){
       count=1;
       starflag1=1;
   }
    function swapWithLast(gamematrix){
        temp=gamematrix[dcurrentlastrow+1][dcol];
        gamematrix[dcurrentlastrow+1][dcol]=gamematrix[srow][scol];
        gamematrix[srow][scol]=temp;
        dcolumnvalincrement();
        scolumnvaldecrement();
        dcurrentlastrow=colselect(dcol);
        srow++;
        starflag=1;
    }
    console.log(count);
   //card shift
   for(i=1;i<=count;i++){
       if(nzflag==1){
       //checks first letter of source as Capital alphabet
        if(  ( (gamematrix[srow][scol].charCodeAt(0))>64 && (gamematrix[srow][scol].charCodeAt(0))<=90 ) || ( (gamematrix[dcurrentlastrow][dcol].charCodeAt(0))>65 &&(gamematrix[dcurrentlastrow][dcol].charCodeAt(0))<=90) ){
            console.log("char");
            if(gamematrix[srow][scol].charAt(0)=='Q' && gamematrix[dcurrentlastrow][dcol].charAt(0)=='K'){
                swapWithLast(gamematrix);
            }
            else if(gamematrix[srow][scol].charAt(0)=='K' && gamematrix[dcurrentlastrow][dcol].charAt(0)=='Q'){
               alert("Invalid move");
               starflag=0;
                break;
            }
            else if(gamematrix[srow][scol].charAt(0)=='J' && gamematrix[dcurrentlastrow][dcol].charAt(0)=='Q'){
                swapWithLast(gamematrix);
            }
            else if(gamematrix[srow][scol].charAt(0)=='Q' && (gamematrix[dcurrentlastrow][dcol]).charAt(0)=='J'){
                alert("Invalid move");
                starflag=0;
                break;
            }
            else if((gamematrix[srow][scol]).charAt(0)=='A' && (gamematrix[dcurrentlastrow][dcol]).charAt(0)=='2'){
                swapWithLast(gamematrix);
            }
            else if((gamematrix[srow][scol].charAt(0))=='2' && (gamematrix[dcurrentlastrow][dcol]).charAt(0)=='A'){
                alert("Invalid move");
                starflag=0;
                break;
            }
            else if((gamematrix[srow][scol].charAt(0))=='1' && (gamematrix[dcurrentlastrow][dcol]).charAt(0)=='J'){
                swapWithLast(gamematrix);
            }
            else if((gamematrix[srow][scol]).charAt(0)=='J' && (gamematrix[dcurrentlastrow][dcol]).charAt(0)=='1'){
                alert("Invalid move");
                starflag=0;
                break;
            }else{
                alert("Invalid move");
                starflag=0;
            }

         }
        //checks if first letter of source is a number
         else if(((gamematrix[srow][scol]).charCodeAt(0))>48 && (gamematrix[srow][scol].charCodeAt(0))<=57  ){
             console.log("num");
          if(((gamematrix[srow][scol]).charAt(0) )!='1'&& (gamematrix[srow][scol]).charAt(0) !='9' && (gamematrix[dcurrentlastrow][dcol]).charAt(0) !='J'){
             if(  ((gamematrix[srow][scol]).charCodeAt(0))  ==  ((gamematrix[dcurrentlastrow][dcol]).charCodeAt(0)-1)   ){
                swapWithLast(gamematrix);
             }
             else{
               alert("Invalid move");
               starflag=0;
               break;
             }
          }else if((gamematrix[srow][scol]).charAt(0) =='9' && (gamematrix[dcurrentlastrow][dcol]).charAt(0) =='1'){
                swapWithLast(gamematrix);
          }else if((gamematrix[srow][scol]).charAt(0) =='1' && gamematrix[dcurrentlastrow][dcol].charAt(0)=='J'){
                swapWithLast(gamematrix);
          }else{
                alert("Invalid move");
                starflag=0;
                break;
          }
        }
      }
     }
    //changing star into value
    sr=srow;
    sc=scol;
    if(  starflag==1  &&  starflag1==1 &&   gamematrix[sr1-1][sc]==" * "  ){
          gamematrix[sr1-1][sc]=matrixsource[sr1-1][sc];
          starflag=0;
    }
    if(nzflag==1){
    console.log(gamematrix);
    console.log(col0last, col1last , col2last , col3last , col4last , col5last, col6last);
    }
    check();
    for(let i=0;i<23;i++){
        for(let j=0;j<7;j++){
           var str=i+"_"+j;
           document.getElementById(str).innerHTML=gamematrix[i][j];
       }
    }
}
//end of card movement
//U S E   R E M A I N I N G   C A R D 
let useflag=0;
function use(){
    for(let i=0;i<7;i++){
        if(currshuffled.length !=0 ){
          gamematrix[colselect(i)+1][i]=currshuffled.pop();
          useflag=1;
        } 
    }
    col0last++,col1last++,col2last++,col3last++,col4last++,col5last++,col6last++;
    if(useflag==1){
     console.log(gamematrix);
     console.log(col0last,col1last,col2last,col3last,col4last,col5last,col6last)
     useflag=0;
    }
    check();
    for(let i=0;i<23;i++){
        for(let j=0;j<7;j++){
           var str=i+"_"+j;
           document.getElementById(str).innerHTML=gamematrix[i][j];
       }
    }
}

//R E S T A R T    G A M E
function reload(){
    let r;
    r=prompt("Are you sure to restart the game.Type 'yes' to restart the game:")
    if(r=='yes'||r=='YES'){
        location.reload();
    }
}
