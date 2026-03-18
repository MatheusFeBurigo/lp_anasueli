(function(){
  var o=new IntersectionObserver(function(e){
    e.forEach(function(e){
      if(e.isIntersecting){
        var d=parseInt(e.target.getAttribute('data-delay')||'0');
        setTimeout(function(){
          e.target.classList.add('v')
        },d);
        o.unobserve(e.target)
      }
    })
  },{threshold:.05,rootMargin:'0px 0px -50px 0px'});
  
  document.querySelectorAll('.rv').forEach(function(el){
    o.observe(el)
  });

  var p=document.getElementById('pl');
  if(p){
    var po=new IntersectionObserver(function(e){
      e.forEach(function(e){
        if(e.isIntersecting){
          p.querySelectorAll('li').forEach(function(l,i){
            setTimeout(function(){
              l.classList.add('on')
            },i*90)
          });
          po.unobserve(e.target)
        }
      })
    },{threshold:.15});
    po.observe(p)
  }

  // Sticky Bar Logic
  var stickyBar = document.getElementById('sticky-bar');
  if(stickyBar) {
    window.addEventListener('scroll', function() {
      if(window.scrollY > 200) {
        stickyBar.classList.add('show');
      } else {
        stickyBar.classList.remove('show');
      }
    });
  }
})();

function tg(e){
  var a=e.classList.contains('on');
  document.querySelectorAll('.fq.on').forEach(function(f){
    f.classList.remove('on')
  });
  if(!a) e.classList.add('on');
}
