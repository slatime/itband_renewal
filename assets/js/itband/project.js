$(function () {
   console.log('ready')
})

// 프로젝트 검색
function searchProject() {
   var keyword = $('input[name=keyword]').val();
   
   $(location).attr('href', '/project/projectSearch/' + encodeURIComponent(keyword));
}

jQuery(document).ready(function() {
   // 카테고리검색
   $("#categorySearch").on("click", "li", function() {
      var category = $(this).text().replace("# ", "");
      // 카테고리가 Business면 초기화면
      if (category === 'Business') {
         $(location).attr('href', '/project/');
      } else {
         $(location).attr('href', '/project/categorySearch/' + encodeURIComponent(category));
      }
   });

   // 엔터 검색
   $('#keyword').on('keypress', function(e){ 
      if(e.keyCode == '13'){ 
          $('#searchBtn').click(); 
      } 
   });
});

