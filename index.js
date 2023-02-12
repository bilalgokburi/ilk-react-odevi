import axios from 'axios';



async function getData(number) {
    const {data: user1} = await axios(`https://jsonplaceholder.typicode.com/users/${number}`);
    
    const {data: post1} = await axios(`https://jsonplaceholder.typicode.com/posts/${number}`);

    console.log(user1, post1);
};


export default getData;