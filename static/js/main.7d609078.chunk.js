(this.webpackJsonpchat=this.webpackJsonpchat||[]).push([[0],{23:function(e,t,n){},25:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var c=n(3),a=n.n(c),r=n(14),s=n.n(r),i=(n(23),n(13)),o=n.n(i),u=n(15),j=n(10),d=(n(25),n(9)),h=(n(32),n(27),n(30),n(17)),b=n(18),l=n(4);d.a.initializeApp({apiKey:"AIzaSyDRYPQTDCD3wh5khe8TERN3KRSRgzi5FgI",authDomain:"avinash-chat.firebaseapp.com",projectId:"avinash-chat",storageBucket:"avinash-chat.appspot.com",messagingSenderId:"872945291110",appId:"1:872945291110:web:2d83f1a24608dbc8e082a7"});var p=d.a.auth(),O=d.a.firestore();d.a.analytics();function m(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("button",{className:"sign-in",onClick:function(){var e=new d.a.auth.GoogleAuthProvider;p.signInWithPopup(e)},children:"Sign in with Google"}),Object(l.jsx)("p",{children:"Welcome"})]})}function x(){return p.currentUser&&Object(l.jsx)("button",{className:"sign-out",onClick:function(){return p.signOut()},children:"Sign Out"})}function g(){var e=Object(c.useRef)(),t=O.collection("messages"),n=t.orderBy("createdAt").limit(25),a=Object(b.a)(n,{idField:"id"}),r=Object(j.a)(a,1)[0],s=Object(c.useState)(""),i=Object(j.a)(s,2),h=i[0],m=i[1],x=function(){var n=Object(u.a)(o.a.mark((function n(c){var a,r,s;return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c.preventDefault(),a=p.currentUser,r=a.uid,s=a.photoURL,n.next=4,t.add({text:h,createdAt:d.a.firestore.FieldValue.serverTimestamp(),uid:r,photoURL:s});case 4:m(""),e.current.scrollIntoView({behavior:"smooth"});case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("main",{children:[r&&r.map((function(e){return Object(l.jsx)(f,{message:e},e.id)})),Object(l.jsx)("span",{ref:e})]}),Object(l.jsxs)("form",{onSubmit:x,children:[Object(l.jsx)("input",{value:h,onChange:function(e){return m(e.target.value)},placeholder:"say something nice"}),Object(l.jsx)("button",{type:"submit",disabled:!h,children:"\ud83d\udd4a\ufe0f"})]})]})}function f(e){var t=e.message,n=t.text,c=t.uid,a=t.photoURL,r=c===p.currentUser.uid?"sent":"received";return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:"message ".concat(r),children:[Object(l.jsx)("img",{src:a||"https://api.adorable.io/avatars/23/abott@adorable.png"}),Object(l.jsx)("p",{children:n})]})})}var v=function(){var e=Object(h.a)(p),t=Object(j.a)(e,1)[0];return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsxs)("header",{children:[Object(l.jsx)("h1",{children:"\u269b\ufe0f\ud83d\udd25\ud83d\udcac"}),Object(l.jsx)(x,{})]}),Object(l.jsx)("section",{children:t?Object(l.jsx)(g,{}):Object(l.jsx)(m,{})})]})};s.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(v,{})}),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.7d609078.chunk.js.map