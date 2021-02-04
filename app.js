import express from 'express';
import bodyParser from 'body-parser';
import ejs from 'ejs'; 
import _ from 'lodash';

const app = express();

const homeFakeText = 'One advanced diverted domestic sex repeated bringing you old. Possible procured her trifling laughter thoughts property she met way. Companions shy had solicitude favourable own. Which could saw guest man now heard but. Lasted my coming uneasy marked so should. Gravity letters it amongst herself dearest an windows by. Wooded ladies she basket season age her uneasy saw. Discourse unwilling am no described dejection incommode no listening of. Before nature his parish boy.';

const aboutFakeText = 'Folly words widow one downs few age every seven. If miss part by fact he park just shew. Discovered had get considered projection who favourable. Necessary up knowledge it tolerably. Unwilling departure education is be dashwoods or an. Use off agreeable law unwilling sir deficient curiosity instantly. Easy mind life fact with see has bore ten. Parish any chatty can elinor direct for former. Up as meant widow equal an share least.';

const contactFakeText = 'Another journey chamber way yet females man. Way extensive and dejection get delivered deficient sincerity gentleman age. Too end instrument possession contrasted motionless. Calling offence six joy feeling. Coming merits and was talent enough far. Sir joy northward sportsmen education. Discovery incommode earnestly no he commanded if. Put still any about manor heard.';



app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

var posts = [];

app.get('/', (req,res) => {
    res.render('home', { 
        paragraph: homeFakeText,
        posts: posts 
    });
    
});


app.get('/about', (req,res) => {
    res.render('about', { paragraph: aboutFakeText });
});


app.get('/contact', (req,res) => {
    res.render('contact', { paragraph: contactFakeText });
});

app.get('/compose', (req,res) => {
    res.render('compose');
});

app.post('/compose', (req,res) => {
    const post = {
        title: req.body.postTitle,
        content: req.body.postText
    };
    posts.push(post)
    res.redirect('/');
});










app.get('/posts/:postName', (req,res) => {
    const reqTitle = _.lowerCase(req.params.postName);

    posts.forEach(function(post){
        const storedTitle = _. lowerCase(post.title);

        if(storedTitle === reqTitle){
            console.log('200');
        } else { console.log('404');
        }
    });
});


app.listen(3000, () => {
    console.log('listen:3000');
})