import "./components/indexComponents.js";
import IgHome, { Attribute } from "./components/Profile/Profile.js";
import IgStories, { Attributes } from "./components/IgStories/IgStories.js";
import IgPost, { Post } from "./components/IgPost/IgPost.js";
import data from "./data.js";

class AppContainer extends HTMLElement{
    profiles: IgHome [] = [];
    igstories: IgStories [] = [];
    igpost: IgPost [] = [];
    constructor(){
        super ();
        this.attachShadow({mode: "open"});
   
        data.forEach((user) => {
            const profileCard = this.ownerDocument.createElement("my-ig") as IgHome;
            profileCard.setAttribute(Attribute.pp, user.pp);
            profileCard.setAttribute(Attribute.username, user.username);
            profileCard.setAttribute(Attribute.peoplefollow, user.peoplefollow);
            this.profiles.push(profileCard);
        });

        data.forEach((stories) => {
            const storiesCard = this.ownerDocument.createElement("my-igstories") as IgStories;
            storiesCard.setAttribute(Attributes.igs, stories.igs);
            this.igstories.push(storiesCard);
        });
        data.forEach((userpost) => {
            const igpostCard = this.ownerDocument.createElement("my-igpost") as IgPost;
            igpostCard.setAttribute(Post.ppp, userpost.ppp);
            igpostCard.setAttribute(Post.nameprofile, userpost.nameprofile);
            igpostCard.setAttribute(Post.pti, userpost.pti);
            igpostCard.setAttribute(Post.likes, userpost.likes);
            igpostCard.setAttribute(Post.caption, userpost.caption);
            igpostCard.setAttribute(Post.comment, String(userpost.comment));
            igpostCard.setAttribute(Post.date, String(userpost.date));
            igpostCard.setAttribute(Post.nameprofile1, userpost.nameprofile1);
            this.igpost.push(igpostCard);
        });
    }
    connectedCallback(){
        this.render();
    }
    render(){
        if (this.shadowRoot){
            this.shadowRoot.innerHTML = "";
            this.profiles.forEach((profile)=> {
                this.shadowRoot?.appendChild(profile);
            });

            this.igstories.forEach((igstories)=> {
                this.shadowRoot?.appendChild(igstories);
            });

            this.igpost.forEach((igpost)=> {
                this.shadowRoot?.appendChild(igpost);
            });
        }
    }
   
}

customElements.define("app-container", AppContainer);
