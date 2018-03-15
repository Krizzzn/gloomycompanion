# Gloomy Companion

This is a web-app for managing the monster ability decks in the board game [Gloomhaven](https://boardgamegeek.com/boardgame/174430/gloomhaven)

You can run it from the at <https://krizzzn.github.io/gloomycompanion/>.

# Development

Use a modern browser to develop (i.e. Chrome), because the Gloomy Companion uses some es6 features. 
Either serve the website with a web server or use the Grunt script included. 

__Step 0__: `npm install -g grunt-cli`    
__Step 1__: `npm install`    
__Step 2__: `grunt server`       
__Step 3__: \*hackety hack\*

Use `grunt server:nohint` in case js hint gets to annoying.

# Build

Run `grunt build` to run the build process. The output can be found in the `dist` folder.

# Publish to github

Run `grunt publish` to build and publish the Gloomy Companion to the gh-pages branch of your repository. Make sure to activate gh-pages on Github.

# Adding Monsters

If you want to add new cards, you need to update `app/data/cards.js`. The decks has the following syntax:
```
{ name: "Name of monster"
, cards:
  [ [false, "42", "* First line", "** sub-line 1", "** sub-line 2", "* Second line"]
  , [true,  "55", "* Card text"]
  ]
}
```
The value in the first column is `true` if the deck shall be reshuffled after that card, `false` otherwise. The second colum is card initiative value. The following values is the card text, one row per column.

A single `*` means a top-level action. Double asterisk `**` means it modifies the previous action. Commonly used text snippets can be expanded using macros. E.g. `%move%` expands to the text _Move_ followed by the move icon, `%immobilize%` expands to _IMMOBILIZE_ followed by the immobilization icon. The list of available macros can be seen in `macros.js`.

# Adding Scenarios or Campaigns

Update the `app/data/scenarios.js` to add new scenarios.