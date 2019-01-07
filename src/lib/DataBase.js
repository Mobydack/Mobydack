import GitHub from 'github-api';

export default  {
    getPost: function(selector) {
        fetch('https://api.github.com/repos/Mobydack/bdBlog').then(res => {
            return res.json()
        }).then(json => {
            console.log(json)
        });
        // const gh = new GitHub();
        // console.log(gh.getRepo('Mobydack', 'bdBlog'));
    }
}