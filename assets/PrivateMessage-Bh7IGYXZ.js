import{_ as S,u as N,r as u,o as $,c as d,a as t,b as B,w as z,H as A,t as c,d as p,e as E,f as V,F as j,g as D,h as O,v as H,i as P,n as x,j as f,k as R,l as U}from"./index-B7BYLpQX.js";const F={class:"private-message-container"},L={class:"header-wrapper"},q={class:"chat-title"},G={key:0,class:"feedback-popup"},J={class:"message-sender"},K={class:"message-text"},Q={class:"message-time"},W={class:"message-input"},X={__name:"PrivateMessage",setup(Y){const h=P(),T=U(),r=N(),n=u([]),l=u(""),_=u(""),k=h.params.userId,M=h.query.name||"User",i=u(null),v=u(null),m=u(!1);async function g(a=null,e=5){if(!r.token)return;let s=`https://hap-app-api.azurewebsites.net/messages/${k}?limit=${e}`;a&&(s+=`&before=${a}`);try{const o=await fetch(s,{method:"GET",headers:{Authorization:`Bearer ${r.token}`,"Content-Type":"application/json"}});if(o.ok){const w=await o.json();a?n.value.unshift(...w.reverse()):n.value=w.reverse(),n.value.length>0&&(v.value=n.value[0].updatedAt),x(()=>{a||y()})}}catch(o){console.error("Error fetching messages:",o)}}function y(){x(()=>{i.value&&(i.value.scrollTop=i.value.scrollHeight)})}async function b(){if(!i.value||m.value)return;const{scrollTop:a}=i.value;a<=10&&v.value&&(m.value=!0,await g(v.value),m.value=!1)}async function C(){if(!l.value.trim())return;const a={senderId:r.userId,senderName:r.userName,text:l.value.trim(),updatedAt:new Date().toISOString()};n.value.push(a);const e=`https://hap-app-api.azurewebsites.net/message/${k}`,s={text:l.value.trim()};try{const o=await fetch(e,{method:"POST",headers:{Authorization:`Bearer ${r.token}`,"Content-Type":"application/json"},body:JSON.stringify(s)});o.ok?console.log("Message sent!"):console.error("Error sending message:",o.statusText)}catch(o){console.error("Error:",o)}l.value="",y()}async function I(){n.value=[],g()}return $(()=>{g()}),(a,e)=>(f(),d("div",F,[t("div",L,[B(A,null,{default:z(()=>[t("button",{class:"close-btn",onClick:e[0]||(e[0]=s=>p(T).back())},e[2]||(e[2]=[t("i",{class:"fa-solid fa-xmark"},null,-1)]))]),_:1})]),t("h2",q,"Chat with "+c(p(M)),1),_.value?(f(),d("div",G,c(_.value),1)):E("",!0),t("button",{class:"refresh-btn",onClick:I},e[3]||(e[3]=[t("i",{class:"fa-solid fa-arrows-rotate"},null,-1),V(" Refresh ")])),t("div",{class:"messages-container",ref_key:"scrollContainer",ref:i,onScroll:b},[(f(!0),d(j,null,D(n.value,s=>(f(),d("div",{key:s.messageId,class:R({message:!0,"message-sent":s.senderId===p(r).userId,"message-received":s.senderId!==p(r).userId})},[t("p",J,c(s.senderName),1),t("p",K,c(s.text),1),t("p",Q,c(new Date(s.updatedAt).toLocaleString()),1)],2))),128))],544),t("div",W,[O(t("input",{type:"text","onUpdate:modelValue":e[1]||(e[1]=s=>l.value=s),placeholder:"Type a message..."},null,512),[[H,l.value]]),t("button",{onClick:C},e[4]||(e[4]=[t("i",{class:"fa-solid fa-paper-plane"},null,-1)]))])]))}},ee=S(X,[["__scopeId","data-v-b3dd14f9"]]);export{ee as default};
