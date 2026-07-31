const CMS_URL='https://vslbpjbvydxleufpmkhp.supabase.co',CMS_KEY='sb_publishable_jpPPDLwsvPY5mJjGWZYRtA_uJl4du2L';
const cms=window.supabase?.createClient(CMS_URL,CMS_KEY);
const put=(selector,value,index=0)=>{const nodes=document.querySelectorAll(selector);if(nodes[index]&&value)nodes[index].innerHTML=value};
const photo=(selector,url,index=0)=>{const nodes=document.querySelectorAll(selector);if(nodes[index]&&url)nodes[index].style.backgroundImage=`url("${url}")`};
(async()=>{if(!cms)return;const{data}=await cms.from('site_content').select('content').eq('id','site').maybeSingle();const c=data?.content;if(!c)return;
 put('.hero-copy h1',c.hero_wind_title,0);put('.hero-copy h1',c.hero_kite_title,1);put('.intro h2',c.intro_title);put('.lead',c.intro_lead);put('.contact h2',c.contact_title);put('.contact-details a',c.phone,0);put('.contact-details a',c.instagram,1);put('.contact-details span',c.location);
 ['wind','kite','wing'].forEach((name,i)=>{put('.sport-card h2',c[`${name}_title`],i);put('.sport-card p',c[`${name}_caption`],i);photo(`.${name}-card`,c[`${name}_image`])});
 photo('.wind',c.hero_wind_image);photo('.kite',c.hero_kite_image);for(let i=1;i<=8;i++)photo(`.p${i}`,c[`gallery_${i}`]);
})().catch(console.warn);
