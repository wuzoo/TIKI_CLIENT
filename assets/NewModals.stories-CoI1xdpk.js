import{j as s,a as t,F as l}from"./emotion-react-jsx-runtime.browser.esm-DxxXU6t7.js";import{M as d,u as p}from"./ModalFunnel-DeyrSO2P.js";import"./iframe-M3wT1-O1.js";import"./jsx-runtime-pOvMEfBU.js";import"./index-C-9HlKj_.js";import"./_commonjsHelpers-75APqtop.js";import"./index-C2_Q5K-I.js";import"./index-C0yjLSdj.js";import"./emotion-react.browser.esm-MNZYGBkE.js";import"./index-BLZylyQv.js";import"./QueryClientProvider-uwo75bEL.js";import"./path-DbPB1hmj.js";import"./index-BDpA_W-D.js";import"./ellipsis-5AH3kgmU.js";import"./file-BOrh0QqM.js";import"./date-ChrwPRKV.js";import"./useOutsideClick-BLxpLh10.js";import"./useOverlay-9eRnE_wa.js";import"../sb-preview/runtime.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},n=new e.Error().stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="b1d31acc-ba7c-4ad7-944e-41aaa6c83d21",e._sentryDebugIdIdentifier="sentry-dbid-b1d31acc-ba7c-4ad7-944e-41aaa6c83d21")}catch{}})();const j={title:"Shared/Modal/ModalsTest",component:d,parameters:{layout:"centered"},args:{isOpen:!1},argTypes:{children:{control:!1}}},o={render:()=>{const e=p();return s(l,{children:[t("button",{onClick:()=>e("invite"),children:"Open Invite Modal"}),t("button",{onClick:()=>e("member-tag"),children:"Open MemberTag Modal"}),t("button",{onClick:()=>e("activity-tag"),children:"Open ActivityTag Modal"}),t(d,{})]})}};var a,r,i;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => {
    const openModal = useOpenModal();
    return <>
        <button onClick={() => openModal('invite')}>Open Invite Modal</button>
        <button onClick={() => openModal('member-tag')}>Open MemberTag Modal</button>
        <button onClick={() => openModal('activity-tag')}>Open ActivityTag Modal</button>
        <ModalFunnel />
      </>;
  }
}`,...(i=(r=o.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};const A=["ModalsTest"];export{o as ModalsTest,A as __namedExportsOrder,j as default};
