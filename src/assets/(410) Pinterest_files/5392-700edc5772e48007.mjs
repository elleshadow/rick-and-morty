(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[5392,12749],{693099:(e,n,t)=>{t.d(n,{AA:()=>a,E9:()=>g,EU:()=>f,IO:()=>h,KH:()=>l,QR:()=>c,Uw:()=>r,ZR:()=>m,dy:()=>_,eA:()=>d,k7:()=>i,rT:()=>p,tz:()=>u,u9:()=>w,zR:()=>s,zu:()=>o});const o="OPEN_UNAUTH",r="openUnauthType",a="_isAfterLogin",i="_lastVisitedPages",s="_lastVisitedPagesBeforeLogin",_="_lastVisitedBoardPages",c="_lastVisitedPagesBeforeNavPage",l="_lastVisitedSessionPages",u="_unauthVisitedPages",d=20,g="unauthTopicsFollowed",p=["US","CA","NZ","AU"],h=new Set(["GB","IE"]),f=new Set(["AT","BE","CH","DE","DK","ES","FR","IT","NL","NO","PT","SE"]),m=new Set(["BR","MX","AR","CL","CO","PE"]),w="ad_img"},81759:(e,n,t)=>{t.d(n,{CC:()=>m,Ff:()=>T,H$:()=>E,Mt:()=>f,RV:()=>I,Yi:()=>R,Yy:()=>A,Z4:()=>h,dc:()=>O,dp:()=>w,i$:()=>g,p9:()=>k,t_:()=>d,vV:()=>p});var o=t(231486),r=t(6637),a=t(826067),i=t(400660),s=t(226198),_=t(867820),c=t(622096),l=t(957161),u=t(693099);const d=()=>(0,l.qn)(u.tz,""),g=()=>{const e=d();let n;try{n=JSON.parse(e)}catch(t){n=[]}return n},p=()=>(0,l.L_)(u.tz),h=(e,n)=>{const t=g(),o=t.length,r=o?t[0].path:"";if(o<u.eA&&(!o||e!==r)){const o={path:e,pageType:n,ts:Date.now()};(0,l.Nh)(u.tz,JSON.stringify([o].concat(t)))}},f=(e,n,t,o,r,a,i=u.k7)=>{const s=(0,l.qn)(i)?JSON.parse((0,l.qn)(i)):[];if(!s[0]||s[0].path!==e){const _=[{path:e,ts:Date.now(),pin_id:t||0,first_pin_image_signature:n||"",first_pin_id:t||"",image_info:o||"",pin_description:r||"",is_shared:!!a,pin_invite_code:a}];(0,l.Nh)(i,JSON.stringify(_.concat(s)))}},m=({path:e,image:n,dominant_color:t,pin_description:o,pin_id:r})=>{const a=(()=>{const e=(0,c.qn)(u.KH);if(!e)return[];let n;try{n=JSON.parse(e)}catch(t){n=[]}return n})();if(!a[0]||a[0].path!==e){const i=[{path:e,image:n,pin_description:o||"",dominant_color:t||"",pin_id:r||""}];(0,c.Nh)(u.KH,JSON.stringify(i.concat(a)))}};function w(e,n,t,o,r,a){f(e,n,t,o,r,a,u.zR)}const E=(e,n)=>{var t,o;f(e,n.image_signature,n.id,null===(t=n.images)||void 0===t?void 0:t["236x"],null!==(o=n.description)&&void 0!==o?o:"","",u.dy)};function k(e,n,t,o,r){f(e,n,t,o,r,"",u.QR)}function O(){return g().filter((e=>"closeup"===e.pageType)).length}function R(){const e=r.ZP.create("UnauthUserDataResource");return new Promise(((n,t)=>{e.callGet().then((e=>{const r=e.resource_response.data,a=!!o.U2(s.x3);return r?((0,i.Wn)(r.medium_image_url)&&(r.medium_image_url=""),(0,_.My)("mweb.unauth.personalized_login.fetch_user_info.info.user_info_found.logged_out_cookie_"+(a?"true":"false")),n(r)):((0,_.My)("mweb.unauth.personalized_login.fetch_user_info.info.no_user_info.logged_out_cookie_"+(a?"true":"false")),t({}))})).catch((e=>{if(e&&e.message){const n=e.message.replace(/\s/g,"_").toLowerCase();(0,_.My)(`mweb.unauth.personalized_login.fetch_user_info.error.${n}`)}else(0,_.My)("mweb.unauth.personalized_login.fetch_user_info.error.unknown");return t(e)}))}))}function N({i18n:e,location:n}){const t=n.pathname.startsWith("/signup"),o=n.pathname.startsWith("/login");if(!t&&!o)return{showPLPBanner:!1,pinForBanner:null};let r;try{r=JSON.parse((0,c.qn)(u.KH))}catch(a){r=[]}if(r&&r.length>0){const n=r[0];if(n)return n.bannerCopy=e._('More ideas like this await', 'page banner with pin image that was signed up from', 'page banner with pin image that was signed up from'),{showPLPBanner:Boolean(n.image),pinForBanner:n}}return{showPLPBanner:!1,pinForBanner:null}}const A=e=>e.search&&e.search.startsWith("?next=")?e.search.split("?next=")[1]:null;function S({i18n:e,location:n}){var t;const o=(null===(t=n.state)||void 0===t?void 0:t.next)||A(n);if(o){const n=o.indexOf("?"),t=(0,a.mB)(o.substring(n));if(t.url&&t.media)return{showPLPBanner:!0,pinForBanner:{image:{url:(0,a.Jx)(t.media),height:1,width:1},pinDescription:t.description,bannerCopy:e._('Save this idea and discover more inspiration like it.', 'page banner with pin image that was signed up from', 'page banner with pin image that was signed up from')}}}return{showPLPBanner:!1,pinForBanner:null}}function T({i18n:e,location:n}){return S({i18n:e,location:n}).showPLPBanner?S({i18n:e,location:n}):N({i18n:e,location:n}).showPLPBanner?N({i18n:e,location:n}):{showPLPBanner:!1,pinForBanner:null}}const I=e=>e.startsWith("enabled")&&Number(e.substring(8))||null},400660:(e,n,t)=>{function o(e){return Boolean(null==e?void 0:e.is_matured_new_user)}t.d(n,{IR:()=>i,V0:()=>o,Wn:()=>a,xT:()=>r});const r=e=>!!e&&2===e.login_state,a=e=>!(!e||!e.match(/\/static\/images\/user\/default_\d+\.png$/));function i(e){return!e||void 0===e.third_party_marketing_tracking_enabled||null===e.third_party_marketing_tracking_enabled||e.third_party_marketing_tracking_enabled}},332730:(e,n,t)=>{t.d(n,{Z:()=>i});var o=t(56641),r=t(954931),a=t(867820);const i=e=>{(0,r.Z)(e)||(e="/",(0,a.My)("url_reset")),(0,o.Z)(e,!1)}},995146:(e,n,t)=>{t.r(n),t.d(n,{exchangeTokenAndSetSession:()=>l,loginUser:()=>g,registerUser:()=>d,verifyLoggedInStatus:()=>u});var o=t(643913),r=t(6637),a=t(966113),i=t(584595),s=t(867820);const _=a.Z.settings.ACCOUNTS_PINTEREST_URL,c=(e,n,t,o)=>{const r=e=>{const n=new Error(e.statusText);throw n.response=e,!n.api_error_code&&n.response&&(n.api_error_code=n.response.code,n.message=n.response.message),n},a={credentials:"include",mode:"cors"};return"POST"===t&&(a.method="POST",a.body=n,a.headers={"Content-type":"application/x-www-form-urlencoded; charset=UTF-8","X-Pinterest-InstallId":o},o||(0,s.My)(`unauth.auth_handshake.cross_domain.no_unauth_id.${t}`)),fetch(e,a).then((e=>200===e.status||401===e.status||409===e.status?e:(r(e),{}))).then((e=>e.json())).then((e=>"success"===e.status?Promise.resolve(e):e.code===i.Zn?(e.api_error_code=e.code,Promise.reject(e)):(r(e),{}))).catch((e=>{throw e}))},l=(e,n=!1)=>r.ZP.create("HandshakeSessionResource",{token:e,isRegistration:n}).callCreate(),u=e=>{c(`${_}/v3/handshake/verify/`,"","GET",e).then((e=>{if(e&&e.data){const n=e.data;l(n).then((e=>{window.location.reload()}),(e=>{}))}}),(e=>{}))},d=(e,{facebookToken:n,inviteCode:t,locale:r,referrer:i,unauthId:s})=>{const _=(e.business_name?"partner/handshake":(e.gplus_code||e.gplus_id_token)&&"gplus/handshake")||e.facebook_id&&"facebook/handshake"||"email/handshake",l={};if(l.email=e.email||"",l.username=e.username||"",l.password=e.password||"",l.first_name=e.first_name||"",l.last_name=e.last_name||"",l.country=e.country||"",l.locale=r,l.referrer=i,e.age){const n=new Date;n.setFullYear(n.getFullYear()-e.age);const t=parseInt(n/1e3,10);l.birthday=t.toString()}if(e.custom_gender&&(l.custom_gender=e.custom_gender),e.gender&&(l.gender=e.gender),e.business_name&&(l.account_type=e.account_type,l.business_name=e.business_name,l.first_name=e.business_name),t&&(l.invite_code=t),e.facebook_id){const t=n||e.facebook_token||"";l.facebook_id=e.facebook_id,l.facebook_token=t,l.social_username=e.social_username||""}else(e.gplus_code||e.gplus_id_token)&&(l.password=e.password||"",l.one_time_code=e.gplus_code,l.id_token=e.gplus_id_token,l.redirect_uri=e.gplus_redirect_uri);return e.recaptchaV3Token&&(l.recaptcha_v3_token=e.recaptchaV3Token),c(`${a.Z.settings.ACCOUNTS_PINTEREST_URL}/v3/register/${_}/`,(0,o.Z)(l),"POST",s)},g=(e,{facebookToken:n,recaptchaV3Token:t,referrer:r,unauthId:i})=>{const s=(e.mfa_token?"mfa/handshake":e.gplus_id_token&&"gplus/handshake")||e.facebook_id&&"facebook/handshake"||"handshake",_={};if(e.username_or_email&&(_.username_or_email=e.username_or_email.trim(),_.password=e.password,_.referrer=r),e.facebook_id){const t=n||e.facebook_token||"";_.facebook_id=e.facebook_id,_.facebook_token=t,_.facebook_autologin=e.facebook_autologin||!1}return e.gplus_id_token&&(_.gplus_id_token=e.gplus_id_token,_.gplus_access_token=e.gplus_access_token,_.gplus_expires_at=e.gplus_expires_at,_.gplus_autologin=e.gplus_autologin||!1),e.mfa_token&&(_.mfa_token=e.mfa_token),t&&(_.token=t),c(`${a.Z.settings.ACCOUNTS_PINTEREST_URL}/v3/login/${s}/`,(0,o.Z)(_),"POST",i)}},376432:(e,n,t)=>{t.d(n,{Z:()=>o});const o=e=>{const n=e.api_error_code||e.apiErrorCode;return n?{...e,api_error_code:n,apiErrorCode:n}:e}},589486:(e,n,t)=>{t.d(n,{C:()=>S,Z:()=>T});var o=t(231486),r=t(376432),a=t(6637),i=t(966113),s=t(743413),_=t(584595),c=t(290148),l=t(81759),u=t(817656),d=t(532975),g=t(487116),p=t(862624),h=t(330102),f=t(297507),m=t(3223),w=t(995146),E=t(867820),k=t(226198);const O=function(e,n,t="",o="",r="",a=""){let i="referrer_unknown";try{const e=document.referrer;i=e?e.indexOf("/t.co/")>-1?"twitter":e.indexOf("google.")>-1?"google":e.indexOf("bing.")>-1?"bing":e.indexOf("facebook.")>-1?"facebook":"other":"direct"}catch(p){}const _=(0,c.eD)(e),l=n===Object(n)?n.container:"container_unknown";(0,E.My)("login.referrer."+i+"."+_),(0,E.My)("login.container."+l+"."+_),(0,E.My)("login.type."+_);const u=(0,c.eD)(e)||"method_unknown",d=n.page||"page_unknown";e.gplus_autologin?((0,E.My)("web_autologin_google"),(0,E.hL)("new_web_autologin_google",{page:d,referrer:i,container:l})):e.facebook_autologin?((0,E.My)("web_autologin_facebook"),(0,E.hL)("new_web_autologin_facebook",{page:d,referrer:i,container:l})):((0,E.My)(`web_login.${u}.success.${d}.${l}.${i}.tier1`),(0,E.hL)(`new_web_login.${u}.success`,{page:d,referrer:i,container:l})),(0,m.c_)({country:t,countryFromHostName:o,countryFromIp:r})&&(0,f.yP)({id:s.bJ,eventCategory:"Logins",eventName:"Desktop"}),(0,m.$r)({country:t,countryFromHostName:o,countryFromIp:r,regionFromIp:a})&&(0,f.jw)({id:"flashtalking-d-login",eventCategory:"Logins",eventName:"Desktop"}),(0,m.NR)(t,a)&&(0,f.EN)({pixelId:h.Rj,eventCategory:"Logins",eventName:"Desktop"}),(0,m.Fc)({country:t,countryFromHostName:o,countryFromIp:r})&&(0,f.Be)({pixelId:h.HO,eventCategory:"Logins",eventName:"Desktop"});const g=e.facebook_autologin||e.gplus_autologin||e.autologin?"autologin":"login";(0,E.De)({action:g,event:"success",type:_})},R=(e,n)=>{(0,E.My)(`web_cross_domain_login.${e}.${(0,c.eD)(n)}`)},N=(e,n,t="other",o=!1)=>{if(e){const r=e.http_status===u.Ej?u.Ej:e.api_error_code;let a=r;_.qF.has(r)&&(a=_.qF.get(r));const{container:i}=n;o?(0,E.My)(`unauth_web_client_cctld_login_api_error.${String(a)}.${i||"unknow_container"}.${t}`):(0,E.My)(`unauth_web_client_login_api_error.${String(a)}.${i||"unknow_container"}.${t}`),(0,E.De)({action:"login",event:"fail",type:t})}},A=function(e,n,t){"autologin"===(e.facebook_autologin||e.gplus_autologin||e.autologin?"autologin":"login")&&(0,E.dy)({event:n,provider:t})},S=()=>{const e=(0,p.Y)();return()=>{const{anyEnabled:n}=e.checkExperiment("web_normalize_login_api_error_code");return e.flush(),n}},T=function({creds:e,loginContext:n,loggingData:t={},isAccountSwitch:s=!1,recaptchaV2Token:_,recaptchaV3Token:u,shouldNormalizeLoginApiErrorCode:p}){if(function(e){return!e.mfa_resend&&!!e.username_or_email}(e)){const o=i.Z.settings.CORS_HANDSHAKE_DOMAINS;if(n&&-1!==o.indexOf(n.origin))return function({creds:e,recaptchaV3Token:n,loggingData:t,loginContext:o,shouldNormalizeLoginApiErrorCode:a}){R("attempt",e);const{referrer:i,facebookToken:s,unauthId:_}=o;return(0,w.loginUser)(e,{recaptchaV3Token:n,referrer:i,facebookToken:s,unauthId:_}).then((n=>{if(n&&n.data){R("success_with_token",e);const o=n.data;return(0,w.exchangeTokenAndSetSession)(o).then((n=>(R("success_token_exchanged",e),O(e,t),Promise.resolve())),(n=>{throw R("success_token_not_exchanged",e),n}))}throw R("success_without_token",e),new Error}),(n=>{throw a()&&(n=(0,r.Z)(n)),R("failure",e),N(n,t,(0,c.eD)(e),!0),n}))}({creds:e,recaptchaV3Token:u,loggingData:t,loginContext:n,shouldNormalizeLoginApiErrorCode:p})}const h=e.google_open_id_token?"google":"facebook";A(e,"login_api_call_start",h);const f=(0,l.t_)(),m={...e,get_user:e.get_user||e.switch_account&&s,app_type_from_client:7===n.appType?7:5,visited_pages_before_login:f||null,recaptchaV2Token:_,recaptchaV3Token:u};return a.ZP.create("UserSessionResource",m).callCreate({showError:!1,async:!0}).then((n=>{const{client_context:r}=n||{},{country:a,country_from_hostname:i,country_from_ip:s,region_from_ip:_}=r||{};return O(e,t,a,i,s,_),A(e,"login_api_call_success",h),(0,d.B)(!1),o.zN(k.e7.name),o.zN(k.x3.name),(0,g.D)("login").then((()=>n))}),(n=>(p()&&(n=(0,r.Z)(n)),N(n,t,(0,c.eD)(e)),A(e,"login_api_call_failure",h),Promise.reject(n))))}},532975:(e,n,t)=>{t.d(n,{B:()=>a,a:()=>r});var o=t(704177);const r=()=>o.ZP.localStorage.getItem("uoiou")||!1,a=e=>{o.ZP.localStorage.setItem("uoiou",!!e)}},283943:(e,n,t)=>{t.d(n,{aU:()=>s,hq:()=>i,o_:()=>r});var o=t(425288);const{Provider:r,useHook:a}=(0,o.Z)("AuthenticationContext");function i(){return a().loginContext}function s(){return a().logout}},584595:(e,n,t)=>{t.d(n,{$j:()=>b,Cx:()=>U,D4:()=>I,E6:()=>A,H9:()=>v,Jt:()=>C,Jw:()=>a,NF:()=>s,OW:()=>c,Pv:()=>y,RL:()=>k,ZP:()=>M,Zn:()=>R,_K:()=>g,aG:()=>d,an:()=>S,at:()=>D,bd:()=>_,cZ:()=>l,dO:()=>u,hU:()=>h,iK:()=>w,iZ:()=>P,lg:()=>p,nY:()=>m,nf:()=>E,oP:()=>f,pH:()=>o,qF:()=>Z,rM:()=>L,rm:()=>T,tL:()=>i,tz:()=>r,xN:()=>N,yV:()=>O});const o=101,r=93,a=117,i=116,s=111,_=9,c=8,l=16,u=12,d=3,g=18,p=105,h=79,f=78,m=77,w=76,E=1402,k=85,O=88,R=1201,N=30,A=84,S=83,T=2901,I=2904,L=2905,P=95,b=19,y=113,D=91,C=2501,v=3050,U=[c,_],Z=new Map([[1,"INVALID_PARAMETERS"],[100,"INVALID_NETWORK_ACCESS_TOKEN"],[p,"FACEBOOK_ACCOUNT_NOT_LINKED"],[u,"API_SERVER_ERROR"],[1202,"LOGIN_MFA_TOKEN_INVALID"],[1203,"MFA_CONNECTION_ERROR"],[13,"API_DOWN"],[181,"GPLUS_CONNECTION_ERROR"],[14,"API_SERVER_SPAM_CONTENT"],[l,"API_REQUEST_TIMEOUT"],[50,"API_ERROR_PIN_NOT_FOUND"],[m,"INVALID_PASSWORD_FB_USER"],[f,"INVALID_PASSWORD_ERROR_CODE"],[h,"INVALID_EMAIL_ERROR_CODE"],[80,"INVALID_EMAIL_OR_PASSWORD"],[82,"LOGIN_DEACTIVATED_USER"],[S,"LOGIN_POLICY_VIOLATION_USER"],[k,"AUTO_PASSWORD_RESET_ERROR_CODE"],[86,"LOGIN_PANICKED_USER"],[87,"LOGIN_SOFT_BANNED_USER"],[r,"API_ERROR_UNDERAGE_REGISTER_ATTEMPT"],[i,"API_ERROR_OVERAGE_REGISTER_ATTEMPT"],[99,"LOGIN_PASSWORD_NOT_CREATED"],[c,"API_LIMIT_EXCEEDED_ERROR"],[_,"API_EVENT_BLOCKED_ERROR"],[b,"USER_IN_SAFE_MODE"],[A,"LOGIN_VOLUNTARILY_DEACTIVATED_USER"],[k,"LOGIN_BAD_PASSWORD_ASK_RESET"],[R,"LOGIN_MFA_REQUIRED"],[N,"LOGIN_USER_NOT_FOUND"],[O,"LOGIN_HARD_BANNED_USER"],[429,"RESPONSE_CODE_TOO_MANY_REQUESTS"],[T,"SAR_DOWNLOAD_LIMIT"],[I,"SAR_EMAIL_UNVERIFIED"],[L,"SAR_EMAIL_MISSING"]]),M=[c,_,b,S,k,O]},290148:(e,n,t)=>{t.d(n,{Ny:()=>g,ZP:()=>h,eD:()=>m,lp:()=>f});var o=t(231486),r=t(794230),a=t(704115),i=t(332730),s=t(6637),_=t(704177),c=t(966113),l=t(226198),u=t(45169),d=t(867820);const g=Object.freeze({SOFT_BANNED:0,RATE_LIMITED:1,LOGIN_ASSISTANCE:2,PASSWORD_RESET_SENT:3,PREVENT_FACEBOOK_REGISTER:4,PREVENT_GOOGLE_REGISTER:5,SUSPENDED:6});class p{static defaultLoginRedirectUrl(){return window.location.pathname===c.Z.settings.PASSWORD_RESET_URL||window.location.pathname===c.Z.settings.LOGIN_URL||window.location.pathname.startsWith(c.Z.settings.ADD_SECONDARY_ACCOUNT_PAGE)?"/":window.location.pathname+window.location.search}static defaultSocialLoginRedirectUrl(){return window.location.pathname.startsWith(c.Z.settings.ADD_SECONDARY_ACCOUNT_PAGE)?"/":window.location.pathname}static isExceedRecaptchaLocalLimit(){const e=_.ZP.localStorage.getItem("urh");if(e&&e.indexOf("|")>-1){const n=e.split("|");return 3===n.length&&(new Date).getTime()/1e3-parseInt(n[0],10)<=3600}return!1}static updateRecaptchaTimeStamp(){const e=_.ZP.localStorage.getItem("urh");let n=[];e&&(n=e.split("|"),3===n.length&&n.shift());const t=((new Date).getTime()/1e3).toString();n.push(t);const o=n.join("|");_.ZP.localStorage.setItem("urh",o)}static isFullyLoggedIn(e,n){return e&&1===n}static handleRedirect(e){if(!e){e="/";const n=(0,a.Z)();if(n){const t=n.next;t&&(e=t,delete n.next),e=(0,r.Z)(e,n)}}(0,i.Z)(e)}static handleRedirectWithFallbackWindowLocation(){this.handleRedirect(this.defaultLoginRedirectUrl())}static handleSignupRedirect(e,n){_.ZP.localStorage.setItem("signupTime",Date.now()),!n&&e&&"/"!==e?p.handleRedirect(e):p.handleRedirect("/")}static storeLoginCredentialsToBrowser(e){if(navigator.credentials&&e.username_or_email)try{const n=new window.PasswordCredential({id:e.username_or_email,password:e.password});navigator.credentials.store(n).then((()=>{(0,d.My)("navigatorCredentials.store.success")}))}catch(n){(0,d.My)("navigatorCredentials.store.error")}}static retrieveLoginCredentialsFromBrowser(){const e=window.navigator.credentials;if(!e)return new Promise(((e,n)=>{n()}));return e.get({password:!0,mediation:"silent"})}static attemptLoginWithBrowserCredentials(e,n,t){if(!e)return new Promise(((e,n)=>{n("No credentials")}));let o,r;e.password?(r="include",o=new FormData,o.append("username",e.id),o.append("password",e.password)):r=e;return fetch("/resource/UserSessionResource/create/",{method:"POST",body:o,credentials:r,headers:{Accept:"application/json, text/javascript, */*","X-CSRFToken":n||"","X-Pinterest-AppState":t,"X-Requested-With":"XMLHttpRequest"}}).then((e=>{if(200!==e.status){const n=new Error(e.statusText);throw n.response=e,n}return(0,d.My)("navigatorCredentials.login.success"),e.json()})).catch((e=>((0,d.My)("navigatorCredentials.login.failure"),Promise.reject(e))))}static fetchRecentlyLoggedOutUser(e){if(e)return Promise.reject();const n=s.ZP.create("UnauthUserDataResource");return new Promise(((e,t)=>{n.callGet().then((n=>{const r=n.resource_response.data,a=!!o.U2(l.x3);return r?(r.connected_to_facebook||r.connected_to_google||r.has_password||(0,d.My)("unauth.personalized_login.no_login_methods_found"),(0,d.My)("unauth.personalized_login.fetch_user_info.info.user_info_found.logged_out_cookie_"+(a?"true":"false")),e(r)):((0,d.My)("unauth.personalized_login.fetch_user_info.info.no_user_info.logged_out_cookie_"+(a?"true":"false")),t({}))})).catch((e=>{if(e.message){const n=e.message.replace(/\s/g,"_").toLowerCase();(0,d.My)(`unauth.personalized_login.fetch_user_info.error.${n}`)}else(0,d.My)("unauth.personalized_login.fetch_user_info.error.unknown");return t(e)}))}))}static handleLoginMfa(e,n,t){(0,d.My)("multi_step_login"),p.storeLoginCredentialsToBrowser(e),t?t(e,n):(0,d.My)("unauth.login.error.CLIENT_ERROR.null_mfa_handler")}}const h=p;function f(e){return e.facebook_id?u.sr.FACEBOOK:e.google_open_id_token?u.sr.GOOGLE_ONE_TAP:e.gplus_id_token?u.sr.GOOGLE:e.line_id_token?u.sr.LINE:e.username_or_email?u.sr.EMAIL:u.sr.OTHER}function m(e){return e.mfa_token?"mfa_token":e.mfa_resend?"mfa_resend":f(e)}},45169:(e,n,t)=>{t.d(n,{E_:()=>c,NN:()=>s,du:()=>_,sR:()=>i,sr:()=>a});var o=t(966113),r=t(693099);const a={FACEBOOK:"facebook",GOOGLE_ONE_TAP:"google_one_tap",GOOGLE:"google",LINE:"line",EMAIL:"email",OTHER:"other"},i=e=>e.facebook_id?a.FACEBOOK:e.google_open_id_token?a.GOOGLE_ONE_TAP:e.gplus_code||e.gplus_id_token?a.GOOGLE:e.line_id_token?a.LINE:e.email?a.EMAIL:a.OTHER,s=(e="")=>e in o.Z.settings.MINIMUM_AGE_BY_EU_COUNTRY,_=e=>r.rT.includes(e)||r.ZR.has(e)||s(e),c={GOOGLE:"g",FACEBOOK:"fb",PINTEREST:"p",APPLE:"apl",LINE:"ln",UNKNOWN:"unk"}},817656:(e,n,t)=>{t.d(n,{AB:()=>o,Ej:()=>r,Sf:()=>a});const o=412,r=429,a=500},487116:(e,n,t)=>{t.d(n,{D:()=>i,N:()=>a});var o=t(172071);const r=.1;async function a(){const e=navigator.serviceWorker;if(o.Z.increment("web_service_worker.update",r),e&&e.getRegistration){const t=await e.getRegistration();if(!t)return o.Z.increment("web_service_worker.update.registration.not_exist",r),await async function(){const e=navigator.serviceWorker;if(o.Z.increment("web_service_worker.install",r),e&&e.register)try{const n=await e.register("/sw.js");return o.Z.increment("web_service_worker.install.success",r),n}catch(n){throw o.Z.increment("web_service_worker.install.error",r),n}}();o.Z.increment("web_service_worker.update.registration.exist",r);try{return await t.update(),o.Z.increment("web_service_worker.update.success",r),t}catch(n){throw o.Z.increment("web_service_worker.update.fail",r),n}}}async function i(e){const n=navigator.serviceWorker;if(o.Z.increment("web_service_worker.unregister",r,{source:e||"unknown"}),n&&n.getRegistration)try{const t=await n.getRegistration();t?(o.Z.increment("web_service_worker.unregister.registration.exist",r,{source:e||"unknown"}),await t.unregister(),o.Z.increment("web_service_worker.unregister.success",r,{source:e||"unknown"}),async function(e){const n=navigator.serviceWorker;if(o.Z.increment("web_service_worker.clear_app_shell",r,{source:e||"unknown"}),n&&window.caches){const n=(await window.caches.keys()).find((e=>e.startsWith("workbox-precaching")));n?(o.Z.increment("web_service_worker.clear_app_shell.precache.exist",r,{source:e||"unknown"}),(await window.caches.open(n)).delete("/sw-shell.html"),o.Z.increment("web_service_worker.clear_app_shell.delete",r,{source:e||"unknown"})):o.Z.increment("web_service_worker.clear_app_shell.precache.not_exist",r,{source:e})}}(e)):o.Z.increment("web_service_worker.unregister.registration.not_exist",r,{source:e||"unknown"})}catch(t){o.Z.increment("web_service_worker.unregister.fail",r,{source:e||"unknown"})}}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/5392-700edc5772e48007.mjs.map