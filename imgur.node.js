!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var r=t();for(var o in r)("object"==typeof exports?exports:e)[o]=r[o]}}(global,(function(){return(()=>{"use strict";var e={907:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getAlbum=void 0;const o=r(80),s=r(571);t.getAlbum=async function(e,t){const r=`${o.ALBUM_ENDPOINT}/${t}`;return s.getImgurApiResponseFromResponse(await e.request({url:r}))}},639:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),r(780).__exportStar(r(907),t)},934:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.ImgurClient=void 0;const o=r(780),s=r(614),a=r(894),n=r(176),i=r(788),u=r(639),c=r(80),l=o.__importDefault(r(376));class d extends s.EventEmitter{constructor(e){super(),this.credentials=e;const t="undefined"!=typeof window?{}:{"user-agent":"imgur/next (https://github.com/kaimallea/node-imgur)"};this.plainFetcher=l.default.create({baseURL:c.IMGUR_API_PREFIX,headers:t,responseType:"json"}),this.fetcher=l.default.create({baseURL:c.IMGUR_API_PREFIX,headers:t,responseType:"json"}),this.fetcher.interceptors.request.use((async e=>(e.headers=e.headers?e.headers:{},e.headers.authorization=await a.getAuthorizationHeader(this),e)),(e=>Promise.reject(e)))}plainRequest(e){return this.plainFetcher(e)}request(e={}){return this.fetcher(e)}deleteImage(e){return n.deleteImage(this,e)}favoriteImage(e){return n.favoriteImage(this,e)}getAlbum(e){return u.getAlbum(this,e)}getGallery(e){return i.getGallery(this,e)}getSubredditGallery(e){return i.getSubredditGallery(this,e)}searchGallery(e){return i.searchGallery(this,e)}getImage(e){return n.getImage(this,e)}updateImage(e){return n.updateImage(this,e)}upload(e){return n.upload(this,e)}}t.ImgurClient=d},80:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.SEARCH_GALLERY_ENDPOINT=t.SUBREDDIT_GALLERY_ENDPOINT=t.GALLERY_ENDPOINT=t.UPLOAD_ENDPOINT=t.IMAGE_ENDPOINT=t.ALBUM_ENDPOINT=t.AUTHORIZE_ENDPOINT=t.API_VERSION=t.IMGUR_API_PREFIX=void 0,t.IMGUR_API_PREFIX="https://api.imgur.com",t.API_VERSION="3",t.AUTHORIZE_ENDPOINT="oauth2/authorize",t.ALBUM_ENDPOINT=`${t.API_VERSION}/album`,t.IMAGE_ENDPOINT=`${t.API_VERSION}/image`,t.UPLOAD_ENDPOINT=`${t.API_VERSION}/upload`,t.GALLERY_ENDPOINT=`${t.API_VERSION}/gallery`,t.SUBREDDIT_GALLERY_ENDPOINT=`${t.API_VERSION}/gallery/r`,t.SEARCH_GALLERY_ENDPOINT=`${t.API_VERSION}/gallery/search`},419:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.isLogin=t.isClientId=t.isAccessToken=void 0,t.isAccessToken=function(e){return void 0!==e.accessToken},t.isClientId=function(e){return void 0!==e.clientId},t.isLogin=function(e){return void 0!==e.clientId&&void 0!==e.username&&void 0!==e.password}},571:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getImgurApiResponseFromResponse=t.createForm=t.getSource=t.isStream=t.isImageUrl=t.isBase64=void 0;const o=r(780).__importDefault(r(353));function s(e){return"string"!=typeof e&&void 0!==e.base64&&"base64"===e.type}function a(e){return"string"!=typeof e&&void 0!==e.stream}t.isBase64=s,t.isImageUrl=function(e){return"string"==typeof e||void 0!==e.image&&"url"===e.type},t.isStream=a,t.getSource=function(e){return"string"==typeof e?e:s(e)?"payload.base64":a(e)?"payload.stream":e.image},t.createForm=function(e){const t=new o.default;if("string"==typeof e)return t.append("image",e),t;for(const[r,o]of Object.entries(e)){const s=["base64","stream"];-1!==s.indexOf(r)?-1!==s.indexOf(e.type)&&t.append(r,e):t.append(r,o)}return t},t.getImgurApiResponseFromResponse=function(e){var t,r;return void 0!==(null===(t=e.data)||void 0===t?void 0:t.status)&&void 0!==(null===(r=e.data)||void 0===r?void 0:r.success)?e.data:{data:e.data,status:e.status,success:!0}}},818:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getGallery=t.constructGalleryUrl=void 0;const o=r(80),s=r(835),a=r(571),n={section:"hot",sort:"viral"};function i(e){const t=Object.assign({},n,e);let r=`${t.section}`;t.sort&&(r+=`/${t.sort}`),"top"===t.section&&t.window&&(r+=`/${t.window}`),t.page&&(r+=`/${t.page}`);const a=new s.URL(`${o.IMGUR_API_PREFIX}/${o.GALLERY_ENDPOINT}/${r}`);return void 0!==t.showViral&&a.searchParams.append("showViral",t.showViral.toString()),void 0!==t.mature&&a.searchParams.append("mature",t.mature.toString()),void 0!==t.album_previews&&a.searchParams.append("album_previews",t.album_previews.toString()),a}t.constructGalleryUrl=i,t.getGallery=async function(e,t=n){const{pathname:r}=i(t),o=r.slice(1);return a.getImgurApiResponseFromResponse(await e.request({url:o}))}},686:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getSubredditGallery=t.constructSubredditGalleryUrl=void 0;const o=r(80),s=r(835),a=r(571);function n(e){let t=`${e.subreddit}`;return e.sort&&(t+=`/${e.sort}`),"top"===e.sort&&e.window&&(t+=`/${e.window}`),e.page&&(t+=`/${e.page}`),new s.URL(`${o.IMGUR_API_PREFIX}/${o.SUBREDDIT_GALLERY_ENDPOINT}/${t}`)}t.constructSubredditGalleryUrl=n,t.getSubredditGallery=async function(e,t){const{pathname:r}=n(t),o=r.slice(1);return a.getImgurApiResponseFromResponse(await e.request({url:o}))}},788:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});const o=r(780);o.__exportStar(r(818),t),o.__exportStar(r(686),t),o.__exportStar(r(477),t)},477:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.searchGallery=t.constructSearchGalleryUrl=void 0;const o=r(80),s=r(571),a=r(835),n=["q_all","q_any","q_exactly","q_not","q_type","q_size_px"];function i(e){let t="";e.sort&&(t+=`/${e.sort}`),"top"===e.sort&&e.window&&(t+=`/${e.window}`),e.page&&(t+=`/${e.page}`);const r=new a.URL(`${o.IMGUR_API_PREFIX}/${o.SEARCH_GALLERY_ENDPOINT}${t}`);if(n.forEach((t=>{var o;(null===(o=e[t])||void 0===o?void 0:o.length)&&r.searchParams.append(t,e[t])})),!r.search){const t=e.q||e.query;if(!t)throw new Error("No query was provided");r.searchParams.append("q",t)}return r}t.constructSearchGalleryUrl=i,t.searchGallery=async function(e,t){const{pathname:r}=i(t),o=r.slice(1);return s.getImgurApiResponseFromResponse(await e.request({url:o}))}},894:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getAuthorizationHeader=void 0;const o=r(419),s=r(80);t.getAuthorizationHeader=async function(e){if(o.isAccessToken(e.credentials))return`Bearer ${e.credentials.accessToken}`;if(o.isClientId(e.credentials)&&!o.isLogin(e.credentials))return`Client-ID ${e.credentials.clientId}`;const{clientId:t,username:r,password:a}=e.credentials,n={url:s.AUTHORIZE_ENDPOINT,baseURL:s.IMGUR_API_PREFIX,params:{client_id:t,response_type:"token"}};let i=await e.plainRequest(n);const u=Array.isArray(i.headers["set-cookie"])?i.headers["set-cookie"][0]:i.headers["set-cookie"];if(!u)throw new Error("No cookies were set during authorization");const c=u.match("(^|;)[s]*authorize_token=([^;]*)");if(!c||c.length<3)throw new Error("Unable to find authorize_token cookie");const l=c[2];n.method="POST",n.data={username:r,password:a,allow:l},n.followRedirect=!1,n.headers={cookie:`authorize_token=${l}`},i=await e.plainRequest(n);const d=i.headers.location;if(!d)throw new Error("Unable to parse location");const p=JSON.parse('{"'+decodeURI(d.slice(d.indexOf("#")+1)).replace(/"/g,'\\"').replace(/&/g,'","').replace(/=/g,'":"')+'"}').access_token;return e.credentials.accessToken=p,`Bearer ${p}`}},870:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.deleteImage=void 0;const o=r(80),s=r(571);t.deleteImage=async function(e,t){const r=`${o.IMAGE_ENDPOINT}/${t}`;return s.getImgurApiResponseFromResponse(await e.request({url:r,method:"DELETE"}))}},129:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.favoriteImage=void 0;const o=r(80),s=r(571);t.favoriteImage=async function(e,t){const r=`${o.IMAGE_ENDPOINT}/${t}/favorite`;return s.getImgurApiResponseFromResponse(await e.request({url:r,method:"POST"}))}},455:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getImage=void 0;const o=r(80),s=r(571);t.getImage=async function(e,t){const r=`${o.IMAGE_ENDPOINT}/${t}`;return s.getImgurApiResponseFromResponse(await e.request({url:r}))}},176:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});const o=r(780);o.__exportStar(r(870),t),o.__exportStar(r(129),t),o.__exportStar(r(455),t),o.__exportStar(r(831),t),o.__exportStar(r(328),t)},831:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.updateImage=void 0;const o=r(80),s=r(571);function a(e){return"string"==typeof e.title||"string"==typeof e.description}t.updateImage=async function(e,t){if(Array.isArray(t)){const r=t.map((t=>{if(!a(t))throw new Error("Update requires a title and/or description");const r=`${o.IMAGE_ENDPOINT}/${t.imageHash}`,n=s.createForm(t);return new Promise((async function(t){return t(s.getImgurApiResponseFromResponse(await e.request({url:r,method:"POST",data:n,headers:n.getHeaders()})))}))}));return await Promise.all(r)}if(!a(t))throw new Error("Update requires a title and/or description");const r=`${o.IMAGE_ENDPOINT}/${t.imageHash}`,n=s.createForm(t);return s.getImgurApiResponseFromResponse(await e.request({url:r,method:"POST",data:n,headers:n.getHeaders()}))}},328:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.upload=void 0;const o=r(571),s=r(80);t.upload=async function(e,t){if(Array.isArray(t)){const r=t.map((t=>{const r=o.createForm(t);return new Promise((async t=>{t(o.getImgurApiResponseFromResponse(await e.request({url:s.UPLOAD_ENDPOINT,method:"POST",data:r,headers:r.getHeaders(),onUploadProgress:t=>{console.log({progressEvent:t}),e.emit("uploadProgress",{...t})}})))}))}));return await Promise.all(r)}const r=o.createForm(t),a=await e.request({url:s.UPLOAD_ENDPOINT,method:"POST",data:r,headers:r.getHeaders(),onUploadProgress:t=>{console.log({progressEvent:t}),e.emit("uploadProgress",{...t})}});return Promise.resolve(o.getImgurApiResponseFromResponse(a))}},376:e=>{e.exports=require("axios")},614:e=>{e.exports=require("events")},353:e=>{e.exports=require("form-data")},780:e=>{e.exports=require("tslib")},835:e=>{e.exports=require("url")}},t={};function r(o){var s=t[o];if(void 0!==s)return s.exports;var a=t[o]={exports:{}};return e[o](a,a.exports,r),a.exports}var o={};return(()=>{var e=o;Object.defineProperty(e,"__esModule",{value:!0}),e.ImgurClient=void 0;const t=r(934);var s=r(934);Object.defineProperty(e,"ImgurClient",{enumerable:!0,get:function(){return s.ImgurClient}}),e.default=t.ImgurClient})(),o})()}));