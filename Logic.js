r=[[0,0,0,0],[0,0,0,0]];
n=0;
ZZ=0;
po=[[675,790,675,790,245,380,245,380],[100,100,200,200,510,510,600,600]]
mm='<text onclick="green(0)" fill="green" x=675 y=100 >@</text>\
<text x=790 onclick="green(1)" fill="green" y=100 >@</text>\
<text x=675 onclick="green(2)" fill="green" y=200 >@</text>\
<text x=790 onclick="green(3)" fill="green" y=200 >@</text>\
<text x=245 onclick="red(0)" fill="red" y=510 >@</text>\
<text x=380 onclick="red(1)" fill="red" y=510 >@</text>\
<text x=245 onclick="red(2)" fill="red" y=600 >@</text>\
<text x=380 onclick="red(3)" fill="red" y=600 >@</text>';
Z=9;
U='';
PP="";
function dice(b){q_s=0;if(ZZ==b){PP=document.getElementsByTagName("div")[b];
ii=0;
ii+=6;
ak=setInterval(function(){n=Math.floor(1+6*Math.random());
PP.innerHTML="&#x268"+(n-1);ii++;
if(ii>=12){clearInterval(ak);
    Z=b;
    ZZ=9;
    for (const vv of r[Z]) {
    if(vv==0 && n!=6){
        q_s++;
    }}
    if(q_s==4){
        ZZ=(Z+1)%2;
    setTimeout(function(){
        PP.innerHTML="&star;";
    },1000)}
    }},100)

}

}
//setInterval(function(){dice(0);},1000);
function red(a){
   
    if((r[Z][a]>0 || n==6) && Z==1 && r[Z][a]+n<=63 && n>0){
        MM=n;
        if(r[Z][a]+6==6){MM=1/100}
        Y=0;
        //if(f>=6 && f<=10)s
           aa=setInterval(function(){if(r[Z][a]+6==6){r[Z][a]=6;
        Y=5;MM=6;}else{r[Z][a]+=1}
            f=r[Z][a];
        if(f<=31){f=f+26;}
        else if(f<=55){f=f-26;}
        else{f=f+3}
        if(f>=6 && f<=10){ H=565;}
       else if(f>=11 && f<=16){H=565+45*(f-10);}
       else if(f>=17 && f<19){H=835;}
       else if(f>=19 && f<25){H=835-45*(f-18);}
       else if(f>=25 && f<30){H=565;}
       else if(f>=32 && f<37){H=475;}
       else if(f<43){H=475+45*(36-f);}
       else if(f<=44){H=205;}
       else if(f<50){H=205+45*(f-44);}
       else if(f<56){H=475;}
       else if(f<=57){H=475+(f-55)*45;}
       else if(f<=66){H=520;}
       
       if(f>=6 && f<=11) {M=78+45*(f-6);}
       else if(f>=12 && f<17){ M=303;}
       else if(f>=17 && f<19){M=303+45*(f-16);}
       else if(f>=19 && f<24){M=393;}
       else if(f>=24 && f<30){M=393+(f-23)*45;}
       else if(f>=32 && f<=37){M=663+(31-f)*45;}
        else if(f<43){M=393;}
        else if(f<=44){M=393+45*(42-f);}
        else if(f<50){M=303;}
        else if(f<56){M=303+45*(49-f);}
        else if(f<=57){M=33;}
        else if(f<=66){M=663+(59-f)*45;}
        Y++;
        move(H,M,a+4,MM==Y);
        n=0;
        if(MM==Y){
        if(MM!=6){
ZZ=(Z+1)%2;
PP.innerHTML="&star;";}
else{ZZ=Z};
clearInterval(aa);}},100*MM)
        }
    }
        



