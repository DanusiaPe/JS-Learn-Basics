        // "use strict";globalThis.__codeBoxId = "6l1mwyhgni";
//Pierwsze wywolanie standard async function
        async function showAvatar() {
        
            try{
            // read our JSON
            let response = await fetch('/user.json');
            let user = await response.json();
              console.log(user.name);
              
            // read github user
            let githubResponse = await fetch(`https://api.github.com/users/${user.name}`);
            let githubUser = await githubResponse.json();
          
            // show the avatar
            let img = document.createElement('img');
            img.src = githubUser.avatar_url;
            img.className = "promise-avatar-example";
            document.body.append(img);
          
            // wait 3 seconds
            await new Promise((resolve, reject) => setTimeout(resolve, 1000));
          

            img.remove();
          
            return githubUser;
            }catch(err){
                alert(err);
            }

          }
          
          showAvatar();

// Drugie wywolanie za pomoca anonimous function
          (async () => {
            await new Promise((resolve, reject) => setTimeout(resolve, 6000));
            // read our JSON
            let response = await fetch('/user.json');
            let user = await response.json();
              console.log(user.name);
              
            // read github user
            let githubResponse = await fetch(`https://api.github.com/users/${user.name}`);
            let githubUser = await githubResponse.json();
          
            // show the avatar
            let img = document.createElement('img');
            img.src = githubUser.avatar_url;
            img.className = "promise-avatar-example";
            document.body.append(img);
          
            // wait 3 seconds
            await new Promise((resolve, reject) => setTimeout(resolve, 3000));
          
            img.remove();
          
            // return githubUser;

          })();
