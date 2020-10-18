var firebaseConfig = {

    databaseURL:'https://megaboth007.firebaseio.com/',
    
    };
    firebase.initializeApp(firebaseConfig);
    var dbRef = firebase.database();

     function on_lampu(){
      dbRef.ref('pertanian1' ).set('1');
    }
    function off_lampu(){
      dbRef.ref('pertanian1' ).set('0');
    }
    function on_air(){
      dbRef.ref('pertanian2' ).set('1');
    }
    function off_air(){
      dbRef.ref('pertanian2' ).set('0');
    }


     
             //-----------------sheet database

            

            
           
        