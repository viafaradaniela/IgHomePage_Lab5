import data from "./data.js";
import "./components/index.js";
import { Attribute } from "./components/Profile/Profile.js";
class AppContainer extends HTMLElement {
    constructor() {
        super();
        this.navegations = [];
        this.profiles = [];
        this.attachShadow({ mode: "open" });
        data.forEach((user) => {
            const postInsta = this.ownerDocument.createElement("my-profile");
            postInsta.setAttribute(Attribute.username1, user.username1);
            postInsta.setAttribute(Attribute.username2, user.username2);
            postInsta.setAttribute(Attribute.location, user.info.location);
            postInsta.setAttribute(Attribute.caption, user.info.caption);
            postInsta.setAttribute(Attribute.days, user.info.days);
            postInsta.setAttribute(Attribute.datai, user.info.datai);
            postInsta.setAttribute(Attribute.views, user.info.views);
            this.profiles.push(postInsta);
        });
        const nave = this.ownerDocument.createElement("my-navegation");
        this.navegations.push(nave);
    }
    connectedCallback() {
        this.render();
    }
    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = "";
            this.navegations.forEach((navegation) => {
                var _a;
                (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(navegation);
            });
            this.profiles.forEach((profile) => {
                var _a;
                (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(profile);
            });
        }
    }
}
customElements.define("app-container", AppContainer);
