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
        browser.contextMenus.create(this.getProperties());
    }
    removeContextMenu () {
        browser.contextMenus.remove(this.id)
    }
}

export {CreateProperties}