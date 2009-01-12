siteName = "mongodb";

// user stuff
core.user.auth();
core.user.captcha();
User.config.useCaptcha = true;
User.requirements.confirmed_email = true;

core.core.mail();
var temp = db.woop.findOne();
mail = Mail.SMTP.gmail( "mongodb", "FLORK!" );

function allowed( req , res , uri ){
    user = Auth.getUser( req );
    return null;
}

// wiki
var wikiFooter = function( wikiPage ) {
    if( !user && wikiPage ) {
        print( '<a href="userSignup?to='+wikiPage.name+'">Sign Up</a>' );
    }
}

allowModule = { wiki: { prefix:"pub.",  readOnly:false, nosearch:true, menuFooter: wikiFooter, 
                      },
                analytics: {}
              };

// init the wiki
core.modules.wiki.wiki();
core.util.diff();
core.modules.wiki.pieces.footer_wikipage = local.pieces.footer;

// route all requests to the wiki
core.core.routes();
routes = new Routes();

// modified wiki routes
routes.search = "/~~/modules/wiki/search";
routes.rss = "/~~/modules/wiki/rss";
routes.add( /assets\/.*\.(js|css|jpg|gif|jpeg|png|ico)$/ , "/~~/modules/wiki/$0" );
routes.add( /\/?(.*)/ , "/index.jxp" , { names : [ "name" ] } );

// our routes
routes.login = "/login.jxp";
routes.userSignup = "/userSignup.jxp";
routes.confirm = "/confirm_email";

// because we have our own stylesheets and such
// be sure that the wiki doesn't see these requests
// the null makes the appserver just return the file
// requested
routes.appassets = null;

