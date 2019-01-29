const express = require('express');
const router = express.Router();
const userSchema = require('../models/User');
const messageSchema = require('../models/messages')
const articleSchema = require('../models/article');
const commentSchema = require('../models/comments');

const jwt = require('jsonwebtoken');

//ajout utilisateur
router.post('/userRegister', (req, res) => {
    console.log("ajout");
    {
        var user = new userSchema(req.body);
        user.save();
        res.status(200).json("Success register");
    };
    (error) => {
        res.sendStatus(500)
        console.error(error)
    }
});
//get user by email
router.get('/uerbyid/:id', async (req, res) => {

    const result = await userSchema.findOne({
        userEmail: req.params.id
    });
  
    res.send({ result });


});




//s'identifier
router.post('/veriflogin', async (req, res) => {
    const result = await userSchema.findOne({
        userEmail: req.body.userEmail
    });
    if (!result) {
        res.send({
            msg: 'not exist'
        });

    }
    res.send({  messg: 'exist', Token : jwt.sign({data:result},'security_pass') });


});











//affiche recentarticles
router.get('/recentarticles', (req, res) => {
    console.log("affiche recentarticle");
    articleSchema.find({ articleValidation: "false" }, function (err, recentarticles) {
        if (err) throw err;

        // object of all the articles

        res.send({ recentarticles })
    });

});
//delete comment

router.delete('/deletecoment/:id', async (req, res) => {


    let commentId = req.params.id;
    console.log(commentId)
    {

        await commentSchema.findByIdAndDelete(commentId);

        console.log("suppr");
        res.status(200).json('Success suppression commentaire');
    };

})

//affiche users
router.get('/users', (req, res) => {
    console.log("affiche users");
    userSchema.find({ role: "user" }, function (err, users) {
        if (err) throw err;

        // object of all the users
        res.send({ users });
    });

});
//affiche admins
router.get('/admins', (req, res) => {
    console.log("affiche admins");
    userSchema.find({ role: "admin" }, function (err, users) {
        if (err) throw err;

        // object of all the users
        res.send({ users });
    });

});


//supprimer user
router.delete('/deleteuser/:id', async (req, res) => {


    let articleId = req.params.id;

    {

        await userSchema.findByIdAndDelete(articleId);

        console.log("suppr");
        res.status(200).json('Success suppression user');
    };

})

//affiche articles activés 
router.get('/articles', async(req, res) => {
    console.log("affiche article");
  await  articleSchema.find({ articleValidation: "true" }, function (err, articles) {
        if (err) throw err;

        // object of all the articles

        res.send({ articles })
    });

});


//supprimer article
router.delete('/deleteArt/:id', async (req, res) => {


    let articleId = req.params.id;

    {

        await articleSchema.findByIdAndDelete(articleId);

        console.log("suppr");
        res.status(200).json('Success suppression article');
    };

})

//affiche articles bby id
router.get('/onearticle/:id', (req, res) => {
    let articleId = req.params;
    console.log(articleId);
    articleSchema.findById(articleId.id).populate(' author').exec((err, article) => {
        if (err) throw err;
      
        res.send({ article })
    });
});

//activer un article
router.post('/activerarticle/:id', async (req, res) => {
    console.log("update")
    let articleId = req.params.id;

    {

        await articleSchema.findByIdAndUpdate(articleId, { articleValidation: "true" }, function (err, articles) {
            if (err) throw err;

            // object of all the articles

            res.send({ articles })
        });

        (error) => {
            res.sendStatus(500)
            console.error(error)
        }
    }
});
//sendmessage
router.post('/sendmessage', async (req, res) => {

    let userId = req.body.idAuthor;
    let msg = req.body

    {
        var message = await new messageSchema(msg);

        message.save();




        res.status(200).json('Success ajout msg');
    };
    (error) => {
        res.sendStatus(500)
        console.error(error)
    }
});

//getarticles by email
router.get('/getblogbyemail/:id', async (req, res) => {
    await articleSchema.find({emailAuthor:req.params.id}, function (err, article) {
        if (err) throw Error;
        res.send({ article })
    }
    )
});

//getmessages
router.get('/getmessage/:id', async (req, res) => {
  
    await messageSchema.find({idAuthor:req.params.id}, function (err, messages) {
        if (err) throw Error;
        res.send({ messages })
    }
    )
});

//ajout article
router.post('/articleRegister', async (req, res) => {
    console.log("ajout article");
    {
        var article = new articleSchema(req.body);
        await article.save();
        res.status(200).json('Success articleregister');
    };
    (error) => {
        res.sendStatus(500)
        console.error(error)
    }
});


//ajout de commentaire
router.post('/addComment/:id', async (req, res) => {
    let articleId = req.params.id;

    {
        var comment = await new commentSchema(req.body);
        console.log(comment)
        await articleSchema.findByIdAndUpdate(articleId, { $push: { articleComments: comment } });
        comment.save();
console.log("'Success ajout commentaire")
        res.status(200).json('Success ajout commentaire');
    };
    (error) => {
        res.sendStatus(500)
        console.error(error)
    }
});
//affiche comments
router.get('/getcoment/:id', async (req, res) => {
    let articleId = req.params.id;
    await articleSchema.findOne({ _id: articleId }).populate({ path: 'articleComments' }).exec((err, article) => {
        if (err) throw err;
        console.log(article);
        res.send({ article })
    })
})




module.exports = router;



























