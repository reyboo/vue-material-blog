/*!
 * This file is created by longjw 
 *  email : hilongjw@gmail.com 
 *  updated_at : Mon Jan 11 2016 11:24:42 GMT+0800 (中国标准时间)
 */
webpackJsonp([0],{6:function(t,e,o){var n,i,l;/*!
		Autosize 3.0.14
		license: MIT
		http://www.jacklmoore.com/autosize
	*/
!function(o,d){i=[e,t],n=d,l="function"==typeof n?n.apply(e,i):n,!(void 0!==l&&(t.exports=l))}(this,function(t,e){"use strict";function o(t){function e(){var e=window.getComputedStyle(t,null);m=e.overflowY,"vertical"===e.resize?t.style.resize="none":"both"===e.resize&&(t.style.resize="horizontal"),u="content-box"===e.boxSizing?-(parseFloat(e.paddingTop)+parseFloat(e.paddingBottom)):parseFloat(e.borderTopWidth)+parseFloat(e.borderBottomWidth),isNaN(u)&&(u=0),i()}function o(e){var o=t.style.width;t.style.width="0px",t.offsetWidth,t.style.width=o,m=e,c&&(t.style.overflowY=e),n()}function n(){var e=window.pageYOffset,o=document.body.scrollTop,n=t.style.height;t.style.height="auto";var i=t.scrollHeight+u;return 0===t.scrollHeight?void(t.style.height=n):(t.style.height=i+"px",f=t.clientWidth,document.documentElement.scrollTop=e,void(document.body.scrollTop=o))}function i(){var e=t.style.height;n();var i=window.getComputedStyle(t,null);if(i.height!==t.style.height?"visible"!==m&&o("visible"):"hidden"!==m&&o("hidden"),e!==t.style.height){var l=document.createEvent("Event");l.initEvent("autosize:resized",!0,!1),t.dispatchEvent(l)}}var d=void 0===arguments[1]?{}:arguments[1],a=d.setOverflowX,s=void 0===a?!0:a,r=d.setOverflowY,c=void 0===r?!0:r;if(t&&t.nodeName&&"TEXTAREA"===t.nodeName&&!l.has(t)){var u=null,m=null,f=t.clientWidth,p=function(){t.clientWidth!==f&&i()},v=function(e){window.removeEventListener("resize",p,!1),t.removeEventListener("input",i,!1),t.removeEventListener("keyup",i,!1),t.removeEventListener("autosize:destroy",v,!1),t.removeEventListener("autosize:update",i,!1),l["delete"](t),Object.keys(e).forEach(function(o){t.style[o]=e[o]})}.bind(t,{height:t.style.height,resize:t.style.resize,overflowY:t.style.overflowY,overflowX:t.style.overflowX,wordWrap:t.style.wordWrap});t.addEventListener("autosize:destroy",v,!1),"onpropertychange"in t&&"oninput"in t&&t.addEventListener("keyup",i,!1),window.addEventListener("resize",p,!1),t.addEventListener("input",i,!1),t.addEventListener("autosize:update",i,!1),l.add(t),s&&(t.style.overflowX="hidden",t.style.wordWrap="break-word"),e()}}function n(t){if(t&&t.nodeName&&"TEXTAREA"===t.nodeName){var e=document.createEvent("Event");e.initEvent("autosize:destroy",!0,!1),t.dispatchEvent(e)}}function i(t){if(t&&t.nodeName&&"TEXTAREA"===t.nodeName){var e=document.createEvent("Event");e.initEvent("autosize:update",!0,!1),t.dispatchEvent(e)}}var l="function"==typeof Set?new Set:function(){var t=[];return{has:function(e){return Boolean(t.indexOf(e)>-1)},add:function(e){t.push(e)},"delete":function(e){t.splice(t.indexOf(e),1)}}}(),d=null;"undefined"==typeof window||"function"!=typeof window.getComputedStyle?(d=function(t){return t},d.destroy=function(t){return t},d.update=function(t){return t}):(d=function(t,e){return t&&Array.prototype.forEach.call(t.length?t:[t],function(t){return o(t,e)}),t},d.destroy=function(t){return t&&Array.prototype.forEach.call(t.length?t:[t],n),t},d.update=function(t){return t&&Array.prototype.forEach.call(t.length?t:[t],i),t}),e.exports=d})},15:function(t,e,o){t.exports=o.p+"welcome_card.jpg?810f0185586b37951e07c25376663834"},32:function(t,e,o){var n,i;o(129),n=o(72),i=o(149),t.exports=n||{},t.exports.__esModule&&(t.exports=t.exports["default"]),i&&(("function"==typeof t.exports?t.exports.options:t.exports).template=i)},72:function(t,e,o){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var i=o(5),l=(n(i),o(6)),d=n(l),a=o(4),s=n(a),r=s["default"].state.Cloud.Object.extend("Post"),c=s["default"].state.Cloud,u=null;e["default"]={data:function(){u=this;var t=!1;return void 0!=this.$route.params.id&&(t=!0),{edit:t,post:{title:"",content:"",frontImg:null}}},ready:function(){s["default"].actions.showLoading(),this.edit?this.loadPost(function(t){u.post={title:t.title,content:t.text,frontImg:t.frontcover},u.$nextTick(function(){componentHandler.upgradeAllRegistered()})}):this.$nextTick(function(){componentHandler.upgradeAllRegistered()}),(0,d["default"])(document.querySelector("#content"))},computed:{loginState:function(){return s["default"].state.logined}},methods:{showLogin:function(){s["default"].actions.showLogin(),document.getElementById("indexDrawer").setAttribute("class","mdl-layout__drawer"),document.getElementsByClassName("mdl-layout__obfuscator")[0].setAttribute("class","mdl-layout__obfuscator"),this.$nextTick(function(){componentHandler.upgradeAllRegistered()})},hideLogin:function(t){return t.target==document.getElementById("showLogin")?!0:(s["default"].actions.hideLogin(),void s["default"].actions.hideSign())},showModal:function(t,e){s["default"].actions.showModal(t,e),this.$nextTick(function(){componentHandler.upgradeAllRegistered()})},loadPost:function(t){var e=new c.Query(r),o=null;e.include("author"),e.get(this.$route.params.id,{success:function(e){var n=e;o={id:n.id,title:n.get("title"),frontcover:n.get("frontcover"),text:n.get("text"),author:n.get("author").getUsername(),avatar:n.get("author").get("avatar"),time:n.updatedAt,favorite:n.get("favorite"),comment:[]},t(o)},error:function(t,e){u.showModal("提示","加载失败，我也不知道怎么回事")}})},newPost:function(){var t=s["default"].state.Cloud.User.current();if(!t)return u.showModal("提示","你还没登录呢，登录之后才能提交文章哦"),!1;if(""==u.post.title)return u.showModal("提示","标题都没有写呢"),!1;if(""==u.post.content)return u.showModal("提示","文章内容都没有写呢"),!1;if(null==u.post.frontImg&&(u.post.frontImg="dist/shopping.jpg"),this.edit){var e=new c.Query(r);e.get(this.$route.params.id,{success:function(e){e.save({title:u.post.title,frontcover:u.post.frontImg,text:u.post.content,author:t},{success:function(t){u.showModal("提示","你的文章写的太棒了，已经完成提交。")},error:function(t,e){u.showModal("提示","你的文章写的太棒了，但是由于一些故障，没有完成提交。")}})},error:function(t,e){u.showModal("提示",e.message)}})}else{var o=new r;o.save({title:u.post.title,frontcover:u.post.frontImg,text:u.post.content,author:t,favorite:0},{success:function(t){u.showModal("提示","你的文章写的太棒了，已经完成提交。")},error:function(t,e){u.showModal("提示","你的文章写的太棒了，但是由于一些故障，没有完成提交。")}})}},upImg:function(){s["default"].actions.showLoading();var t=document.getElementById("frontImg");if(t.files.length<1)return u.showModal("提示","文件类型异常"),!1;var e=t.files[0],o="avatar.jpg",n=new c.File(o,e);n.save().then(function(){u.post.frontImg=n.url(),s["default"].actions.hideLoading()},function(t){u.showModal("提示",t.message)})}}}},116:function(t,e,o){e=t.exports=o(2)(),e.push([t.id,".writing{background:#fff}.writing .mdl-layout__content{margin-top:112px}.writing .mdl-navigation__link{cursor:pointer}.writing .mdl-textfield{margin:1rem 0;width:100%}.writing .preview-content{border-radius:2px;padding:220px 56px 56px;margin-bottom:80px;min-height:600px;position:relative}.writing .preview-content .mdl-card__title{position:absolute;width:100%;left:0;top:0;height:200px}.writing .mdl-layout__header-row{height:56px;padding:0 16px 0 0}.writing .mdl-layout-title{padding-left:20px}.writing .mdl-card{width:512px}.writing .mdl-card__title{position:relative;color:#fff;height:176px;background:url("+o(15)+") center/cover}#frontImg{position:absolute;width:100%;height:100%;opacity:0}",""])},129:function(t,e,o){var n=o(116);"string"==typeof n&&(n=[[t.id,n,""]]);o(3)(n,{});n.locals&&(t.exports=n.locals)},149:function(t,e){t.exports='<div @click=hideLogin class="writing mdl-layout mdl-js-layout mdl-layout--fixed-header mdl-layout--fixed-tabs"><header class=mdl-layout__header><div class=mdl-layout__header-row><div class=demo-back><a class="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon" v-link="\'/\'" title="go back" role=button><i class=material-icons role=presentation>arrow_back</i></a></div><span class=mdl-layout-title v-link="{name:\'home\'}">Cov Blog</span><div class=mdl-layout-spacer></div><nav class=mdl-navigation><a class=mdl-navigation__link @click=newPost>完成</a></nav></div><div class="mdl-layout__tab-bar mdl-js-ripple-effect"><a href=#fixed-tab-1 class="mdl-layout__tab is-active">编辑</a> <a href=#fixed-tab-2 class=mdl-layout__tab>预览</a></div></header><main class=mdl-layout__content><section class="mdl-layout__tab-panel is-active" id=fixed-tab-1><div class=page-content><div class=mdl-grid><div class="mdl-cell mdl-cell--2-col mdl-cell--1-col-tablet"></div><div class="mdl-cell mdl-cell--8-col mdl-cell--10-col-tablet"><div class=mdl-card__title :style="{\'background-image\': \'url(\'+(post.frontImg == null ? \'dist/welcome_card.jpg\' : post.frontImg)+\')\'}"><h2 class=mdl-card__title-text>{{post.title==\'\' ? \'文章的封面图\' : post.title}}</h2><div class=mdl-card__menu><button id=demo-menu-lower-right class="mdl-button mdl-js-button mdl-button--icon"><i class=material-icons>more_vert</i></button><ul class="mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect" for=demo-menu-lower-right><li class=mdl-menu__item><input @change=upImg type=file id=frontImg>上传新图片</li></ul></div></div><div class="mdl-textfield mdl-js-textfield"><input class=mdl-textfield__input v-model=post.title><label class=mdl-textfield__label>Title</label></div><div class="mdl-textfield mdl-js-textfield"><textarea class=mdl-textfield__input id=content v-model=post.content type=text rows=15></textarea><label class=mdl-textfield__label>Content</label></div></div><div class="mdl-cell mdl-cell--2-col mdl-cell--1-col-phone"></div></div></div></section><section class=mdl-layout__tab-panel id=fixed-tab-2><div class=page-content><div class="preview-container mdl-grid"><div class="mdl-cell mdl-cell--2-col mdl-cell--hide-tablet mdl-cell--hide-phone"></div><div class="preview-content mdl-color--white mdl-shadow--4dp content mdl-color-text--grey-800 mdl-cell mdl-cell--8-col"><div class=mdl-card__title :style="{\'background-image\': \'url(\'+(post.frontImg == null ? \'dist/welcome_card.jpg\' : post.frontImg)+\')\'}"><h2 class=mdl-card__title-text>{{post.title==\'\' ? \'文章的封面图\' : post.title}}</h2></div>{{{post.content | marked}}}</div></div></div></section></main></div>'}});