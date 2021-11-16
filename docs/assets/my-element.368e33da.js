import{r as u,e as p,s as f,p as c,n as m}from"./vendor.1b1266fd.js";const h=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}};h();var y=Object.defineProperty,g=Object.getOwnPropertyDescriptor,l=(s,o,n,r)=>{for(var e=r>1?void 0:r?g(o,n):o,t=s.length-1,i;t>=0;t--)(i=s[t])&&(e=(r?i(o,n,e):i(e))||e);return r&&e&&y(o,n,e),e};const d=["There is nothing to say about this SEO voidifact","The best of Kalomonirox is you","If the world is flat then Rykutoc is the winner"];let a=class extends f{constructor(){super(...arguments);this.page=0}firstUpdated(s){super.firstUpdated(s);const o=document.createElement("meta"),n=document.createAttribute("name");o.setAttributeNode(n),n.value="description";const r=document.createAttribute("content");o.setAttributeNode(r),r.value=`A demo of SEO for lit with page ${this.page}`,document.head.appendChild(o),document.title=`Demo for ${d[this.page]}`}render(){const s=d[this.page]||"";return c`
      <h1>Hello, this is a special page to test SEO with Lit2 / native web-components!</h1>
      ${c`<div>${s}</div>`}
    `}};a.styles=u`
    :host {
      display: block;
      border: solid 1px gray;
      padding: 16px;
      max-width: 800px;
    }
  `;l([p({type:Number})],a.prototype,"page",2);a=l([m("my-element")],a);
