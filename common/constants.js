import {CreateProperties} from './CreateProperties.js'

const MENU_ITEMS = {
    ARCHIVE_LINK: 'archiveLink',
    ARCHIVE_PAGE: 'archivePage',
    OPEN_LINK: 'openLink',
    OPEN_PAGE: 'openPage',
}

let CONTEXT_MENU_CREATE_PROPERTIES = {
    [MENU_ITEMS.ARCHIVE_LINK]: new CreateProperties(MENU_ITEMS.ARCHIVE_LINK, 'Save link on Ghostarchive', ['link']),
    [MENU_ITEMS.ARCHIVE_PAGE]: new CreateProperties(MENU_ITEMS.ARCHIVE_PAGE, 'Save page on Ghostarchive', ['page']),
    [MENU_ITEMS.OPEN_LINK]: new CreateProperties(MENU_ITEMS.OPEN_LINK, 'Search link on Ghostarchive', ['link']),
    [MENU_ITEMS.OPEN_PAGE]: new CreateProperties(MENU_ITEMS.OPEN_PAGE, 'Search page on Ghostarchive', ['page']),
}

const DEFAULT_OPTIONS = {
    urlBehavior: 'recent',
    tabBehavior: 'new',
};

export {CONTEXT_MENU_CREATE_PROPERTIES, DEFAULT_OPTIONS, MENU_ITEMS}