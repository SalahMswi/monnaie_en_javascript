/**
 * Created by SAM3505 on 10/04/2016.
 */


function renvoi_monnaie_map(argent_depose ){
    var mp_de_monnaies_retourner=[];
    var mp_de_monnaies=[];

    var prix=2;

    mp_de_monnaies_retourner.push({piece:0,nb:0});
   
    mp_de_monnaies.push({piece:2,nb:3});
    mp_de_monnaies.push({piece:1,nb:5});
    mp_de_monnaies.push({piece:0.5,nb:2});
    mp_de_monnaies.push({piece:0.2,nb:5});
    mp_de_monnaies.push({piece:0.1,nb:10});


    var reste=argent_depose-prix;
    console.log("reste : "+reste);
    for(i=0;i<mp_de_monnaies.length;i++){
        alert("piece:"  + mp_de_monnaies[i].piece + " nb: "  + mp_de_monnaies[i].nb);
        if(mp_de_monnaies[i].nb!=0){
            if(reste>=mp_de_monnaies[i].piece) {
               var rest_division=reste%mp_de_monnaies[i].piece ;
                console.log("rest_division:  "+rest_division);

                var str=String.valueOf(rest_division);
                var lg=str.length;
                console.log("lg: "+lg);

/*
                if(lg>3){

                    var f= rest_division;
                    double d=Math.round(f*100.0)/100.0;

                 //   float f1=(float) d;
                  //  rest_division=f1;
                }
                */

                var quotient= Math.floor(reste/mp_de_monnaies[i].piece);
                //var quotient = Math.round(quotient1)  ;
              // var quotient = Math.floor(quotient)  ;
                console.log("quotient :"+quotient);
                if(rest_division==0){
                    var a=mp_de_monnaies[i].nb-quotient;
                    console.log(" a pr rest_division==0 "+a);
                    if(a>=0)
                    {
                        mp_de_monnaies_retourner.push({piece:mp_de_monnaies[i].piece,nb:quotient});
                        mp_de_monnaies[i].nb=a;


                       break;
                    }
                    else{
                        mp_de_monnaies_retourner.push({piece:mp_de_monnaies[i].piece,nb:mp_de_monnaies[i].nb});

                        reste=rest_division-mp_de_monnaies[i].piece*a;
                        mp_de_monnaies[i].nb=0;
                    }
                }else{
                    var a=mp_de_monnaies[i].nb-quotient;
                    console.log("a pr rest_division!=0 "+a);

                    if(a>=0)//pr verifier si contient assez de cette monnaie
                    {
                        mp_de_monnaies_retourner.push({piece:mp_de_monnaies[i].piece,nb:quotient});
                        mp_de_monnaies[i].nb=a;
                        reste=rest_division;
                    }
                    else{
                        mp_de_monnaies_retourner.push({piece:mp_de_monnaies[i].piece,nb:mp_de_monnaies[i].nb});
                        reste=rest_division-mp_de_monnaies[i].piece*a;
                        mp_de_monnaies[i].nb=0;

                    }
                }
                    alert("pieces for mp_de_monnaies: " + mp_de_monnaies[i].piece + " nb: "  + mp_de_monnaies[i].piece);
                alert("piece for mp_de_monnaies_retourner: " + mp_de_monnaies_retourner[i].piece + " nb: "  + mp_de_monnaies_retourner[i].piece);



            }
        }
    }
    return mp_de_monnaies_retourner;
}

console.log(renvoi_monnaie_map(5));















/*
function getFullName(item,index) {
    var fullname = [item.piece,item.nb].join(" ");
    return fullname;
}

function myFunction() {
    var maptest= persons.map(getFullName);
    return maptest;

}
    */