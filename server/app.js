const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const app = express()
const mongoose = require('mongoose');
const url = 'mongodb://localhost/myDB';
const Post = require('./model/post');
const User = require('./model/user');

app.use(express.static('./dist/ww'));
app.get('/*',(req,res)=>{
	res.sendFile(path.join(__dirname,'__dist/ww/index.html'));
});


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended : false}))


app.post('/api/user/login', (req, res) => {
	mongoose.connect(url,{ useMongoClient: true, autoReconnect: true, reconnectTries: 30 },
	function(err){
		if(err) throw err;
		User.find({
			username : req.body.username, password : req.body.password
		}, function(err, user){
			if(err) throw err;
			if(user.length === 1){	
				return res.status(200).json({
					status: 'success',
					data: user
				})
			} else {
				return res.status(200).json({
					status: 'fail',
					data:user,
					message: 'Login Failed'
				})
			}
			
		})
	});
})

app.post('/api/user/check', (req, res) => {
	mongoose.connect(url,{ useMongoClient: true, autoReconnect: true, reconnectTries: 30 },
	function(err){
		if(err) throw err;
		User.find({
			username : req.body.username
		}, function(err, user){
			if(err) throw err;
			if(user.length === 1){	
				return res.status(200).json({
					status: 'success',
					data: user
				})
			} else {
				return res.status(200).json({
					status: 'fail',
					data:user,
					message: 'Login already exist'
				})
			}
			
		})
	});
})

app.post('/api/user/create', (req, res) => {
	mongoose.connect(url, { useMongoClient: true, autoReconnect: true, reconnectTries: 30 },
	function(err){
		if(err) throw err;
		const user = new User({
			username: req.body.username,
			password: req.body.password
		})
			user.save((err, doc) => {
				if(err) throw err;

				
					if(user.length === 0){
						return res.status(200).json({
							status: 'success123',
							data: doc
						})
					}
					
				})
	});
})

app.post('/api/post/getAllPost', (req, res) => {
	
    mongoose.connect(url, { useMongoClient: true } , function(err){
        if(err) throw err;
        Post.find({},[],{ sort: { _id: -1 } },(err, doc) => {
            if(err) throw err;
            return res.status(200).json({
                status: 'success1',
                data: doc
            })
        })
    });
})

app.post('/api/post/createPost', (req, res) => {
    mongoose.connect(url, { useMongoClient: true }, function(err){
        if(err) throw err;
        const post = new Post({
            title: req.body.title,
			description: req.body.description,
			photo: req.body.photo,
			date:req.body.date

        })
        post.save((err, doc) => {
            if(err) throw err;
            return res.status(200).json({
                status: 'success2',
                data: doc
            })
        })
    });
})

app.post('/api/post/deletePost', (req, res) => {
    mongoose.connect(url, { useMongoClient: true }, function(err){
        if(err) throw err;
        Post.findByIdAndRemove(req.body.id,
            (err, doc) => {
            if(err) throw err;
            return res.status(200).json({
                status: 'success',
                data: doc
            })
        })
    });
})

app.post('/api/post/showPost', (req, res) => {
    mongoose.connect(url, { useMongoClient: true }, function(err){
        if(err) throw err;
        Post.find( {_id: req.body.id },
            (err, doc) => {
            if(err) throw err;
            return res.status(200).json({
                status: 'success',
                data: doc
            })
        })
    });
})

app.post('/api/post/updatePost', (req, res) => {
    mongoose.connect(url, { useMongoClient: true }, function(err){
        if(err) throw err;
        Post.update(
            {_id: req.body.id },
            { title : req.body.title, description: req.body.description },
            (err, doc) => {
            if(err) throw err;
            return res.status(200).json({
                status: 'successs',
                data: doc
            })
        })
    });
})

app.listen(3000, () => console.log('Blog server running on port 3000!'))