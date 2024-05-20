// Copyright 2024 Google LLC
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

const MENU_ITEM_OPEN_LINK = 'openLink';

function open(url) {
  browser.storage.sync.get({clickBehavior: 'search'}).then(function(items) {
    let waybackStem = 'https://web.archive.org/web/*/';
    if (items.clickBehavior == 'direct') {
      waybackStem = 'https://web.archive.org/web/';
    }
    browser.tabs.update(null, {url: waybackStem + url});
  });
}

browser.pageAction.onClicked.addListener(function(tab) {
  open(tab.url);
});

browser.contextMenus.onClicked.addListener(function(info, tab) {
  if (info.menuItemId == MENU_ITEM_OPEN_LINK) {
    open(info.linkUrl);
  }
});

browser.runtime.onInstalled.addListener(function() {
  browser.contextMenus.create({
    'id': MENU_ITEM_OPEN_LINK,
    'title': 'Open link in the Wayback Machine',
    'contexts': ['link'],
    'targetUrlPatterns': ['ftp://*/*', 'http://*/*', 'https://*/*'],
  });
});
