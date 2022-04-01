// const prompt=require('prompt-sync')();
let deck1 = [],deck2=[],decktotal=[],collection=[];
let type = ['H', 'D', 'S', 'C'];
let cards = ['k', 'Q', 'J', '10', '9', '8', '7', '6', '5', '4', '3', '2','A'];
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
for(let i=0;i<15;i++){
    matrixsource[i]=[];
    let j1;
    for(let j=0;j<7;j++){
        if(i<5){
            matrixsource[i][j]=currshuffled.pop();
        }else if(i==5){
            matrixsource[i][j]=currshuffled.pop();
        }else{
            matrixsource[i][j]="   ";
        }
   }
   if(i==5 && j1==3){
       break;
   }
}
console.log("game list ");
console.log(matrixsource);
const gamematrix=[];
let fl=0,i1;
for(let i=0;i<15;i++){
    gamematrix[i]=[];
    for(let j=0;j<7;j++){
        if(i<5){
        gamematrix[i][j]=" * ";
        }
        else if(i==5){
            gamematrix[i][j]=matrixsource[i][j];
            fl=1;
        }else{
            gamematrix[i][j]="   ";
        }
   }
}
console.log(gamematrix);

 //  -----------------C A R D     M O V E M E N T-------------------//
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
    }else{
        alert('Invalid input entered.Type the correct destination');
    }
}
let collastref=5;
//collast is the  last row index
let col0last=5 , col1last=5 , col2last=5 , col3last=5 , col4last=5 , col5last=5 , col6last=5;
let srow , sr , scol , sc , count , i , a , lastindex , temp , temp1count=0 , temp2count=0 , starflag=0;
function move(){
   //get input source and destination row,col
   if(fl==1){
      srow=prompt('Source Card Row:');
      sr=srow;  
      scol=prompt('Source Card Column:');
      sc=scol; 
      dcol=prompt('Destination column:');
    }
   //functions
   //destination last row tempvar increment
   function dcolumnvalincrement(){
    if(dcol==0){
        col0last+=count;
    }else if(dcol==1){
        col1last+=count;
    }else if(dcol==2){
        col2last+=count;
    }else if(dcol==3){
        col3last+=count;
    }else if(dcol==4){
        col4last+=count;
    }else if(dcol==5){
        col5last+=count;
    }else if(dcol==6){
        col6last+=count;
    }
   }
   //source last row temp decrement 
   function scolumnvaldecrement(){
    if(scol==0){
        col0last-=count;
    }else if(scol==1){
        col1last-=count;
    }else if(scol==2){
        col2last-=count;
    }else if(scol==3){
        col3last-=count;
    }else if(scol==4){
        col4last-=count;
    }else if(scol==5){
        col5last-=count;
    }else if(scol==6){
        col6last-=count;
    }
   }
   //Count calculation below source row
   dcurrentlastrow=colselect(dcol);
   scurrentlastrow=colselect(scol);
   if(srow!=scurrentlastrow){
      for( i=srow;i<=scurrentlastrow;i++){
        if( (i<scurrentlastrow) && (gamematrix[i][scol]>gamematrix[i+1][scol]) ){
              temp1count+=1;
        }else if(i==scurrentlastrow){
           temp1count+=1;
        }
        temp2count+=1;
        if(temp1count==temp2count){
            count=temp2count;
        }else{
            alert('Invalid Selection of source');
            break;
        }
      }
    }else{
       count=1;
    }
function swapWithLast(gamematrix){
    temp=gamematrix[dcurrentlastrow+1][dcol];
    gamematrix[++dcurrentlastrow][dcol]=gamematrix[srow][scol];
    gamematrix[srow++][scol]=temp;
    console.log("hello",gamematrix)
    starflag=1;
}
   //card shift
   for(i=0;i<=count;i++){
       //checks first letter of source whether Capital alphabet
       if((gamematrix[srow][scol].charCodeAt(0))>65 && (gamematrix[srow][scol].charCodeAt(0))<=90 ){
            if(gamematrix[srow][scol].charAt(0)=='Q' && gamematrix[dcurrentlastrow][dcol].charAt(0)=='K'){
                swapWithLast(gamematrix);
            }
            else if(gamematrix[srow][scol].charAt(0)=='k' && gamematrix[dcurrentlastrow][dcol].charAt(0)=='Q'){
               alert("invalid move");
                break;
            }
            else if(gamematrix[srow][scol].charAt(0)=='J' && gamematrix[dcurrentlastrow][dcol].charAt(0)=='Q'){
                swapWithLast(gamematrix);
            }
            else if(gamematrix[srow][scol].charAt(0)=='Q' && (gamematrix[dcurrentlastrow][dcol]).charAt(0)=='J'){
                alert("Invalid move");
                break;
            }
            else if((gamematrix[srow][scol]).charAt(0)=='A' && (gamematrix[dcurrentlastrow][dcol]).charAt(0)=='2'){
                swapWithLast(gamematrix);
            }
            else if((gamematrix[srow][scol].charAt(0))=='2' && (gamematrix[dcurrentlastrow][dcol]).charAt(0)=='A'){
                alert("Invalid move");
                break;
            }
            else if((gamematrix[srow][scol].charAt(0))=='1' && (gamematrix[dcurrentlastrow][dcol]).charAt(0)=='J'){
                swapWithLast(gamematrix);
            }
            else if((gamematrix[srow][scol]).charAt(0)=='J' && (gamematrix[dcurrentlastrow][dcol]).charAt(0)=='1'){
                alert("invalid move");
                break;
            }

        }
        //checks if first letter is a number
        if(((gamematrix[srow][scol]).charCodeAt(0))>= 48 && (gamematrix[srow][scol].charCodeAt(0))<=57  ){
          if(((gamematrix[srow][scol]).charAt(0) )!='1'&& (gamematrix[dcurrentlastrow][dcol]).charAt(0) !='J'){
             if(  ((gamematrix[srow][scol]).charAt(0))  <  ((gamematrix[dcurrentlastrow][dcol]).charAt(0))   ){
                swapWithLast(gamematrix);
             }
             else{
               alert("INVALID MOVE");
               break;
             }
          }else if((gamematrix[srow][scol]).charAt(0) =='1'){
            if((gamematrix[srow][scol].charAt(0))=='1' && gamematrix[dcurrentlastrow][dcol].charAt(0)=='J'){
                swapWithLast(gamematrix);
            }else{
                alert("Invalid");
                break;
            }
          }
        }
     }
    //changing star into value
    if(starflag==1){
          gamematrix[sr-1][sc]=matrixsource[sr-1][sc];
          dcolumnvalincrement();
          scolumnvaldecrement();
          starflag=0;
    }
    console.log(gamematrix);
    console.log(col0last, col1last , col2last , col3last , col4last , col5last, col6last);
}
//end of card movement
// dcurrentlastrow=colselect(dcol);
// scurrentlastrow=colselect(scol);
//U S E   S H U F F L E D   C A R D 
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
}

//M A K E    S E T    I N    M A T R I X 
function check(){
    let i,j,k=0;
    for(i=0;i<7;i++){
      for(j=0;j<col0last;j++){
        if(gamematrix[j][i].charAt[0]==cards[k]){
           k++;
           if(k==13){
               collection.push()
               break;
           }
        }
      }
    }
}

//reload 
function reload(){
    prompt()
}