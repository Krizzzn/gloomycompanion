# Gloomy Companion

This is a web-app for managing the monster ability decks in the board game [Gloomhaven](https://boardgamegeek.com/boardgame/174430/gloomhaven)

You can run it from the web directly on <https://krizzzn.github.io/gloomycompanion/>.

You can also download it and run it locally without internet connection. Click __Clone or download__ above, then __Download ZIP__. Unpack the ZIP and start the app by opening `index.html`.

# Deployment and the cache

Run `gen-manifest.sh` to create the manifest file. Make sure that the generated file `app.manifest` does not exist during development. Browsers will prefer cached files over latest ones from your disk.   
In "Production" this will enable an offline mode. So the website works without internet connection.

# Development with autoreload

__Step 0__: `npm install -g grunt-cli`    
__Step 1__: `npm install`    
__Step 2__: `grunt server`    
__Step 3__: open http://localhost:9000    
__Step 4__: \*hackety hack\*  	

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