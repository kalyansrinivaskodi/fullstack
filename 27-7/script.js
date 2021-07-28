

const users=[
    {
     "createdAt": "2021-07-27T11:04:15.114Z",
     "name": "raghav Legros",
     "avatar": "https://cdn.fakercloud.com/avatars/wearesavas_128.jpg",
     "id": "1"
    },
    {
     "createdAt": "2021-07-27T21:48:09.672Z",
     "name": "Amanda Gerhold",
     "avatar": "https://cdn.fakercloud.com/avatars/wegotvices_128.jpg",
     "id": "2"
    },
    {
     "createdAt": "2021-07-27T08:09:13.498Z",
     "name": "Roodrow Hamill",
     "avatar": "https://cdn.fakercloud.com/avatars/craigelimeliah_128.jpg",
     "id": "3"
    },
   
   ]
   // ["Meghan Legros","Amanda Gerhold","Roodrow Hamill PhD"]
   
//    function getName(user){
//      return user.name;
//    }
//    console.log(users.map(getName));
   
   const getNameWithR=({name})=>(name.startsWith("R")||name.startsWith("r"));
   
   console.log(
   "Name starts  with r",users.filter(getNameWithR).map(getName));
