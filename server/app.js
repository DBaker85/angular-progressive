const express = require('express'),
cors = require('cors'),
app = express(),
router = express.Router(),
bodyParser = require('body-parser');

/**npm
* Use cors to solve CORS browser issues for local development
*/
app.use(cors());
app.use(bodyParser.json());

app.set('view engine', 'pug');
app.use(express.static('public'));

const feeds = [
  {
    'title':'Shortage of ether causes widespread panic',
    'shorUrl':'ether_shortage',
    'body': ["Est filet mignon consequat, sirloin consectetur ham hock tail turkey dolore short ribs reprehenderit quis biltong irure pork chop.  Ham venison short loin ex t-bone ut frankfurter labore cupim cillum dolore quis.  Enim do pig drumstick, kielbasa id meatball short ribs lorem.  Andouille dolore meatball sausage duis picanha fugiat veniam ut chuck pork loin.  Shank quis rump chuck bacon.","Jowl filet mignon chuck, quis frankfurter ex tongue ipsum ribeye elit short loin alcatra.  Ipsum sed velit short loin.  Leberkas t-bone ground round hamburger sunt consequat chuck sausage ham hock esse do spare ribs.  Drumstick jerky shoulder, enim venison sint ullamco excepteur pork beef ribs non ut.  Non meatloaf burgdoggen venison tempor.  Dolore in laborum occaecat.  Exercitation et in irure short ribs meatball laboris andouille commodo mollit non.","Eu turkey andouille, brisket commodo tenderloin meatloaf id shank.  Ball tip andouille nulla commodo hamburger mollit.  Chicken cupidatat tail, venison est boudin ipsum velit flank cow.  Pork belly deserunt meatball capicola fugiat id.  Bacon esse cupidatat, exercitation jerky salami doner ham hock pork loin venison enim dolor beef id.","Venison strip steak est ribeye, sausage bacon biltong incididunt mollit laborum eiusmod porchetta sint.  Tongue in chuck ball tip eiusmod.  Kevin irure ball tip fugiat pork loin sausage dolore sint salami kielbasa occaecat jowl pork belly qui chicken.  Cupim ut elit est pork sausage esse qui hamburger in ham hock ball tip.","Incididunt et in, nostrud capicola sint jowl aliquip filet mignon pork belly ipsum.  Boudin cupim meatball pork loin pork belly cillum meatloaf spare ribs ut.  Spare ribs culpa fugiat, ham consequat venison veniam.  Duis tail lorem filet mignon enim laborum.  Enim tenderloin sunt, ut occaecat labore nostrud officia shankle.  Flank ullamco fatback frankfurter qui drumstick.","In turducken ex burgdoggen ipsum sirloin short ribs pariatur rump ea flank.  Landjaeger et nisi jowl shoulder in.  Velit burgdoggen pig culpa turducken ea, rump pork chop chicken in filet mignon occaecat eiusmod pork loin.  T-bone officia hamburger consectetur commodo, tempor filet mignon shank tail pork short ribs prosciutto aliquip.  Sirloin pork strip steak qui filet mignon nisi turducken ground round landjaeger.  Andouille flank exercitation adipisicing shankle.","Elit fatback ham hock, alcatra occaecat sirloin labore nulla in ham sint flank cupidatat boudin deserunt.  Hamburger pork ham hock chuck pork chop irure, nulla ipsum sint flank burgdoggen nisi.  Cupim kielbasa sint elit, biltong deserunt ham hock dolor nisi sausage cow picanha shoulder.  Exercitation enim boudin prosciutto meatloaf shankle voluptate quis tenderloin.","Labore dolore kielbasa reprehenderit minim qui.  Laborum ea biltong fatback, ham kielbasa leberkas.  Velit drumstick bacon, excepteur aliqua fatback strip steak meatball non ut pork loin pig.  Meatball sausage burgdoggen ham hock pariatur, turkey adipisicing cupim dolore shank.  Short ribs beef ribs sirloin voluptate, t-bone laboris ut landjaeger duis in ullamco jerky filet mignon shank.  Aliquip duis deserunt culpa ipsum ea.  Do duis corned beef, shank tongue deserunt ground round elit t-bone ribeye alcatra cupim.","Elit mollit tail tongue ullamco boudin ut id ground round.  Labore tempor occaecat landjaeger short ribs meatloaf.  Pariatur swine consequat ut capicola eiusmod, corned beef est bacon lorem frankfurter.  Exercitation in sed minim, laborum sirloin ribeye pork belly adipisicing.","Proident chuck sed in biltong, fatback pariatur anim.  Chicken fatback ad, cupidatat ham laboris in irure ut ullamco capicola leberkas meatball.  Salami picanha deserunt tenderloin ut.  Cupim pork chop in aute in.  Bacon deserunt short loin, anim kevin in esse commodo meatloaf shoulder swine jowl velit pig ut."]
  },
  {
    'title':'Warlocks demand more respect and to be refered to as hipsters',
    'shorUrl':'warlock_hipsters',
    'body' : ["Boudin pork chop leberkas flank duis incididunt deserunt frankfurter commodo enim prosciutto picanha ball tip fatback.  Velit tempor landjaeger est ad anim nulla, andouille aute.  Id nisi nulla in sunt tempor.  In strip steak sirloin turkey.","Do turkey dolor, incididunt irure swine dolore brisket aute andouille shoulder picanha alcatra pancetta tenderloin.  Tenderloin velit labore exercitation.  Dolore jowl beef, capicola tongue beef ribs ad.  Mollit adipisicing andouille kielbasa occaecat shoulder.","Laboris kevin commodo aliquip, lorem turducken cupidatat fatback exercitation enim velit dolore nostrud.  Tenderloin do labore, kielbasa in pastrami tri-tip meatloaf dolore pork chop pork belly.  Anim tail nostrud incididunt cillum shank ad meatloaf.  Laboris pancetta esse exercitation irure turducken deserunt id jowl kielbasa elit biltong venison aliquip excepteur.  Irure hamburger filet mignon, incididunt sausage ball tip chuck tongue.  Ut exercitation picanha velit short ribs beef ribs sunt pariatur flank frankfurter.  Magna occaecat kielbasa sint adipisicing cupim laborum.","Bacon pastrami eiusmod nisi fugiat pig nulla laboris.  Leberkas picanha esse et, meatloaf pork ut meatball laboris tenderloin venison boudin fugiat dolore.  Sunt pig reprehenderit cillum tail in, pastrami leberkas cow.  Boudin elit fatback consequat tempor cillum fugiat quis irure.","Elit do occaecat alcatra doner veniam, aliquip velit filet mignon drumstick anim.  Culpa magna filet mignon, meatball irure nisi rump frankfurter ut.  Deserunt porchetta aliqua do t-bone pork belly lorem dolore corned beef non.  Labore jowl andouille, enim ut nisi jerky eiusmod incididunt culpa.  T-bone biltong kevin cupidatat alcatra.  Doner minim meatloaf salami esse ea.  Excepteur turkey filet mignon kielbasa.","Proident ut ea ground round, anim drumstick veniam consequat landjaeger brisket short ribs beef.  Short ribs in ex ground round, nostrud commodo burgdoggen elit incididunt meatloaf reprehenderit shoulder.  Aliquip laboris elit, non officia cillum consectetur pork chop beef ribs proident.  Cillum nostrud prosciutto swine sirloin duis.  Pork belly rump spare ribs, exercitation pariatur salami cupim in mollit.  Jerky non qui aliqua occaecat irure labore sint shoulder sunt adipisicing ut landjaeger exercitation.","Landjaeger pork chop sausage rump reprehenderit.  Ex t-bone boudin magna leberkas proident.  Minim capicola pancetta sirloin, lorem spare ribs meatloaf.  T-bone laboris id shank elit minim ut eu commodo jowl mollit cupidatat consectetur kielbasa.","Officia doner short ribs reprehenderit anim irure laborum pork dolore eu swine.  Duis irure pork, sausage turkey eiusmod meatball ut short loin nostrud.  Pig est et, bresaola ad fugiat mollit reprehenderit cupidatat nulla anim adipisicing.  Tri-tip corned beef ad biltong.  Reprehenderit salami corned beef, meatloaf tenderloin turducken short ribs ad pancetta ea sint incididunt ribeye aliquip duis.  Elit tri-tip nostrud, velit aliquip pancetta landjaeger ad.  Velit swine irure leberkas, est beef ribs elit prosciutto aliqua boudin.","Quis culpa elit, turducken dolore nostrud sausage ad.  Filet mignon exercitation alcatra andouille boudin ut sausage pariatur in chicken aliqua.  Pork chop duis labore, enim sirloin tail elit ullamco rump drumstick tempor pork loin.  Cupim jowl fugiat drumstick short ribs shank pork loin voluptate incididunt non ex est frankfurter cow shankle.  Meatloaf ex turkey flank sirloin quis.","Aliquip ham ex occaecat jerky ut jowl.  Jerky irure beef cillum, dolore aliqua swine pork excepteur ut adipisicing pastrami.  Voluptate biltong short ribs pork nostrud cillum.  Ground round proident do andouille shank flank."]
  },
]


/**
* Default endpoint
*/
app.get('/feeds', function (req, res) {
  for (var i = 0; i < feeds.length; i++) {
    delete feeds[i].body
  }
  res.send(feeds);
});

app.get('/feed/:shorturl', function (req, res) {
  console.log(req.params)
  const feed = [];
  res.send(feed);
});

/**
* Init Server. Log a message for user to know that server is on.
*/
app.listen(8888, function () {
  console.log('Server on port http://localhost:8888')
});
