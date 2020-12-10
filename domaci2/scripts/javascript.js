var cene=[600,700,500,500,750,1100,
    750,700,700,500,750,800,1250,200,300,250,500];

function kupovina(index){
    let cena=cene[index-1];
    let rezultat=document.querySelector('#rez');
    rezultat.innerText=Number(rezultat.innerText)+Number(cena);
}
function kolicina(index){
    let tk=(document.querySelector("#kom"+index)).innerText;
    tk=Number(tk)+1;
    let nk=document.querySelector("#kom"+index);
    nk.innerText=tk;
    // console.log(nk);
}
function obrisi(index){
    let tk=(document.getElementById("kom"+index)).innerText;
    console.log(tk);
    if(tk==0){ 
    }else{
        tk=Number(tk)-1;
        let nk=document.getElementById("kom"+index);
        nk.innerText=tk;
        let cena=cene[index-1];
        let rezultat=document.querySelector('#rez');
        rezultat.innerText=Number(rezultat.innerText)-Number(cena);
    }
}


// **********************************************************************************

function myFunction() {
    let confirmVal = confirm('Da li sigurno želite obrisati korpu?');
    if(confirmVal == true){
        document.getElementById("rez").innerHTML=0;
        for (let index = 1; index < 18; index++) {
            document.getElementById("kom"+index).innerHTML=0;
        }
    }
 
    
}

// **********************************************************************************




// const form = document.getElementById('forma');
// const imePrezime = document.getElementById('imePrezime');
// const password = document.getElementById('number');
// const password2 = document.getElementById('dodatno');
// const greska = document.getElementById('greska');

// form.addEventListener('submit', (e) => {
    
//     let messages = [];
//     if(!(imePrezime.value.includes(' '))){
//         messages.push('Morate uneti i ime i prezime\n');
//     }
    
//     if(messages.length > 0){
//         e.preventDefault();
//         greska.innerText = messages.join("");
//     }
    
// });

// function zatvori(){
//     var openedWindow = window;
//     openedWindow.close();
// }
// function popUp(){
//     var alert = window.alert('uspesno!')
//     var openedWindow = window;
//     openedWindow.close();
// }

function popUp(){
    var imePrezime = document.getElementById('imePrezime').value;
    var mail=document.getElementById('email').value;
    var number=document.getElementById('number').value;
    

    if (imePrezime==""||mail==""||number=="") {
        
    }else{
        alert("Uspesno ste obavili kupovinu.\nOčekujte pošiljku u narednih 3-5 radnih dana.\n\nSrdačan pozdrav!");
    }
}

