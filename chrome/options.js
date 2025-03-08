// Copyright 2025 gitchasing
// Copyright 2019 Google LLC
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

const DEFAULT_OPTIONS = {
  urlBehavior: 'recent',
  tabBehavior: 'new',
};

document.addEventListener('DOMContentLoaded', function() {
  chrome.storage.sync.get(DEFAULT_OPTIONS, function(items) {
    for (let form of Object.keys(DEFAULT_OPTIONS)) {
      for (let button of document.forms[form]) {
        if (button.value == items[form]) {
          button.checked = true;
          break;
        }
      }
    }
  });
});

function saveOptions(form) {
  let clickBehavior = DEFAULT_OPTIONS[form];
  for (let button of document.forms[form]) {
    if (button.checked) {
      clickBehavior = button.value;
      break;
    }
  }
  let storageObject = {}
  storageObject[form] = clickBehavior
  chrome.storage.sync.set(storageObject);
}

for (let form of Object.keys(DEFAULT_OPTIONS)) {
  for (let button of document.forms[form]) {
    button.addEventListener('change', function(event) {
      saveOptions(form);
    });
  }
}
