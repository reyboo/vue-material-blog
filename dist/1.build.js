/*!
 * This file is created by longjw 
 *  email : hilongjw@gmail.com 
 *  updated_at : Tue Jan 05 2016 13:38:59 GMT+0800 (中国标准时间)
 */
webpackJsonp([1],{49:function(l,e,t){"use strict";function a(l){return l&&l.__esModule?l:{"default":l}}Object.defineProperty(e,"__esModule",{value:!0});var d=t(6),o=(a(d),t(4)),i=a(o);i["default"].initialize("2037J60rIoY1FFLAWHPTLY9M-gzGzoHsz","D0ShkNgI2SSL6WheRA8nK6pE");var s=i["default"].Object.extend("Post");e["default"]={data:function(){return{post:{title:"",content:""}}},ready:function(){this.$nextTick(function(){componentHandler.upgradeAllRegistered()})},methods:{newPost:function(){var l=this,e=new s;e.save({title:l.post.title,frontcover:"dist/img/shopping.jpg",text:l.post.content,author:"longjw",favorite:0,comment:[]},{success:function(l){console.log("New object created with objectId: "+l.id)},error:function(l,e){console.log("Failed to create new object, with error message: "+e.message)}})}}}},65:function(l,e,t){e=l.exports=t(2)(),e.push([l.id,"body:before{background:none}.mdl-layout__content{margin-top:112px}@media screen and (max-width:1024px){.mdl-layout__content{margin-top:56px}}.mdl-navigation__link{cursor:pointer}.mdl-textfield{margin:1rem 0;width:100%}.preview-content{border-radius:2px;padding:80px 56px;margin-bottom:80px;min-height:600px}",""])},73:function(l,e,t){var a=t(65);"string"==typeof a&&(a=[[l.id,a,""]]);t(3)(a,{});a.locals&&(l.exports=a.locals)},87:function(l,e){l.exports='<div class="mdl-layout mdl-js-layout mdl-layout--fixed-header mdl-layout--fixed-tabs"><header class=mdl-layout__header><div class=mdl-layout__header-row><span class=mdl-layout-title v-link="{path:\'/\'}">Cov Blog</span><div class=mdl-layout-spacer></div><nav class=mdl-navigation><a class=mdl-navigation__link @click=newPost>完成</a></nav></div><div class="mdl-layout__tab-bar mdl-js-ripple-effect"><a href=#fixed-tab-1 class="mdl-layout__tab is-active">编辑</a> <a href=#fixed-tab-2 class=mdl-layout__tab>预览</a></div></header><div class=mdl-layout__drawer><span class=mdl-layout-title>Cov Blog</span></div><main class=mdl-layout__content><section class="mdl-layout__tab-panel is-active" id=fixed-tab-1><div class=page-content><div class=mdl-grid><div class="mdl-cell mdl-cell--2-col mdl-cell--1-col-tablet"></div><div class="mdl-cell mdl-cell--8-col mdl-cell--10-col-tablet"><div class="mdl-textfield mdl-js-textfield"><input class=mdl-textfield__input v-model=post.title><label class=mdl-textfield__label>Title</label></div><div class="mdl-textfield mdl-js-textfield"><textarea class=mdl-textfield__input v-model=post.content type=text rows=15></textarea><label class=mdl-textfield__label>Content</label></div></div><div class="mdl-cell mdl-cell--2-col mdl-cell--1-col-phone"></div></div></div></section><section class=mdl-layout__tab-panel id=fixed-tab-2><div class=page-content><div class="preview-container mdl-grid"><div class="mdl-cell mdl-cell--2-col mdl-cell--hide-tablet mdl-cell--hide-phone"></div><div class="preview-content mdl-color--white mdl-shadow--4dp content mdl-color-text--grey-800 mdl-cell mdl-cell--8-col"><h3>{{post.title}}</h3>{{{post.content | marked}}}</div></div></div></section></main></div>'},90:function(l,e,t){var a,d;t(73),a=t(49),d=t(87),l.exports=a||{},l.exports.__esModule&&(l.exports=l.exports["default"]),d&&(("function"==typeof l.exports?l.exports.options:l.exports).template=d)}});