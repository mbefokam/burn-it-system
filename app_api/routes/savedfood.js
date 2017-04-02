 var express = require('express');
 var router = express.Router();
 var request = require("request");
 var empty = require('is-empty');
 var mongojs = require('mongojs');
 var db = mongojs('fooddb',['fooddb']); 
 var redisClient = require('redis').createClient;
 var redis = redisClient(6379,'localhost');

 router.post('/foodlist', function (req, res) {
     //console.log("Request recieved is" + req.body.query);
     //console.log(req);
    //  eggs = {
    //      name: 'eggs',
    //      calories: '99'
    //  };
    //  tuna = {
    //      name: 'tuna',
    //      calories: '99'
    //  };

    //  var food = [eggs, tuna];
    //  for(var meal in food)
    // {
        
    //     if(food[meal].name=== req.body.query)
    //     {
    //         (//console.log(food[meal]);
    //         res.json(food[meal]);
    //         //res.se(food[meal].calories);
    //     }
    // }
    //  res.json(null);

    //new code
    var resp;
    redis.get(req.body.query,function(err,reply){
        if(err) callback(null);
        else 
        {
            
            if (reply===null)
            {       
                console.log(reply===null)
                db.fooddb.findOne({
                        food : req.body.query
                    }, function(err,docs){
                        resp =docs;
                        if(resp === null)
                        {
                            console.log("notfound in DB");
                            res.json(null)
                        }
                        else{
                            console.log("setting redis"+ docs.calories);
                            console.log("*************");
                        
                            redis.set(req.body.query, docs.calories);
                            console.log(resp);
                            res.json(docs);
                        }
                });
                if(resp===null)
                {
                        res.json(null);
                }
            }
            else
            {
                var x = {food: req.body.query , calories: reply.data};
                console.log("found in redis" + x);
                                //console.log("found in redis" + reply.data);
                                

                res.json(reply);
            }
        }
    });
 });
    
 module.exports = router;