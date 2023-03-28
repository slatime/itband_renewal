const moveEdit = idx => {
   console.log(idx)
   $(location).attr('href', '/admin/project/edit/' + idx)
}

const insertEdit = idx => {
   $(location).attr('href', '/admin/project/insertEdit/')
}

const deleteEdit = idx => {
   console.log(idx)
   $(location).attr('href', '/admin/project/editDel/' + idx)
}

// 파일첨부 삭제(썸네일)
function deleteThumbnail() {
   $('#viewThumbnail').hide();	
   $('#oldThumbnail').hide();	
   $('#inputThumbnail').show();	
}

// 파일첨부 삭제(프로젝트 이미지)
function deleteProjectImg() {
   $('#viewProjectImg').hide();	
   $('#oldProjectImg').hide();	
   $('#inputProjectImg').show();	
}

function updateEdit() {
   // var clntNm = $('input[name=clntNm]').val()
   // var projectNm = $('input[name=projectNm]').val()
   // var category = $('select[name=category]').val()
   // var hideAt = $('input[name=hideAt]:checked').val()
   // var description = $('input[name=description]').val()

   // var data = {
   //    idx: idx,
   //    clntNm: clntNm,
   //    projectNm: projectNm,
   //    category: category,
   //    hideAt: hideAt,
   //    description: description,
   // }
   
   //$('#oldThumbnailImg').val('');	
   var infoData = new FormData($('#formEdit')[0])
   if( $('input[name=clntNm]').val() == "" ) { $('input[name=clntNm]').focus(); alert("클라이언트를 입력해 주십시오."); return false; }
   if( $('input[name=projectNm]').val() == "" ) { $('input[name=projectNm]').focus(); alert("프로젝트명을 입력해 주십시오."); return false; }

   if (confirm('수정 하시겠습니까??') == true) {
      //var postData = data
      var pageUrl = '/admin/project/editUpdate/'

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
            $(location).attr('href', '/admin/project/')
         },
      })
   }
}

function insertProject() {
   // var clntNm = $('input[name=clntNm]').val()
   // var projectNm = $('input[name=projectNm]').val()
   // var category = $('select[name=category]').val()
   // var hideAt = $('input[name=hideAt]:checked').val()
   // var description = $('input[name=description]').val()

   // todo
   // 숨김여부 체크 validate

   // alert(clntNm + projectNm + category+ hideAt + description);

   // var data = {
   //    clntNm: clntNm,
   //    projectNm: projectNm,
   //    category: category,
   //    hideAt: hideAt,
   //    description: description,
   // }

   // serialize
   var infoData = new FormData($('#form1')[0])

   if( $('input[name=clntNm]').val() == "" ) { $('input[name=clntNm]').focus(); alert("클라이언트를 입력해 주십시오."); return false; }
   if( $('input[name=projectNm]').val() == "" ) { $('input[name=projectNm]').focus(); alert("프로젝트명을 입력해 주십시오."); return false; }

   if (confirm('등록 하시겠습니까??') == true) {
      // var postData = data
      var pageUrl = '/admin/project/projectInsert/'

      $.ajax({
         type: 'POST',
         url: pageUrl,
         data: infoData,
         async: false,
         cache: false,
         contentType: false,
         processData: false,
         success: function (data) {
            //console.log(data)
            $(location).attr('href', '/admin/project/')
         },
         error: function (xhr, ajaxSettings, thrownError) {
            alert('수정하는데 오류가 발생하였습니다.')
         },
      })
   }
}
