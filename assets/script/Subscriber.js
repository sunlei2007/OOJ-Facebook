'use strict';
import { User } from "./User.js?v=1.3"

class Subscriber extends User {
    #pages
    #groups
    #canMonetize
 
    constructor() {
        super();
    }
    set pages(pages) {
        this.#pages = pages;
    }
    get pages() {
        return this.#pages;
    }
    set groups(groups) {
        this.#groups = groups;
     }
    get groups() {
        return this.#groups;
     }
    set canMonetize(canMonetize) {
        this.#canMonetize = canMonetize;
    }
    get canMonetize() {
        return this.#canMonetize;
    }
     
    getInfo() {
        const userInfo = super.getInfo();   
        return userInfo;
    }
}
export { Subscriber }