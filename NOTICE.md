Copyright 2025 gitchasing

This project is a fork of
[Wayback Machine Lookup](https://github.com/bbarenblat/wayback-machine-button),
by Benjamin Barenblat (the "original author"), licensed under the Apache License, Version 2.0.
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

### common/options.html
In place of the original author's single form, three forms are declared here:
two featuring radio buttons to determine search functionality,
and one featuring checkboxes to enable/disable context menus.

### firefox/*.js
Regard the changes to all JavaScript files in the Chrome extension. Mozilla's extensions API is
highly derivative of that in Chromium-based browsers. As such, no meaningful difference exists 
between the Chrome extension and the Mozilla extension.