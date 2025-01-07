// Import global page components that are used in pages
import './page-header';
import './page-content';
import './page-toolbar';
import './page-footer';
import './page-tabs';
import './page-tabheader';
import './page-tabfooter';

// Adapt customElements.define to return tag name if to simplify navigation targets
const oldCustomElementsDefine = customElements.define;
customElements.define = function(name, constructor, options) {
  oldCustomElementsDefine.call(this, name, constructor, options);

  if (name.endsWith("-page"))
    constructor.tagName = name;    
}