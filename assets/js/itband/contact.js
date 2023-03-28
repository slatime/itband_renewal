$(function () {
   console.log('ready')
})

jQuery(document).ready(function() {
   // 문의 등록
   $("#sendMail").click(function(){
      var infoData = new FormData($('#formEdit')[0])

      // 이메일 정규식
      var regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

      if( $('input[name=coNm]').val() == "" ) { $('input[name=coNm]').focus(); alert("Company을 입력해 주십시오."); return false; }
      if( $('input[name=name]').val() == "" ) { $('input[name=name]').focus(); alert("Name을 입력해 주십시오."); return false; }
      if( $('input[name=telNo]').val() == "" ) { $('input[name=telNo]').focus(); alert("Contact을 입력해 주십시오."); return false; }
      if( $('input[name=email]').val() == "" ) { $('input[name=email]').focus(); alert("E-mail을 입력해 주십시오."); return false; }
      else if ( $('input[name=email]').val().match(regExp) == null){alert("올바른 이메일 형식이 아닙니다.");  return false;}
      if( $('#bdt').val() == "" ) { $('#bdt').focus(); alert("Inquiries을 입력해 주십시오."); return false; }
      if( !$('#ckBox').is(':checked')) { $('input[name=ckBox]').focus(); alert("개인 정보처리 방침에 동의해 주십시오."); return false; }
      
      if (confirm('문의를 보내시겠습니까?') == true) {
         var pageUrl = '/contact/contactInsert/';

         $.ajax({
            type: 'POST',
            url: pageUrl,
            data: infoData,
            async: false,
            cache: false,
            contentType: false,
            processData: false,
            success: function (data) {
               //console.log(data);
               $(location).attr('href', '/contact/')
            },
         })
      }
   });

   // $("#categorySearch").on("click", "li", function() {
   //    var category = $(this).text().replace("# ", "");
   //    // 카테고리가 Business면 초기화면
   //    if (category === 'Business') {
   //       $(location).attr('href', '/project/');
   //    } else {
   //       $(location).attr('href', '/project/categorySearch/' + encodeURIComponent(category));
   //    }
   // });
});