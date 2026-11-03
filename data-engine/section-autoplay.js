/* Independent, visibility-aware players for the two method sections. */
(() => {
  'use strict';
  window.RAILMIND_SECTION_PLAYER = ({root,interval,onTick,onChange}) => {
    const reduce=window.matchMedia('(prefers-reduced-motion: reduce)');
    let running=!reduce.matches,visible=!('IntersectionObserver' in window),timer=null;
    function sync(){
      if(timer!==null){clearInterval(timer);timer=null;}
      if(running&&visible&&!document.hidden)timer=setInterval(onTick,interval);
      onChange();
    }
    if('IntersectionObserver' in window){
      new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;sync();},{threshold:0,rootMargin:'-60px 0px -60px 0px'}).observe(root);
    }
    document.addEventListener('visibilitychange',sync);
    reduce.addEventListener('change',()=>{if(reduce.matches)running=false;sync();});
    return {get running(){return running;},play(){running=true;sync();},pause(){running=false;sync();},refresh:sync};
  };
})();

