(this["webpackJsonpblm-test"]=this["webpackJsonpblm-test"]||[]).push([[0],{26:function(e,t,a){e.exports=a(40)},31:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(23),l=a.n(c),s=(a(31),a(5)),i=a(6),o=a(8),m=a(7),u=a(25),d=a(12),p=a(11),b=a(15),h=a(17),f=a.n(h),g=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return this.props.BadgesData?this.props.LegendCheck?this.props.BadgesData.map((function(t){return r.a.createElement(n.Fragment,{key:f()()},r.a.createElement("span",{"data-name":t,onClick:function(t){return e.props.clickAction(t,e.props.CatName)},className:"badge badge-pill "+(e.props.CatID[t]?"legend-button-active":"legend-button-inactive")+" text-wrap "+t.toLowerCase().split(" ").join("-").replace("+","plus")},t)," ")})):this.props.BadgesData.map((function(e){return r.a.createElement("span",{key:f()(),className:"badge badge-pill text-wrap "+e.toLowerCase().split(" ").join("-").replace("+","plus")},e)})):null}}]),a}(n.Component),E=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props.passingBadges,t=e.TypeOfActionCat,a=e.IntersectionalityCat,c=e.SubtopicCat,l=e.RecAudienceCat,s=[],i=[],o=[],m=[];return this.props.airtableData.map((function(e){e.fields.TypeOfAction.map((function(e){-1===s.indexOf(e)&&s.push(e)})),e.fields.Intersectionality&&e.fields.Intersectionality.map((function(e){-1===i.indexOf(e)&&i.push(e)})),e.fields.Subtopic&&e.fields.Subtopic.map((function(e){-1===o.indexOf(e)&&o.push(e)})),e.fields.RecAudience&&e.fields.RecAudience.map((function(e){-1===m.indexOf(e)&&m.push(e)}))})),r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"table-responsive"},r.a.createElement("table",{className:"table table-bordered pill-matrix table-filters"},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},"What content or action are you looking for?"),r.a.createElement("td",{id:"filter-TypeOfAction"},r.a.createElement(g,{BadgesData:s,LegendCheck:!0,CatID:t,CatName:"TypeOfActionCat",clickAction:this.props.clickAction}))),r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},"What intersections are you curious about?"),r.a.createElement("td",{id:"filter-Intersectionality"},r.a.createElement(g,{BadgesData:i,LegendCheck:!0,CatID:a,CatName:"IntersectionalityCat",clickAction:this.props.clickAction}))),r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},"What other issues are important you?"),r.a.createElement("td",{id:"filter-Subtopic"},r.a.createElement(g,{BadgesData:o,LegendCheck:!0,CatID:c,CatName:"SubtopicCat",clickAction:this.props.clickAction}))),r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},"Who are you looking to educate?"),r.a.createElement("td",{id:"filter-RecAudience"},r.a.createElement(g,{BadgesData:m,LegendCheck:!0,CatID:l,CatName:"RecAudienceCat",clickAction:this.props.clickAction}))))))))}}]),a}(n.Component),v=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).fullAirtableCards=[],n.masterFilterListner=function(e,t){console.log("Filter clicked",e.target.dataset.name);var a=e.target.dataset.name;n.setState((function(e){var n;return{passingBadges:Object(p.a)(Object(p.a)({},e.passingBadges),{},(n={},Object(d.a)(n,t,Object(p.a)(Object(p.a)({},e.passingBadges[t]),{},Object(d.a)({},a,!e.passingBadges[t][a]))),Object(d.a)(n,"StarterCat",!1),n))}}))},n.combinedFilters=function(){var e={TypeOfAction:[],Intersectionality:[],Subtopic:[],RecAudience:[],Starter:!1},t=n.state.passingBadges,a=t.TypeOfActionCat,r=t.IntersectionalityCat,c=t.SubtopicCat,l=t.RecAudienceCat;for(var s in a)a[s]&&e.TypeOfAction.push(s);for(var i in r)r[i]&&e.Intersectionality.push(i);for(var o in c)c[o]&&e.Subtopic.push(o);for(var m in l)l[m]&&e.RecAudience.push(m);return e.Starter=n.state.passingBadges.StarterCat,e},n.multiPropsFilter=function(e,t){if(t.Starter)return e.filter((function(e){return e.fields.Starter}));var a=Object.keys(t);return e.filter((function(e){return a.every((function(a){return!t[a].length||(Array.isArray(e.fields[a])?e.fields[a].some((function(e){return t[a].includes(e)})):t[a].includes(e.fields[a]))}))}))},n.masterFilterListner=n.masterFilterListner.bind(Object(b.a)(n)),n.state={filteredCards:[],passingBadges:{TypeOfActionCat:{"Action Guide":!1,Article:!1,Book:!1,"Legal Services":!1,Movie:!1,"News Source":!1,Podcast:!1,"Short Video":!1,"Support Businesses":!1,"TV series":!1,Donation:!1,"academic Paper":!1,"Structured Learning":!1},IntersectionalityCat:{"LGBTQ+":!1,Feminist:!1,"Indigenous Rights":!1,"South Asian":!1},SubtopicCat:{Healthcare:!1,"Criminal Justice":!1,Immigration:!1,"Voting Rights":!1,"Economic Inequality":!1,"Environmental Justice":!1,"Labor Rights":!1,"Reproductive Rights":!1,"Sexual Assault and Rape":!1,"Mental Health":!1,Education:!1,"Bail Funds":!1,Policing:!1},RecAudienceCat:{Kids:!1,"Young Adults":!1,Teens:!1,Parents:!1},StarterCat:!1}},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.airtable.com/v0/appAPRM3pAfHUj3LP/Raw%20Database?api_key=keycv2X09Q0ghqQfu").then((function(e){return e.json()})).then((function(t){e.fullAirtableCards=t.records,e.setState({filteredCards:t.records})})).catch((function(e){alert("There was an error pulling from the airtable DB")}))}},{key:"resetFilters",value:function(){var e=Object(p.a)({},this.state.passingBadges);Object.keys(e).forEach((function(t){"StarterCat"===t?e[t]=!1:Object.keys(e[t]).forEach((function(a){return e[t][a]=!1}))})),this.setState({passingBadges:e})}},{key:"starterSelect",value:function(){this.resetFilters();var e=Object(p.a)({},this.state.passingBadges);e.StarterCat=!0,this.setState({passingBadges:e})}},{key:"render",value:function(){var e=this;return null===this.state.filteredCards?null:r.a.createElement("div",{className:"container mt-5"},r.a.createElement("h1",null,"Build your plan ",r.a.createElement("small",{className:"text-muted vsmall"},"Click on any tag to filter, use our starter kit, or just scroll")),r.a.createElement("div",{className:"cotainer mb-3"},r.a.createElement(E,{airtableData:this.fullAirtableCards,passingBadges:this.state.passingBadges,clickAction:this.masterFilterListner}),r.a.createElement("div",{className:"btn-toolbar row"},r.a.createElement("div",{className:"offset-4"},r.a.createElement("button",{type:"button",className:"btn btn-primary mx-1",onClick:function(){return e.starterSelect()},id:"#"},"Show me some starters!"),r.a.createElement("button",{type:"button",className:"btn btn-secondary mx-1",onClick:function(){return e.resetFilters()},id:"#"},"Reset")))),r.a.createElement(y,null,r.a.createElement("h1",{className:"mt-5"},"Resources to educate and act ",r.a.createElement("small",{className:"text-muted vsmall"},"Click on any image to go to the site"))),r.a.createElement("div",{className:"row row-cols-1 row-cols-lg-4 card-matrix mt-4"},this.multiPropsFilter(this.fullAirtableCards,this.combinedFilters()).map((function(e){return r.a.createElement(C,e.fields)}))))}}]),a}(n.Component);function y(e,t){var a=r.a.useState(!1),n=Object(u.a)(a,2),c=n[0],l=n[1],s=r.a.useRef(null);return r.a.useEffect((function(){var e=new IntersectionObserver((function(e){e.forEach((function(e){return l(e.isIntersecting)}))}));return e.observe(s.current),function(){return e.unobserve(s.current)}})),r.a.createElement("div",{key:t,ref:s,className:"col mb-4 fader "+(c?"is-visible":"")},e.children)}var C=function(e){var t=e.Title,a=e.TypeOfAction,n=e.Link,c=e.ShortDescription,l=e.Intersectionality,s=e.RecAudience,i=e.Starter,o=e.Subtopic,m=e.ImageURL,u=e.Index;return r.a.createElement(y,{key:u},r.a.createElement("div",{className:"card h-100 card-highlights "+a[0].toLowerCase().split(" ").join("-").replace("+","plus")},r.a.createElement("a",{href:n,target:"_blank",rel:"noopener"},r.a.createElement("img",{className:"card-img-top",src:m,alt:"Website preview for "+{Title:t}})),r.a.createElement("div",{className:"card-body"},r.a.createElement("a",{href:n,target:"_blank",re:"noopener",className:"card-title-link"},r.a.createElement("h5",{className:"card-title"},t+" ",r.a.createElement("small",{className:"badge badge-dark "+(i?"":"d-none")}," STARTER"))),r.a.createElement("div",{className:"descriptionText d-none "+(c.length<106?"":"d-lg-block d-xl-block")},r.a.createElement("p",{className:"card-text collapse",id:"descriptionContent"+u,"aria-expanded":"false"},c),r.a.createElement("a",{href:"#descriptionContent"+u,"data-toggle":"collapse",className:"collapsed","aria-expanded":"false","aria-controls":"descriptionContent"},r.a.createElement("span",{className:"readMore"},"+Show More"),r.a.createElement("span",{className:"readLess"},"-Show Less"))),r.a.createElement("div",{className:"descriptionText "+(c.length<106?"d-block":"d-block d-lg-none")},r.a.createElement("p",{className:"card-text"},c)),r.a.createElement("div",{className:"pill-matrix pt-3 pill-border-rows"},r.a.createElement("div",{className:"border-top pt-3 border-bottom"},r.a.createElement("p",{className:"font-weight-bold"},"Intersectionality: ","  ",r.a.createElement(g,{BadgesData:l,LegendCheck:!1}))),r.a.createElement("div",{className:"pt-3 border-bottom"},r.a.createElement("p",{className:"font-weight-bold"},"Subtopic: ","  ",r.a.createElement(g,{BadgesData:o,LegendCheck:!1}))),r.a.createElement("div",{className:"pt-3 border-bottom"},r.a.createElement("p",{className:"font-weight-bold"},"Action Type: ","  ",r.a.createElement(g,{BadgesData:a,LegendCheck:!1}))),r.a.createElement("div",{className:"pt-3 border-bottom"},r.a.createElement("p",{className:"font-weight-bold"},"Rec. Audience: ","  ",r.a.createElement(g,{BadgesData:s,LegendCheck:!1})))))))},N=a(13),k=a(1),O=function(){return r.a.createElement("nav",{className:"navbar sticky-top navbar-expand-lg navbar-light bg-nav-custom"},r.a.createElement("div",{className:"container"},r.a.createElement("a",{className:"navbar-brand font-italic",href:"/"},"An Antiracism Project"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(N.b,{exact:!0,activeClassName:"active",className:"nav-link",to:"/"},"Home")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(N.b,{activeClassName:"active",className:"nav-link",to:"/fullList"},"Full Data Table"))),r.a.createElement("ul",{className:"navbar-nav"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(N.b,{className:"btn btn-primary",to:"/submitEntry"},"Submit an Entry"))))))},j=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"container mt-5"},r.a.createElement("div",{className:"row"},r.a.createElement("h1",null,"Explore all resources",r.a.createElement("small",{class:"vsmall text-muted"},"  Airtable only lets us show 100 on our homepage :(")),r.a.createElement("p",null,"These are all the resources categorized to date.  Help us out by submitting ",r.a.createElement("a",{href:"/submitEntry"},"other recommendations"))),r.a.createElement("div",{className:"row"},r.a.createElement("iframe",{title:"airtable list",className:"airtable-embed airTable-embed-view",src:"https://airtable.com/embed/shrcTZxNFB1e55pen?backgroundColor=blue&viewControls=on",frameborder:"0",onmousewheel:""})))}}]),a}(r.a.Component),w=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"container mt-5"},r.a.createElement("div",{className:"row"},r.a.createElement("h1",null,"Contribute to the community"),r.a.createElement("p",null,"This project was built by a community with the hopes of bringing together a better community. If you have suggestions, we'd love to hear from you!")),r.a.createElement("div",{className:"row"},r.a.createElement("script",{src:"https://static.airtable.com/js/embed/embed_snippet_v1.js"}),r.a.createElement("iframe",{title:"airtable submit form",class:"airtable-embed airtable-dynamic-height airTable-form-view",src:"https://airtable.com/embed/shr0Mly7UD0cne35m?backgroundColor=blue",frameborder:"0",onmousewheel:""})))}}]),a}(r.a.Component),A=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(N.a,null,r.a.createElement(O,null),r.a.createElement(k.c,null,r.a.createElement(k.a,{exact:!0,path:"/",component:v}),r.a.createElement(k.a,{path:"/fullList",component:j}),r.a.createElement(k.a,{path:"/submitEntry",component:w})))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(36),a(37);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(A,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[26,1,2]]]);
//# sourceMappingURL=main.15c78029.chunk.js.map