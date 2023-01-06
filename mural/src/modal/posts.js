module.exports = {

    posts: [
        {
            id: '123',
            title: 'Meu primeiro post',
            descrition: 'Meu comentario do primeiro post'
        }
    ],

    allPost(){
        return this.posts
    },

    newPost(title, descrition){
        this.posts.push({id: generetID, title, descrition});
    },

}

function generetID(){
    return Math.random().toString(36).substring(2, 9)
}

