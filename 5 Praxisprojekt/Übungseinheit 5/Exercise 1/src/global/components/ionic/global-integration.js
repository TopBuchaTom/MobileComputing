// Register all ionic components and show ionic app
import * as ionicComponents from './ionic-components';
ionicComponents.initialize();
for (const component of Object.values(ionicComponents)) {   
    const tag = component.is;
    if (tag && !customElements.get(tag) && component.prototype instanceof HTMLElement) {
        customElements.define(tag, component);
    }
}
document.documentElement.classList.add('ion-ce');
window.Ionic.config.set("innerHTMLTemplatesEnabled", true); // Enable html tags such as line breaks within alert and other components