/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};

/* ----------------------------- PROJECT -------------------*/

const onLoad = () => {
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let extensions = [".com", ".net", ".us", ".io"];
  let domains = [];
  /*------------------------------------- bucle to create and insert domains into "domains"------------*/
  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        for (let l = 0; l < extensions.length; l++) {
          //console.log(pronoun[i] + adj[j] + noun[k] + extensions[l]);
          domains.push(pronoun[i] + adj[j] + noun[k] + extensions[l]);
          //console.log(domains);
        }
      }
    }
  }
  //console.log(domains);
  /* ------------------------------ get elemnt from HTML by the Id ------------- */

  let list = document.getElementById("domain");
  /*------------------------------ create an li for each element in "domains" and insert into the HTML ---------*/
  domains.forEach(item => {
    let li = document.createElement("li");
    li.innerText = item;
    list.appendChild(li);
  });
};

window.onLoad = onLoad();
