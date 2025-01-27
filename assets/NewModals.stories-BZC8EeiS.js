import{j as s,a as t,F as l}from"./emotion-react-jsx-runtime.browser.esm-COTy3jIp.js";import{M as i,u as p}from"./ModalFunnel-BDR1fVdK.js";import"./iframe-BSUbdHd2.js";import"./jsx-runtime-BYKdNDqh.js";import"./index-DYHjAUnc.js";import"./_commonjsHelpers-BxiZMkLe.js";import"./index-B4jfUklg.js";import"./index-D2dY7Xnv.js";import"./index-Dk2GMixp.js";import"./useOutsideClick-CYtG5XFr.js";import"./useOverlay-D-xJc4XV.js";import"./QueryClientProvider-DA6I3aoW.js";import"./path-DzdhK_vT.js";import"./emotion-react.browser.esm-B7Js_1Gf.js";import"./ellipsis-BGGWVIfe.js";import"./index-DSHXw-aX.js";import"./date-CTRr2A2U.js";import"./file-BXbdREfc.js";import"../sb-preview/runtime.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new e.Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="e4ddcf15-3264-4d69-8eec-b19735c62ddd",e._sentryDebugIdIdentifier="sentry-dbid-e4ddcf15-3264-4d69-8eec-b19735c62ddd")}catch{}})();const j={title:"Shared/Modal/ModalsTest",component:i,parameters:{layout:"centered"},args:{isOpen:!1},argTypes:{children:{control:!1}}},o={render:()=>{const e=p();return s(l,{children:[t("button",{onClick:()=>e("invite"),children:"Open Invite Modal"}),t("button",{onClick:()=>e("member-tag"),children:"Open MemberTag Modal"}),t("button",{onClick:()=>e("activity-tag"),children:"Open ActivityTag Modal"}),t(i,{})]})}};var r,a,d;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: () => {
    const openModal = useOpenModal();
    return <>
        <button onClick={() => openModal('invite')}>Open Invite Modal</button>
        <button onClick={() => openModal('member-tag')}>Open MemberTag Modal</button>
        <button onClick={() => openModal('activity-tag')}>Open ActivityTag Modal</button>
        <ModalFunnel />
      </>;
  }
}`,...(d=(a=o.parameters)==null?void 0:a.docs)==null?void 0:d.source}}};const A=["ModalsTest"];export{o as ModalsTest,A as __namedExportsOrder,j as default};
