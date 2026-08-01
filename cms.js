const CMS_URL='https://vslbpjbvydxleufpmkhp.supabase.co',CMS_KEY='sb_publishable_jpPPDLwsvPY5mJjGWZYRtA_uJl4du2L';
const cms=window.supabase?.createClient(CMS_URL,CMS_KEY);
const put=(selector,value,index=0)=>{const nodes=document.querySelectorAll(selector);if(nodes[index]&&value)nodes[index].innerHTML=value};
const photo=(selector,url,index=0)=>{const nodes=document.querySelectorAll(selector);if(nodes[index]&&url)nodes[index].style.backgroundImage=`url("${url}")`};
const priceList=keys=>keys.forEach((key,index)=>put('.package li em',content[key],index));
let content={};
(async()=>{if(!cms)return;const{data}=await cms.from('site_content').select('content').eq('id','site').maybeSingle();content=data?.content||{};if(!Object.keys(content).length)return;
 const page=location.pathname.toLowerCase();
 if(page.endsWith('windsurf.html'))priceList(['wind_price_1','wind_price_2','wind_price_3','wind_price_4','wind_price_5','wind_price_6','wind_price_7','wind_price_8','wind_price_9','wind_price_10','wind_price_11','wind_price_12','wind_price_13']);
 else if(page.endsWith('kitesurf.html'))priceList(['kite_price_1','kite_price_2','kite_price_3','kite_price_4','kite_price_5','kite_price_6','kite_price_7']);
 else if(page.endsWith('wingfoil.html'))priceList(['wing_price_1','wing_price_2','wing_price_3']);
 else {put('.hero-copy h1',content.hero_wind_title,0);put('.hero-copy h1',content.hero_kite_title,1);put('.intro h2',content.intro_title);put('.lead',content.intro_lead);put('.contact h2',content.contact_title);put('.contact-details a',content.phone,0);put('.contact-details a',content.instagram,1);put('.contact-details span',content.location);['wind','kite','wing'].forEach((name,i)=>{put('.sport-card h2',content[`${name}_title`],i);put('.sport-card p',content[`${name}_caption`],i);photo(`.${name}-card`,content[`${name}_image`])});photo('.wind',content.hero_wind_image);photo('.kite',content.hero_kite_image);for(let i=1;i<=8;i++)photo(`.p${i}`,content[`gallery_${i}`])}
})().catch(console.warn);
