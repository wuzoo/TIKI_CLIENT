import{j as s,a as t,F as l}from"./emotion-react-jsx-runtime.browser.esm-B7TQW04G.js";import{M as i,u as p}from"./ModalFunnel-CEJDDHyS.js";import"./iframe-C_CMed18.js";import"./jsx-runtime-M-JEsg8e.js";import"./index-BkyhCtpK.js";import"./_commonjsHelpers-Bg1DutqV.js";import"./index-D9Gstpyf.js";import"./index-CyP73lGa.js";import"./index-BfBeqfpZ.js";import"./useOutsideClick-DjmKOWUU.js";import"./useOverlay-CGqmbOFQ.js";import"./QueryClientProvider-DEUig_gf.js";import"./path-C98Q7pEj.js";import"./emotion-react.browser.esm-BIy0ONme.js";import"./ellipsis-kl5yPu0q.js";import"./index-Co9lGz0S.js";import"./date-D1_cG4jI.js";import"./file-vdLJtFXf.js";import"../sb-preview/runtime.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new e.Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="e4ddcf15-3264-4d69-8eec-b19735c62ddd",e._sentryDebugIdIdentifier="sentry-dbid-e4ddcf15-3264-4d69-8eec-b19735c62ddd")}catch{}})();const j={title:"Shared/Modal/ModalsTest",component:i,parameters:{layout:"centered"},args:{isOpen:!1},argTypes:{children:{control:!1}}},o={render:()=>{const e=p();return s(l,{children:[t("button",{onClick:()=>e("invite"),children:"Open Invite Modal"}),t("button",{onClick:()=>e("member-tag"),children:"Open MemberTag Modal"}),t("button",{onClick:()=>e("activity-tag"),children:"Open ActivityTag Modal"}),t(i,{})]})}};var r,a,d;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
