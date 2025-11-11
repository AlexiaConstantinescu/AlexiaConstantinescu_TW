class Software {
    constructor(name) {
        this.name = name;
    }

    run() {
        console.log(`${this.name} is running`);
    }
}

class Plugin {
    constructor(name) {
        this.name = name;
    }

    activate() {
        console.log(`Plugin "${this.name}" is activated`);
    }
}

class Browser extends Software {
    constructor(name) {
        super(name);
        this.plugins = [];
    }

    install(plugin) {
        this.plugins.push(plugin);
        console.log(`Plugin "${plugin.name}" installed in ${this.name}`);
    }

    runPlugins() {
        console.log(`${this.name} is activating all plugins...`);
        this.plugins.forEach(plugin => plugin.activate());
    }
}

const s0 = new Software("Generic Software");
s0.run();

const b1 = new Browser("Chrome");
b1.run();

const p1 = new Plugin("AdBlocker");
const p2 = new Plugin("Dark Mode");

b1.install(p1);
b1.install(p2);

b1.runPlugins();
