window.onload = function (){
     // Your web app's Firebase configuration
     var firebaseConfig = {
        apiKey: "AIzaSyBnsa7SGSHOmX_5MplCK34XkGDgSfMplio",
        authDomain: "rps-multiplayer-c47c3.firebaseapp.com",
        databaseURL: "https://rps-multiplayer-c47c3.firebaseio.com",
        projectId: "rps-multiplayer-c47c3",
        storageBucket: "",
        messagingSenderId: "835783324002",
        appId: "1:835783324002:web:b82aa2066df37197"
         };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
    
  
  const database = firebase.database();
  const chatData = database.ref('/chat');
    const submitBtn = $('#submitBtn');
    const chatInput = $('#chatInput');
    let userName = 'Guest';
    
    chatData.on('child_added',(snapshot) =>{
       console.log(snapshot);
    })

    function sendInfo (userName, chatStr){
        chatData.push({
            username: userName,
            message: chatStr
        });
        
    }

    submitBtn.on('click', () =>{
        let chatStr = chatInput.val().trim(); 
        sendInfo(userName,chatStr)

    })

}