class CreateProperties {
    constructor (id, title, contexts) {
        this.id = id;
        this.title = title;
        this.contexts = contexts;
    }
    getProperties () {
        const CREATE_PROPERTIES = {}
        for (let key of Object.keys(this)) {
            CREATE_PROPERTIES[key] = this[key]
        }
        return CREATE_PROPERTIES;
    }
    createContextMenu () {
        chrome.contextMenus.create(this.getProperties());
    }
    removeContextMenu () {
        chrome.contextMenus.remove(this.id)
    }
}

export {CreateProperties}