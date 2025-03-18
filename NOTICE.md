Copyright 2025 gitchasing

This project is a fork of
[Wayback Machine Lookup](https://github.com/bbarenblat/wayback-machine-button),
by Benjamin Barenblat, licensed under the Apache License, Version 2.0.
You may view the license as preserved in the `LICENSE` file.
Further regard the copyright notices in each program file.

## Modifications

### chrome/background.js

Three context menus were added alongside the existing menu. Together,
these context menus enable the user to either archive, or search for existing
archives of, a link or page by right-clicking the respective element.

Two parameters were added to the `open` function:
```javascript
function open(tabId, url, archive) {...}
```
The `tabId` parameter is to assure that, if the Ghostarchive page is to be
opened in the current tab, that it opens on the same page that the user action
was made. The `archive` parameter was added as a check as to whether the
extension should either archive, or search for existing
archives of, the specified URL.

Two checks were put in place for the `open` function: One for whether
the extension should either archive, or search for existing archives of, the URL,
and one for whether the Ghostarchive URL should be opened in a new tab, or the 
current tab. A further check, one for whether the extension
should search for the most recent or earliest archives, is run when searching for
existing archives.

### chrome/options.js
The original author's code was modified so that all radio buttons of different
forms would interact with Chrome's storage API.
This affected all defined functions.

### chrome/screenshot.png
This was replaced with a relevant screenshot for the new extension.

### common/options.html
A new pair of radio buttons was added in order to give users the choice
between opening archives in a new tab, or the current tab. This included a relevant
header.

### firefox
This was removed. A Firefox add-on will be put forth later.

### third_party
This was removed in favor of `icons`, which contains the relevant icons for
this extension.