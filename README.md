# webtrekklet

## Installation
To install the webtrekk bookmarklet simply add a new bookmark that points to the following URL:

**For production:**
```javascript
javascript:(function(){if(typeof webtrekklet_script=='undefined'){webtrekklet_script=document.createElement('script');webtrekklet_script.type='text/javascript';webtrekklet_script.src='https://rawcdn.githack.com/claudio-pose/webtrekklet/0.2.3/webtrekk_bookmarklet.js';document.getElementsByTagName('head')[0].appendChild(webtrekklet_script);}else{window.showHideWebtrekklet();}})();
```

**For development/testing:**

Changes on github should be reflected within minutes.
```javascript
javascript:(function(){if(typeof webtrekklet_script=='undefined'){webtrekklet_script=document.createElement('script');webtrekklet_script.type='text/javascript';webtrekklet_script.src='https://raw.githack.com/claudio-pose/webtrekklet/master/webtrekk_bookmarklet.js';document.getElementsByTagName('head')[0].appendChild(webtrekklet_script);}else{window.showHideWebtrekklet();}})();
```
