// Copyright 2019 Google LLC
// Copyright 2025 gitchasing
//
// Licensed under the Apache License, Version 2.0 (the "License"); you may not
// use this file except in compliance with the License. You may obtain a copy of
// the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
// WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
// License for the specific language governing permissions and limitations under
// the License.

// As required by s4b of the License, all modifications to this file have
// been specified by the new author (gitchasing).
// Regard the NOTICE for a list of these changes.

import {
  CONTEXT_MENU_CREATE_PROPERTIES,
  DEFAULT_OPTIONS,
  MENU_ITEMS
} from './constants.js'

const CONTEXT_MENUS = {}
for (const MENU_ITEM of Object.values(MENU_ITEMS)) {
  CONTEXT_MENUS[MENU_ITEM] = true;
}

document.addEventListener('DOMContentLoaded', function() {
  chrome.storage.sync.get(Object.assign({}, DEFAULT_OPTIONS, CONTEXT_MENUS), function(items) {
    for (let form of Object.keys(DEFAULT_OPTIONS)) {
      for (let button of document.forms[form]) {
        if (button.value == items[form]) {
          button.checked = true;
          break;
        }
      }
    }
    for (let checkbox of document.forms['contextMenus']) {
      checkbox.checked = items[checkbox.value]
    }
  });
});

function saveOptions(form) {
  let behavior = DEFAULT_OPTIONS[form];
  for (let button of document.forms[form]) {
    if (button.checked) {
      behavior = button.value;
      break;
    }
  }
  chrome.storage.sync.set({
    [form]: behavior,
  });
}

for (let form of Object.keys(DEFAULT_OPTIONS)) {
  for (let button of document.forms[form]) {
    button.addEventListener('change', function(event) {
      saveOptions(form);
    });
  }
}

for (let checkbox of document.forms['contextMenus']) {
  checkbox.addEventListener('change', function(event) {
    const CHECKBOX_CHECKED = event.target.checked;
    const CHECKBOX_VALUE = event.target.value;
    if (CHECKBOX_CHECKED) {
      CONTEXT_MENU_CREATE_PROPERTIES[CHECKBOX_VALUE].createContextMenu();
    }
    else {
      CONTEXT_MENU_CREATE_PROPERTIES[CHECKBOX_VALUE].removeContextMenu();
    }
    chrome.storage.sync.set({
      [CHECKBOX_VALUE]: CHECKBOX_CHECKED
    });
  });
}