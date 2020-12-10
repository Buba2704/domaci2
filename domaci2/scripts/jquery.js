$(document).ready(function(){

    $("#zanimljivo > div > p").hide();
    
    let brojac1=0;
    let brojac2=0;
    let brojac3=0;
    let brojac4=0;
    $("#dugme1").click(funkcija1);
    $("#dugme1").click(function(){
        if(brojac2%2==1){
            funkcija2();
        }
        if(brojac3%2==1){
            funkcija3();
        }
        if(brojac4%2==1){
            funkcija4();
        }
    });




    $("#dugme2").click(funkcija2);
    $("#dugme2").click(function(){
        if(brojac1%2==1){
            funkcija1();
        }
        if(brojac3%2==1){
            funkcija3();
        }
        if(brojac4%2==1){
            funkcija4();
        }
    });




    $("#dugme3").click(funkcija3);
    $("#dugme3").click(function(){
        if(brojac2%2==1){
            funkcija2();
        }
        if(brojac1%2==1){
            funkcija1();
        }
        if(brojac4%2==1){
            funkcija4();
        }
    });



    $("#dugme4").click(funkcija4);
    $("#dugme4").click(function(){
        if(brojac2%2==1){
            funkcija2();
        }
        if(brojac3%2==1){
            funkcija3();
        }
        if(brojac1%2==1){
            funkcija1();
        }
    });
    



// ***************************************************

    function funkcija1(){
        $("#med > p").toggle();
        if (brojac1%2==0) {
            $("#med").css("height","600px");
        }else{
            $("#med").css("height","300px");
        }
        brojac1=brojac1+1;


        if (brojac1%2==0) {
            console.log("1 je zatvoren");
        }else{
            console.log("1 je otvoren");
        }
    }
    function funkcija2(){
        $("#propolis> p").toggle();
        if (brojac2%2==0) {
            $("#propolis").css("height","600px");
        }else{
            $("#propolis").css("height","300px");
        }
        brojac2=brojac2+1;
        
        if (brojac2%2==0) {
            console.log("2 je zatvoren");
        }else{
            console.log("2 je otvoren");
        }

    }
    function funkcija3(){
        $("#polen > p").toggle();
        if (brojac3%2==0) {
            $("#polen").css("height","600px");
        }else{
            $("#polen").css("height","300px");
        }
        brojac3=brojac3+1;


        if (brojac3%2==0) {
            console.log("3 je zatvoren");
        }else{
            console.log("3 je otvoren");
        }

    }
    function funkcija4(){
        $("#perga > p").toggle();
        if (brojac4%2==0) {
            $("#perga").css("height","600px");
        }else{
            $("#perga").css("height","300px");
        }
        brojac4=brojac4+1;
        

        if (brojac4%2==0) {
            console.log("4 je zatvoren");
        }else{
            console.log("4 je otvoren");
        }
    }

    $( function() {
        $( "#accordion" ).accordion();
    } );






})