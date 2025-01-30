import{j as s,a as t,F as l}from"./emotion-react-jsx-runtime.browser.esm-CGuWlFcT.js";import{M as d,u as p}from"./ModalFunnel-f13BOlIX.js";import"./iframe-BwDjDdAf.js";import"./jsx-runtime-Br5qWHot.js";import"./index-Bvsr3ME-.js";import"./_commonjsHelpers-DRUgrBji.js";import"./index-BSzEEhxY.js";import"./index-DOY51W59.js";import"./index-p0PITYme.js";import"./QueryClientProvider-oCANGQbt.js";import"./api-kTOsTuIs.js";import"./path-BhZAcRCv.js";import"./emotion-react.browser.esm-D8f3GK3P.js";import"./ellipsis-DAO4jkvQ.js";import"./index-0CpYgrbF.js";import"./date-Cpyhd4Y6.js";import"./file-BG_nkLse.js";import"../sb-preview/runtime.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new e.Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="98bb0a84-faa4-437b-82c7-c250bec25604",e._sentryDebugIdIdentifier="sentry-dbid-98bb0a84-faa4-437b-82c7-c250bec25604")}catch{}})();const F={title:"Shared/Modal/ModalsTest",component:d,parameters:{layout:"centered"},args:{isOpen:!1},argTypes:{children:{control:!1}}},o={render:()=>{const e=p();return s(l,{children:[t("button",{onClick:()=>e("invite"),children:"Open Invite Modal"}),t("button",{onClick:()=>e("member-tag"),children:"Open MemberTag Modal"}),t("button",{onClick:()=>e("activity-tag"),children:"Open ActivityTag Modal"}),t(d,{})]})}};var r,a,i;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: () => {
    const openModal = useOpenModal();
    return <>
        <button onClick={() => openModal('invite')}>Open Invite Modal</button>
        <button onClick={() => openModal('member-tag')}>Open MemberTag Modal</button>
        <button onClick={() => openModal('activity-tag')}>Open ActivityTag Modal</button>
        <ModalFunnel />
      </>;
  }
}`,...(i=(a=o.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const j=["ModalsTest"];export{o as ModalsTest,j as __namedExportsOrder,F as default};
