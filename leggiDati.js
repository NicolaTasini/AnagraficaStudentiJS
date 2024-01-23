const fs = require('fs');
$(document).ready(function() {
    $.ajax({
       url: "http://localhost:3000/studenti"
      //url:"http://localhost:3000/studenti/5077"
        
    }).then(function(data) {
       //console.log(data.length);
       //console.log(data);
        
       var nDati;
       var s="<table border='1'>";
       s+='<tr><td>Nome</td><td>Cognome</td><td>Anno</td><td>Sezione</td><td>Specializzazione</td></tr>';
       //----------------------------------------------------------------------  
       //s+='<tr><td>'+data.Nome+'</td><td>'+data.Cognome+'</td><td>'+data.Anno+'</td><td>'+data.Sezione+'</td><td>'+data.Specializzazione+'</td></tr>';
       //------------------------------------------------------------------
       nDati=data.length;
	   for (i=0; i < nDati;i++)
	   {
		  // console.log(data.features[i].properties.place);
		   s+='<tr><td>'+data[i].Nome+'</td><td>'+data[i].Cognome+'</td><td>'+data[i].Anno+'</td><td>'+data[i].Sezione+'</td><td>'+data[i].Specializzazione+'</td></tr>';
       }
       //-------------------------------------------------------------------
         s+='</table>';
	   
	   $('#totale').append(nDati);
       $('#contenuto').append(s);
    });

   

});

function table(data){
   // Creazione di un oggetto per ogni colonna
   const colonne = Object.keys(data.records[0]);
   const tabelle = {};

   colonne.forEach(colonna => {
      tabelle[colonna] = data.records.map(record => ({ [colonna]: record[colonna] }));
    });

   colonne.forEach(colonna => {
      console.log(`\nTabella per la colonna '${colonna}':`);
      console.table(tabelle[colonna]);
   });
}