(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,n){e.exports=n(34)},22:function(e,t,n){},24:function(e,t,n){},26:function(e,t,n){},28:function(e,t,n){},30:function(e,t,n){},32:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var a,r=n(0),c=n.n(r),o=n(9),i=n.n(o),s=n(3),l=n(11),u=(n(4),n(10)),m=(n(5),function(e){return function(t){return c.a.createElement(u.a,Object.assign({icon:e},t))}}),f=m("circle-notch"),h=m("phone"),d=m("envelope-open"),p=(n(22),function(e){var t=e.className,n=e.style,a=e.show,r=Object(l.a)(e,["className","style","show"]),o=null==a||a,i=null!=t?t:"",s=Object.assign({display:o?"initial":"none"},n);return c.a.createElement("div",Object.assign({className:"Loader ".concat(i),style:s},r),c.a.createElement(f,{spin:!0,color:"gray"}))}),g=function(e){var t=Object(r.useState)(null),n=Object(s.a)(t,2),a=n[0],o=n[1];return e.promise.then(function(e){o(e)}),null==a?c.a.createElement(p,null):c.a.createElement(c.a.Fragment,null,e.children(a))},E=n(2),v=new function e(){var t=this;Object(E.a)(this,e),this.assertField=function(e,t){if(!e.hasOwnProperty(t))throw new Error("Invalid dto did not have required field ".concat(t))},this.assertOptionalField=function(e,n,a){e.hasOwnProperty(n)&&null!=e[n]&&t.assertType(e,n,a)},this.assertFieldAndType=function(e,n,a){t.assertField(e,n),t.assertType(e,n,a)},this.assertType=function(e,n,a){var r=e[n];if(!t.isType(r,a))throw new Error("Invalid dto had field of invalid type ".concat(n," expected ").concat(a))},this.isType=function(e,t){switch(t){case a.NUMBER:return"number"===typeof e;case a.STRING:return"string"===typeof e;case a.BOOLEAN:return"boolean"===typeof e;case a.OBJECT:return"object"===typeof e;case a.ARRAY:return Array.isArray(e)}}};!function(e){e[e.STRING=0]="STRING",e[e.NUMBER=1]="NUMBER",e[e.BOOLEAN=2]="BOOLEAN",e[e.OBJECT=3]="OBJECT",e[e.ARRAY=4]="ARRAY"}(a||(a={}));var w=function e(t,n,a,r){var c=this;Object(E.a)(this,e),this.lighten=function(t){var n=c.red+t<=255?c.red+t:255,a=c.green+t<=255?c.green+t:255,r=c.blue+t<=255?c.blue+t:255;return new e(n,a,r,c.alpha)},this.darken=function(t){var n=c.red-t>=0?c.red-t:0,a=c.green-t>=0?c.green-t:0,r=c.blue-t>=0?c.blue-t:0;return new e(n,a,r,c.alpha)},this.getTextColor=function(){return.299*c.red+.587*c.green+.114*c.blue>150?new e(0,0,0,1):new e(255,255,255,1)},this.toCssString=function(){return"rgba(".concat(c.red,", ").concat(c.green,", ").concat(c.blue,", ").concat(c.alpha,")")},this.red=t,this.green=n,this.blue=a,this.alpha=r};w.RED=new w(255,0,0,1),w.GREEN=new w(0,255,0,1),w.BLUE=new w(0,0,255,1),w.GRAY=new w(128,128,128,1),w.fromHexString=function(e){var t=parseInt(e.substr(1,2),16),n=parseInt(e.substr(3,2),16),a=parseInt(e.substr(5,2),16);return new w(t,n,a,1)};var N=function e(t,n,a,r,c){var o=this;Object(E.a)(this,e),this.getId=function(){return o.id},this.getFirstName=function(){return o.firstname},this.getLastName=function(){return o.lastname},this.getEmail=function(){return o.email},this.getPhone=function(){return o.phone},this.getFullName=function(){return o.getFirstName()+" "+o.getLastName()},this.getColor=function(){return function(e){for(var t=0,n=0;n<e.length;n++)t=e.charCodeAt(n)+((t<<5)-t);for(var a="#",r=0;r<3;r++)a+=("00"+(t>>8*r&255).toString(16)).substr(-2);return w.fromHexString(a)}(o.getFirstName()+o.getLastName())},this.getInitials=function(){return o.getFirstName()[0].toLocaleUpperCase()+o.getLastName()[0].toLocaleUpperCase()},this.id=t,this.firstname=n,this.lastname=a,this.email=r,this.phone=c};N.fromDto=function(e,t){v.assertFieldAndType(e,"firstname",a.STRING);var n=e.firstname;v.assertFieldAndType(e,"lastname",a.STRING);var r=e.lastname;v.assertFieldAndType(e,"email",a.STRING);var c=e.email;v.assertFieldAndType(e,"phone",a.STRING);var o=e.phone;return new N(t,n,r,c,o)};var b=new function e(){Object(E.a)(this,e),this.getContacts=function(){return fetch("https://gist.githubusercontent.com/mark-poussard/d9f54694ae06cf92c8528725d30f7c2c/raw/contacts.json").then(function(e){if(e.ok)return e.json();throw new Error("Couldn't reach data store.")}).then(function(e){return e.map(function(e,t){return N.fromDto(e,t)})})}},y=(n(24),function(e){var t=e.contact.getColor(),n=Object.assign({backgroundColor:t.toCssString(),color:t.getTextColor().toCssString()},e.small?{width:"50px",height:"50px",display:"inline-block"}:{width:"25vw",height:"25vw",fontSize:"10vw",marginLeft:"50%",transform:"translateX(-50%)",marginTop:"20px",marginBottom:"20px"});return c.a.createElement("div",{className:"ContactIcon",style:n},c.a.createElement("span",{className:"content"},e.contact.getInitials()))}),C=(n(26),function(e){return c.a.createElement("div",{className:"ContactEntry",onClick:e.onClick},c.a.createElement(y,{contact:e.contact,small:!0}),c.a.createElement("span",null,e.contact.getFullName()))}),O=function(e){return c.a.createElement("div",null,c.a.createElement(d,null),c.a.createElement("a",{href:"mailto:".concat(e.email)},e.email))},T=function(e){return c.a.createElement("div",null,c.a.createElement(h,null),c.a.createElement("a",{href:"tel:".concat(e.phone)},e.phone))},A=(n(28),function(e){return c.a.createElement("div",{className:"ContactDetail",onClick:e.onClose},c.a.createElement("div",{className:"contact-detail-content"},c.a.createElement(y,{contact:e.contact}),c.a.createElement("span",null,e.contact.getFullName()),c.a.createElement(O,{email:e.contact.getEmail()}),c.a.createElement(T,{phone:e.contact.getPhone()})))}),R=function(e){var t=Object(r.useState)(null),n=Object(s.a)(t,2),a=n[0],o=n[1];return c.a.createElement("div",null,e.contacts.map(function(e){return c.a.createElement(C,{key:e.getId(),contact:e,onClick:function(){return o(e)}})}),a&&c.a.createElement(A,{contact:a,onClose:function(){return o(null)}}))},I=(n(30),function(e){return c.a.createElement("div",{className:"App"},c.a.createElement(g,{promise:b.getContacts()},function(e){return c.a.createElement(R,{contacts:e})}))});n(32);i.a.render(c.a.createElement(I,null),document.getElementById("root"))}},[[12,2,1]]]);
//# sourceMappingURL=main.e79698bb.chunk.js.map