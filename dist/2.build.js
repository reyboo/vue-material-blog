/*!
 * This file is created by longjw 
 *  email : hilongjw@gmail.com 
 *  updated_at : Tue Jan 05 2016 13:38:59 GMT+0800 (中国标准时间)
 */
webpackJsonp([2],{47:function(t,e,o){"use strict";function s(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var a=o(6),n=(s(a),o(4)),i=s(n);i["default"].initialize("2037J60rIoY1FFLAWHPTLY9M-gzGzoHsz","D0ShkNgI2SSL6WheRA8nK6pE");var l=i["default"].Object.extend("Post");e["default"]={data:function(){return{state:{favorite:!1,commentTmp:""},post:{}}},ready:function(){console.log(componentHandler),componentHandler.upgradeAllRegistered()},asyncData:function(t,e){var o=this;this.loadPost(0,function(e){t({post:e}),o.$nextTick(function(){componentHandler.upgradeAllRegistered()})})},methods:{loadPost:function(t,e){var o=new i["default"].Query(l),s=null;o.get(this.$route.params.id,{success:function(t){var o=t;s={id:o.id,title:o.get("title"),frontcover:o.get("frontcover"),text:o.get("text"),author:o.get("author"),time:o.updatedAt,favorite:o.get("favorite"),comment:o.get("comment")},e(s)},error:function(t,e){console.log(t)}})},tapFavorite:function(){var t=this,e=new i["default"].Query(l);e.get(this.$route.params.id,{success:function(e){t.state.favorite?(t.state.favorite=!1,t.post.favorite--,e.increment("favorite",-1)):(t.state.favorite=!0,t.post.favorite++,e.increment("favorite",1)),e.save()},error:function(t,e){console.log(t)}})},addComment:function(){var t=this,e=new i["default"].Query(l);e.get(this.$route.params.id,{success:function(e){e.add("comment",{avatar:"dist/img/co2.jpg",name:"cov的朋友们",time:new Date,text:t.state.commentTmp}),t.post.comment.push({avatar:"dist/img/co2.jpg",name:"cov的朋友们",time:new Date,text:t.state.commentTmp}),e.save()},error:function(t,e){console.log(t)}})},goNext:function(t){var e=this;"next"===t?this.$http.get("dist/posts.json").then(function(t){void 0!=t.data[e.post.id+1]&&(document.documentElement.scrollTop=document.body.scrollTop=0,e.post=t.data[e.post.id+1],e.$route.router.go(e.post.id+1))},function(t){}):this.$http.get("dist/posts.json").then(function(t){void 0!=t.data[e.post.id-1]&&(document.documentElement.scrollTop=document.body.scrollTop=0,e.post=t.data[e.post.id-1],e.$route.router.go(e.post.id+1))},function(t){})}},ready:function(){window.scrollTop=0}}},61:function(t,e,o){e=t.exports=o(2)(),e.push([t.id,".faed{color:#ff4081}.entry-content{border-radius:2px;padding:20px 56px;margin-bottom:80px;min-height:300px}",""])},69:function(t,e,o){var s=o(61);"string"==typeof s&&(s=[[t.id,s,""]]);o(3)(s,{});s.locals&&(t.exports=s.locals)},85:function(t,e){t.exports='<div class="demo-blog demo-blog--blogpost mdl-layout mdl-js-layout has-drawer is-upgraded"><main class=mdl-layout__content><div class=demo-back><a class="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon" v-link="\'/\'" title="go back" role=button><i class=material-icons role=presentation>arrow_back</i></a></div><div class="demo-blog__posts mdl-grid"><div class="mdl-card mdl-shadow--4dp mdl-cell mdl-cell--12-col"><div class="mdl-card__media mdl-color-text--grey-50"><h3>{{post.title}}</h3></div><div class="mdl-color-text--grey-700 mdl-card__supporting-text meta"><div class=minilogo></div><div><strong>{{post.author}}</strong> <span>{{post.time | timeago}}</span></div><div class=section-spacer></div><div class=meta__favorites v-tap=tapFavorite>{{post.favorite}} <i class=material-icons role=presentation :class="{\'faed\':state.favorite}">favorite</i> <span class=visuallyhidden>favorites</span></div><div><i class=material-icons role=presentation>bookmark</i> <span class=visuallyhidden>bookmark</span></div><div><i class=material-icons role=presentation>share</i> <span class=visuallyhidden>share</span></div></div><div class=entry-content>{{{post.text | marked}}}</div><div class="mdl-color-text--primary-contrast mdl-card__supporting-text comments"><div><div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label"><textarea rows=1 class=mdl-textfield__input v-model=state.commentTmp></textarea><label for=comment class=mdl-textfield__label>Join the discussion</label></div><button v-tap=addComment class="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon"><i class=material-icons role=presentation>check</i><span class=visuallyhidden>add comment</span></button></div><div class="comment mdl-color-text--grey-700" v-for="comment in post.comment"><header class=comment__header><img :src=comment.avatar class=comment__avatar><div class=comment__author><strong>{{comment.name}}</strong> <span>{{comment.time | timeago}}</span></div></header><div class=comment__text>{{comment.text}}</div><nav class=comment__actions><button class="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon"><i class=material-icons role=presentation>thumb_up</i><span class=visuallyhidden>like comment</span></button> <button class="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon"><i class=material-icons role=presentation>thumb_down</i><span class=visuallyhidden>dislike comment</span></button> <button class="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon"><i class=material-icons role=presentation>share</i><span class=visuallyhidden>share comment</span></button></nav></div></div></div><nav class="demo-nav mdl-color-text--grey-50 mdl-cell mdl-cell--12-col"><a v-tap="goNext(\'next\')" class=demo-nav__button><button class="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon mdl-color--white mdl-color-text--grey-900" role=presentation><i class=material-icons>arrow_back</i></button> Newer</a><div class=section-spacer></div><a v-tap="goNext(\'last\')" class=demo-nav__button>Older <button class="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon mdl-color--white mdl-color-text--grey-900" role=presentation><i class=material-icons>arrow_forward</i></button></a></nav></div></main><div class=mdl-layout__obfuscator></div></div>'},89:function(t,e,o){var s,a;o(69),s=o(47),a=o(85),t.exports=s||{},t.exports.__esModule&&(t.exports=t.exports["default"]),a&&(("function"==typeof t.exports?t.exports.options:t.exports).template=a)}});