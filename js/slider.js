var img_en_cour = 1 ; // init
var nombre_img = 3 ; // valeur par dÃ©fault

function img_next() {

        document.getElementById(img_en_cour).className = "img_param img_out" ; // display_off

        img_en_cour = img_en_cour + 1 ;
        if (img_en_cour > nombre_img ){img_en_cour = 1}
        
        document.getElementById(img_en_cour).className = "img_param img_in" ; 

        // affiche ici le numÃ©ro l'image en cour
         document.getElementById("feedbak").innerHTML = img_en_cour + "/" + nombre_img ;

} // fin de la function


function img_pre() {

        document.getElementById(img_en_cour).className = "img_param img_out_dg" ; // display_off

        // *** A FAIRE **** 
        // enleve l'image affichÃ© => img_en_cour

        //  document.getElementById(img_en_cour).style = "position: absolute; -moz-animation: img_out 1s linear forwards 0s; -webkit-animation: img_out 1s linear forwards 0s; -o-animation: img_out 1s linear forwards 0s; -ms-animation: img_out 1s linear forwards 0s; animation: img_out 1s linear forwards 0s; ";

        img_en_cour = img_en_cour - 1 ;
        if (img_en_cour < 1 ){img_en_cour = nombre_img}

        document.getElementById(img_en_cour).className = "img_param img_in_dg" ; 

        // *** A FAIRE **** 
        // affiche la nouvelle image => img_en_cour =>  // document.getElementById(id).Class("img_out") ;

        // affiche ici le numÃ©ro l'image en cour
        document.getElementById("feedbak").innerHTML = img_en_cour + "/" + nombre_img ;

} // fin de la function




// Number
// document.getElementById("2").class = "img_in img_param";


//<!---------------------------- Script MENU dÃ©roulant ---------------------->

     function openNav() {
     if(window.innerWidth < 1000){ document.getElementById("mySidenav").style.width = "100%";}
     else{ 
     document.getElementById("mySidenav").style.width = "800px";
     }
    // alert("cherche largeur"+window.innerWidth);
     }

     function closeNav() {
       document.getElementById("mySidenav").style.width = "0";
     }

