setInterval(function(){
  document.querySelector('.nav_prev').click();

  setTimeout(function(){
    Array.from(document.querySelectorAll('.hmb_list_items')).forEach(function(element) {
      if (typeof element.children[3].children[0]==='object' && typeof element.children[3].children[0].href==='string') {
          chrome.runtime.sendMessage({url: element.children[3].children[0].href.replace('gameResult', 'gameRecord')}, function(response) {});
      }
    });
  }, 1000);

  
}, 8000);




/*

Array.from(document.querySelectorAll('.depth4')).forEach(function(element) {
  console.log(element.children[0].children[0].getAttribute('href'));
});


Array.from(document.querySelectorAll('.hmb_list_items')).forEach(function(element) {
  console.log (typeof element.children[3].children[0]);
});



심판 성향 분석



prologue


서버 ? 클라이언트?
backend ? frontend?
ip와 도메인
그래서 php는 server? client?
javascript ?
html ?
database ?


- 야구
- 코딩
- 웹프로그래밍 기초
- 브이로그
- 리니지m
*/