export var Attribute;
(function (Attribute) {
    Attribute["pp"] = "pp";
    Attribute["username"] = "username";
    Attribute["peoplefollow"] = "peoplefollow";
})(Attribute || (Attribute = {}));
class IgHome extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    static get observedAttributes() {
        const attrs = {
            pp: null,
            peoplefollow: null,
            username: null
        };
        return Object.keys(attrs);
    }
    connectedCallback() {
        this.render();
    }
    attributeChangedCallback(propName, oldValue, newValue) {
        console.log("holi");
        if (this[propName] === newValue)
            return;
        this[propName] = newValue;
        this.render();
    }
    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="./app/components/Profile/Style.css">
            <p class="myprofileinformation">
             <b>daniela_6947</b><br><br>
             D A N I E L A :)
            </p>

            
            <img src=${this.pp} width="40" class="pp">

            <p class="ppinformation">
             <b>${this.username}</b><br>
                <i style="color: rgb(213, 213, 213); ">${this.peoplefollow}</style=> 
            </p>

            <p class="suggest">
            <b>Suggestions for you</b><br>  
            </p>

            <p class="suggest1">
            See all 
            </p>

            <p class="suggest2">
            Change
            </p>

            <p class="follow">
            follow
            </p>
        

            <div>
             <img src="img/back.png" height= "150" width="2000" class="back">
             <img src="img/HeadHome.png" width="1070" class="Head">
             <img src="img/igstories.png" width="400" height= "127" class="igstories">
             <img src="img/myprofilepic.png" width="70" class="myprofilepic">
             <img src="img/lowinformation.png" width="300" class="lowinformation">
            </div>
            `;
        }
    }
}
customElements.define("my-ig", IgHome);
export default IgHome;
