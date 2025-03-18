// Copyright 2025 gitchasing
// Copyright 2017 Google LLC
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

const MENU_ITEM_ARCHIVE_LINK = 'archiveLink';
const MENU_ITEM_ARCHIVE_PAGE = 'archivePage';
const MENU_ITEM_OPEN_LINK = 'openLink';
const MENU_ITEM_OPEN_PAGE = 'openPage';

function open(tabId, url, archive) {
  chrome.storage.sync.get({urlBehavior: 'recent', tabBehavior: 'new'}, (items) => {
    let ghostURL = `https://ghostarchive.org/save/${url}`
    if (!archive) {
      let pageNumber = 0;
      if (items.urlBehavior == 'early') {
        pageNumber = 9
      }
      ghostURL = `https://ghostarchive.org/search?term=${url}&page=${pageNumber}`
    }
    if (items.tabBehavior == 'redirect') {
      chrome.tabs.update(tabId, {url: ghostURL})
    }
    else {
      chrome.tabs.create({url: ghostURL})
    }
  })
}

chrome.action.onClicked.addListener(function(tab) {
  open(tab.id, tab.url, false);
});

chrome.contextMenus.onClicked.addListener(function(info, tab) {
    let archive = false
    if (info.menuItemId == MENU_ITEM_ARCHIVE_LINK || info.menuItemId == MENU_ITEM_ARCHIVE_PAGE) {
        archive = true
    }
    let url = tab.url
    if (info.menuItemId == MENU_ITEM_ARCHIVE_LINK || info.menuItemId == MENU_ITEM_OPEN_LINK) {
        url = info.linkUrl
    }
    open(tab.id, url, archive)
});

chrome.runtime.onInstalled.addListener(function() {
  chrome.declarativeContent.onPageChanged.removeRules(null, function() {
    chrome.declarativeContent.onPageChanged.addRules([
      {
        conditions: [
          new chrome.declarativeContent.PageStateMatcher(
              {pageUrl: {schemes: ['ftp', 'http', 'https']}}),
        ],
        actions: [new chrome.declarativeContent.ShowPageAction()],
      },
    ]);
  });

  function createContextMenu (id, title, contexts, ftp) {
    let targetUrlPatterns = ['http://*/*', 'https://*/*']
    if (ftp) {
      targetUrlPatterns.push('ftp://*/*');
    }
    chrome.contextMenus.create({
      'id': id,
      'title': title,
      'contexts': contexts,
      'targetUrlPatterns': targetUrlPatterns,
    });
  }

  createContextMenu(MENU_ITEM_ARCHIVE_LINK, 'Save link on Ghostarchive',
      ['link'], true);
  createContextMenu(MENU_ITEM_ARCHIVE_PAGE, 'Save page on Ghostarchive',
      ['page'], false)
  createContextMenu(MENU_ITEM_OPEN_LINK, 'Search link on Ghostarchive',
      ['link'], true)
  createContextMenu(MENU_ITEM_OPEN_PAGE, 'Search page on Ghostarchive',
      ['page'], false)
});
