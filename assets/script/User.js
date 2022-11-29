'use strict';
class User {
    #id
    #name
    #userName
    #email
     
    constructor() {
        
    }
    set id(id) {
     
        this.#id = id;
    }
    get id() {
        return this.#id;
    }
    set name(name) {
        this.#name = name;
     }
    get name() {
        return this.#name;
     }
    set userName(username) {
        
        this.#userName = username;
    }
    get userName() {
        return this.#userName;
    }
     set email(mail) {
         this.#email = mail;            
     }
    get email() {
        return this.#email;
    }
    getInfo() {
        return { id:this.#id, name: this.#name, userName: this.#userName, email: this.#email };
    }
}
export { User }