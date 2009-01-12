
/*var navStr = "";
// get markup from file
var staticMarkup = openFile( "pieces/wiki_navpane_markup.txt" );
log("static: "+staticMarkup+" "+staticMarkup.exists());
if( staticMarkup.exists() ) {
    navStr += staticMarkup.getDataAsString();
}

// get markup from db
var prefix = new RegExp( allowModule.wiki.prefix );
var articles = db.wiki.find( { name : prefix } );
while( articles.hasNext() ) {
   var a = articles.next();
   navStr += "* " + a.name + "\n";
}

parser = new content.WikiParser();
return parser.toHtml( navStr );
*/

// get page from wiki
var nav = db.wiki.findOne( { name : "navpane" } );
if( nav ) 
    return nav.getParsedText();
else
    return null;
