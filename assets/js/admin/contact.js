const moveEdit = idx => {
   console.log(idx)
   $(location).attr('href', '/admin/contact/edit/' + idx)
}

const deleteEdit = idx => {
   console.log(idx)
   $(location).attr('href', '/admin/contact/editDel/' + idx)
}


function updateEdit() {
   var infoData = new FormData($('#formEdit')[0])

   if (confirm('수정 하시겠습니까??') == true) {
      var pageUrl = '/admin/contact/editUpdate/'

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
            $(location).attr('href', '/admin/contact/')
         },
      })
   }
}