/*
 * for the user confirmation system
 */

siteName = "Your10genWikiSite";

// user stuff
core.user.auth();
core.user.captcha();
User.config.useCaptcha = true;
User.requirements.confirmed_email = true;

core.core.mail();

/*
 *  we store the name and  password for gmail mail in the database in the "maildata" collection
 *  in a { name : <your_account_name>, passwd : <your password> }
 * 
 *  you need to set this to get the confirmation mail working
 */
var temp = db.maildata.findOne();

if (temp) {	
    mail = Mail.SMTP.gmail(temp.name, temp.passwd);
}

function allowed( req , res , uri ){
    user = Auth.getUser( req );
    return null;
}

// wiki
var wikiFooter = function( wikiPage ) {
    if( !user ) {
        print( '<a href="userSignup?to='+wikiPage.name+'">Sign Up</a>' );
    }
}

allowModule = { wiki: {  readOnly:false, nosearch:true, menuFooter: wikiFooter, 
                      },
                analytics: {}
              };

// init the wiki system so we can use it's routes
core.modules.wiki.wiki();

// route all requests to the wiki
core.core.routes();
routes = Wiki.routes;
routes.login = "/login.jxp";
routes.userSignup = "/userSignup.jxp";
routes.confirm = "/confirm_email";

// because we have our own stylesheets and such
// be sure that the wiki doesn't see these requests
// the null makes the appserver just return the file
// requested
routes.appassets = null;

