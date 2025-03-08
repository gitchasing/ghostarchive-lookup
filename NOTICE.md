Copyright 2025 gitchasing

This project is a fork of
[Wayback Machine Lookup](https://github.com/bbarenblat/wayback-machine-button),
by Benjamin Barenblat, licensed under the Apache License, Version 2.0.
You may view the license as preserved in the `LICENSE` file.
Further regard the copyright notices in each program file.

## Modifications

### chrome/background.js
Two checks were put in place for the `open` function: One for whether the extension
should search for the most recent or earliest archives, and one for whether
the archive should be opened in a new tab, or the current tab.

### chrome/options.js
The original author's code was modified so that all radio buttons of different
forms would interact with Chrome's storage API.
This affected all defined functions.

### chrome/screenshot.png
This was removed due to irrelevance. A screenshot for the Chrome Web Store will be
added in a future update.

### common/options.html
A new pair of radio buttons was added in order to give users the choice
between opening archives in a new tab, or the current tab. This included a relevant
header.

### firefox
This was removed. A Firefox add-on will be put forth later.

### third_party
This was removed in favor of `icons`, which contains the relevant icons for
this extension.