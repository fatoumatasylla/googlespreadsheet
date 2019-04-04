function Envoie(Message ,BotName, channel) {

    var URL = WEBHOOK URL;
    
    
    
    var payload = { "channel": "#"+ channel,
                    "username" : BotName,
                    "text": Message ,
                    "username" : BotName,
                    "icon_emoji": ":robot_face:" };
  
    var options = { "method": "post", 
                    "contentType": "application/json",
                    "muteHttpExceptions": true, 
                    "payload": JSON.stringify(payload) };
  
    Logger.log(UrlFetchApp.fetch(URL, options));
  } ; 
  
  
  
  // ================PLANNING=====================
  
 

  
     
  function Findincoll() {
  
     // RECHERCHE DANS LE SHEET ROW CORESPONDANT  A LA  DATE      
          var sheet  = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
           sheet.showSheet();
      
  
  
    
    var coll = sheet.getRange("SHEET_NAME!COL:COL").getValues();
    for (var i=1 in coll) {
    
          var Datedujour = new Date();
          var d = Datedujour.getDate();
          var m = Datedujour.getMonth(); 
          
          var tabm  = ['JAN','FEB','MAR','ARV','MAI','JUN','JUL','AUG','SEP','OCT','NOV','DEC'];
          var Month = tabm[m] ;
      
  
      while (coll[i][0] !== Month ) {
         i++
        if (coll[i][0] === Month ){
        var j = Number(i+d+1);
        return j ;
        break;
        }
       }
     };
  };
  
  // Lecture des valeurs de la ligne correspondante à ma date 
  
  function Valeurp(i) {
  

  var sheet  = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
   sheet.showSheet();
  
  
        
        
        
  var chambre_violette=  sheet.getRange("2018!Q:Q").getCell(i,1).getValue();
  var chambre_vert = sheet.getRange("2018!R:R").getCell(i,1).getValue();
  var chambre_marron= sheet.getRange("2018!S:S").getCell(i,1).getValue();
  var salon = sheet.getRange("2018!T:T").getCell(i,1).getValue();
  var commentaire =sheet.getRange("2018!V:V").getCell(i,1).getValue();
  
  
   var event ={}; 
   
  if (chambre_violette === "" )
        { event.chambre_violette = " Personne" ;  } 
       else {event.chambre_violette=  chambre_violette ; }
     
       
  if (chambre_vert === "" )
        {  event.chambre_vert = " Personne" ; } 
       else { event.chambre_vert =  chambre_vert ; }
      
       
  if (chambre_marron === "" )
        {  event.chambre_marron = " Personne" ; }  
        else {event.chambre_marron =  chambre_marron ; }
       
  if (salon === "" ) 
       { event.salon= " Rien de prévue";  } 
       else {event.salon =  salon ; }
       
  if (salon === "" ) { event.commentaire= " Aucun ";  } 
       else {event.commentaire =  commentaire; }
       
        
  
   
   
   var description = 
  "La chambre violette est occupée par : " + event.chambre_violette + 
  "\n La chambre verte est occupée par : "+ event.chambre_vert + 
  "\n La chambre Marron est occupée par : " + event.chambre_marron + 
  "\n Le salon est occupée par : "+ event.salon + 
  "\n commentaire : "+event.commentaire ; 
       
       return description ;
   
  
  };
  
  
  ;
  var L= Findincoll(); 
  
  var event = Valeurp(L) ;
  Envoiep(event,"PLANNING","planning"); 