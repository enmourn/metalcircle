import{s as d,g as v,u as L,a as j,r as u,b as z,j as e,c as l,C as B,B as y,d as D,e as R,f as T,h as E,i as k}from"./index-8f956b38.js";const O=d.section`
  position: relative;
  padding: 10px 0;
  margin-bottom: 30px;
`,U=d.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
`,A=d.div`
  display: grid;
`,F=d.div`
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 5px 10px;
  span {
    font-family: "Roboto";
    font-size: 14px;
    color: #222;
  }
`,Y=d.div`
  display: flex;
  align-items: center;
  margin: 0 10px;
`,q=d.div`
  border-bottom: 1px solid #d9d9d9;
  flex-grow: 1;
  margin-right: 10px;
  display: flex;
  align-items: center;
  label {
    font-family: "Shadows Into Light";
    font-size: 24px;
    color: #d9d9d9;
    margin-right: 10px;
  }
  span {
    font-family: "Roboto";
    font-size: 14px;
    color: #222;
    margin-right: 30px;
  }
`,b=async n=>{const a={},p={},i={};for(const r in n){const m=await R(r);if(!m)throw new Error("no-product");a[r]=m;const o=r.split("-")[0];if(!p[o]){const g=await T(o);if(!g)throw new Response(null,{status:500,statusText:"non-existent seller"});p[o]=g}i[o]||(i[o]=0),i[o]+=n[r].count*a[r].price}return{products:a,sellers:p,prices:i}},H=async()=>{const n=await v();return await b(n.products)},J=()=>{const n=L(),a=j(),[p,i]=u.useState(a.products),[r,m]=u.useState(a.sellers),[o,g]=u.useState(a.prices),[h,f]=u.useState([]),x=z(t=>t.cart.products);u.useEffect(()=>{(async()=>{const s=await b(x);i(s.products),m(s.sellers),g(s.prices),f([])})()},[x]);const w=(t,s)=>{f([...h,s]),n(E(t))},C=(t,s)=>{f([...h,s]),n(k(t))};return e("main",{children:Object.entries(r).map(([t,s])=>l(O,{children:[e(B,{visible:h.includes(t)}),l(Y,{children:[l(q,{children:[e("label",{children:"Seller"}),e("span",{children:s.name}),e("label",{children:"Total Price"}),l("span",{children:[o[t]," ₽"]})]}),e(y,{style:{marginLeft:"auto"},children:"BUY"})]}),e(U,{children:Object.entries(p).map(([c,S])=>{var P;return c.split("-")[0]===t&&l(A,{children:[e(D,{id:c,product:S}),l(F,{children:[e(y,{size:"small",onClick:()=>w(c,t),children:"+"}),e("span",{children:((P=x[c])==null?void 0:P.count)||0}),e(y,{size:"small",onClick:()=>C(c,t),children:"−"})]})]},c)})})]},t))})};export{J as PageCart,H as PageCartLoader};