function green(a){
    if(Z==0 && (r[Z][a]>0 || n==6) && r[Z][a]+n<=63 && n>0){
        MM=n;
        Y=0;
        if(r[Z][a]+6==6){MM=1/100}
        //if(f>=6 && f<=10)s
        aa=setInterval(function(){if(r[Z][a]+6==6){r[Z][a]+=6;Y=5;MM=6;}else{r[Z][a]+=1}
            f=r[Z][a];
       if(f>=6 && f<=10){ H=565;}
       else if(f>=11 && f<=16){H=565+45*(f-10);}
       else if(f>=17 && f<19){H=835;}
       else if(f>=19 && f<25){H=835-45*(f-18);}
       else if(f>=25 && f<30){H=565;}
       else if(f<=31){H=565-45*(f-29);}
       else if(f<37){H=475;}
       else if(f<43){H=475+45*(36-f);}
       else if(f<=44){H=205;}
       else if(f<50){H=205+45*(f-44);}
       else if(f<56){H=475;}
       else if(f<=63){H=520;}

        if(f>=6 && f<=11) {M=78+45*(f-6);}
        else if(f>=12 && f<17){ M=303;}
        else if(f>=17 && f<19){M=303+45*(f-16);}
        else if(f>=19 && f<24){M=393;}
        else if(f>=24 && f<30){M=393+(f-23)*45;}
        else if(f<=31){M=663;}
        else if(f<=37){M=663+(31-f)*45;}
        else if(f<43){M=393;}
        else if(f<=44){M=393+45*(42-f);}
        else if(f<50){M=303;}
        else if(f<56){M=303+45*(49-f);}
        else if(f<=63){M=33+45*(f-56);}
        n=0;
        Y++;
        move(H,M,a,MM==Y);
        if(MM==Y){
        if(MM!=6){
            ZZ=(Z+1)%2;
            PP.innerHTML="&star;";}else{ZZ=Z}
        clearInterval(aa);}},100*MM)

    }
        
         }


         u=document.getElementsByTagName("text");
                function move(i,j,a,kk){
        u[a+8].x['baseVal'][0]['value']=i;
        u[a+8].y['baseVal'][0]['value']=j;
        g=0;
        k=a;
        if(a>3){
            k-=4;
        }
        u[k+8+4*(Z)].style["font-size"]="45px";
        while(g<4){
            v=(r[(Z+1)%2][g]-6)%13;
            if(Math.abs(r[Z][k]-r[(Z+1)%2][g])==26 && r[(Z+1)%2][g]<=56 && (v!=0 && v!=8) && kk){

                u[g+8+4*((Z+1)%2)].x['baseVal'][0]['value']=po[0][((Z+1)%2)*4+g];
                u[g+8+((Z+1)%2)*4].y['baseVal'][0]['value']=po[1][((Z+1)%2)*4+g];
                r[(Z+1)%2][g]=0;
            }else if((v==0 || v==8) && Math.abs(r[Z][k]-r[(Z+1)%2][g])==26 && r[(Z+1)%2][g]<=56 && kk ){
                u[k+8+4*(Z)].style["font-size"]="33px";
                u[g+8+4*((Z+1)%2)].style["font-size"]="33px";
                u[g+8+4*((Z+1)%2)].x['baseVal'][0]['value']+=5;
                u[k+8+4*(Z)].x['baseVal'][0]['value']-=5;
            }
           /* if(Math.abs(r[Z][k]-r[(Z+1)%2][g])==26 && (Math.abs((r[(Z+1)%2][g]-6)/13)-(r[Z][k]-6)/13)==Math.abs(Math.floor((r[(Z+1)%2][g]-6)/13)-Math.floor((r[Z][k]-6)/13))){
                u[g+8+4*((Z+1)%2)].x['baseVal'][0]['value']+=5;
                u[k+8+4*(Z)].x['baseVal'][0]['value']-=5;
                u[k+8+4*(Z)].style["font-size"]="33px";
                u[g+8+4*((Z+1)%2)].style["font-size"]="33px";
            }*/
            if(r[Z][g]==r[Z][k] && kk){
            if(k!=g){
                u[g+8+4*(Z)].x['baseVal'][0]['value']+=5;
                u[k+8+4*(Z)].x['baseVal'][0]['value']-=5;
                u[k+8+4*(Z)].style["font-size"]="33px";
                u[g+8+4*(Z)].style["font-size"]="33px";
            }}
            g++
        }
       }
       function xc(){
        dd=document.documentElement;
        dd.requestFullscreen();
       }