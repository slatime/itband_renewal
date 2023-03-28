$(document).ready(function () {

    $(function () {

        $('#datepicker').datepicker();
        $("#datepicker").on("changeDate", function (event) {
            $("#my_hidden_input").val(
                $("#datepicker").datepicker('getFormattedDate')
            )
        });

        $('#datapicker2').datepicker();
        $('.input-group.date').datepicker({});
        $('.input-daterange').datepicker({});
    });

    $("#searchStartDate").attr('autocomplete','off');
    $("#searchEndDate").attr('autocomplete','off');


    function showmap2() {
        if (document.all.spot2.style.display == "none") {
            document.all.spot2.style.display = "block";
            return false;
        }
        if (document.all.spot2.style.display == "visible") {
            document.all.spot2.style.display = "block";
            return false;
        }
    }

    function closes() {
        spot2.style.display = "none";
    }
	// var $form = $( ".formNum" );
	// var $input = $form.find( "input" );
  //
	// $input.on( "keyup", function( event ) {
  //
	// 	var selection = window.getSelection().toString();
	// 	if ( selection !== '' ) {
	// 		return;
	// 	}
	// 	if ( $.inArray( event.keyCode, [38,40,37,39] ) !== -1 ) {
	// 		return;
	// 	}
	// 	var $this = $( this );
	// 	var input = $this.val();
	// 	var input = input.replace(/[\D\s\._\-]+/g, "");
	// 	input = input ? parseInt( input, 10 ) : 0;
	// 	$this.val( function() {
	// 		return ( input === 0 ) ? "" : input.toLocaleString( "en-US" );
	// 	});
  //
	// });


  $(".overlay").hide();
  $(".overlay").click(function(){
    $(".overlay").hide();
    $(".popupCon").removeClass("active");
  })

  $('.managerSel option').hide();


  $('#smsSendBtn').click(function(){

    var postData = $("#smsSendForm").serialize();
    var pageUrl  = "/manager/sendMessage/sms";

    $.ajax({
          type:"POST",
          url:pageUrl,
          data:postData,
          success:function(data){
            var obj = jQuery.parseJSON(data) ;
            alert(obj.message);
          }
      });
  });

  $('#pushSendBtn').click(function(){

    var postData = $("#pushSendForm").serialize();
    var pageUrl  = "/manager/sendMessage/push";

    $.ajax({
          type:"POST",
          url:pageUrl,
          data:postData,
          success:function(data){
            alert("푸시 전송 완료.");
          }
      });
  });

});


function setDate(obj) {
	var rname = $(obj).attr("data-value");
	$("#searchEndDate").val(today())
		if( rname == "today") {
			$("#searchStartDate").val(today())
		} else if ( rname == "threeDay") {
			$("#searchStartDate").val(threeDay())
		} else if ( rname == "week") {
			$("#searchStartDate").val(lastWeek())
		} else if ( rname == "month") {
			$("#searchStartDate").val(lastMonth())
		} else  {
			$("#searchStartDate").val(threeMonth())
		}
}

function setInputDate(obj) {
	var rname = $(obj).attr("data-value");
	$("#searchEndPayDate").val(today())
		if( rname == "today") {
			$("#searchStartPayDate").val(today())
		} else if ( rname == "threeDay") {
			$("#searchStartPayDate").val(threeDay())
		} else if ( rname == "week") {
			$("#searchStartPayDate").val(lastWeek())
		} else if ( rname == "month") {
			$("#searchStartPayDate").val(lastMonth())
		} else  {
			$("#searchStartPayDate").val(threeMonth())
		}
}

function getDateStr(myDate){
	return (myDate.getFullYear() + '-' + (myDate.getMonth() + 1) + '-' + myDate.getDate())
}


function today() {
	var d = new Date()
	return getDateStr(d)
}
function threeDay(){
	var d = new Date()
	var dayOfMonth = d.getDate()
	d.setDate(dayOfMonth - 3)
	return getDateStr(d)
}

function lastWeek() {
	var d = new Date()
	var dayOfMonth = d.getDate()
	d.setDate(dayOfMonth - 7)
	return getDateStr(d)
}

function lastMonth() {
	var d = new Date()
	var monthOfYear = d.getMonth()
	d.setMonth(monthOfYear - 1)
	return getDateStr(d)
}
function threeMonth() {
	var d = new Date()
	var monthOfYear = d.getMonth()
	d.setMonth(monthOfYear - 3)
	return getDateStr(d)
}

function popImageView(image){
  var html = "<img src='"+image+"' alt=''>" ;
  var target = $("#image");
  if(target.hasClass("active") == true ) {
    $(".overlay").hide();
    target.removeClass("active");
  } else {
    $(".overlay").show();
    target.addClass("active");
    $("#imageSrc").empty()
    $("#imageSrc").append(html);
  }
}

function popup(obj){
  $(".reciveList").empty();
  var id = $("#gridSubArea > div > div").attr('id').replace('gbox_','');
  var checkData = $("#"+id).jqGrid('getGridParam', "selarrrow" );
  var userInfo     = [];
  var userIdList   = [];
  for(var i=0;i < checkData.length;i++){
      var userId = $("#"+id).jqGrid('getCell',checkData[i],'USR_ID');
      var userName = $("#"+id).jqGrid('getCell',checkData[i],'USR_NM');
      userInfo.push(userName + "("+userId+")");
      userIdList.push(userId);
  }
  for (var pair of userInfo.entries()) {
    $(".reciveList").append(pair[1]+ ", ");
  }

  var idList = "";
  for (var pair of userIdList.entries()) {
    idList = idList + pair[1]+ ",";
  }

  $(".reciveIdList").val(idList);

  var value = $(obj).attr('id');
  var target = $("#"+value+"");
  if(target.hasClass("active") == true ) {
    $(".overlay").hide();
    target.removeClass("active");
  } else {
    $(".overlay").show();
    target.addClass("active");
  }
}

function centerChange(){
  var centerValue = $(".ascenterSel option:selected").val();
  var managerValue = $(".managerSel option").data('center');
  $('.managerSel option').hide();
  $('.managerSel option').filter(function(index){
    subValue = $(this).data('center')
    return (centerValue ==  subValue)
  }).show();
  $('.managerSel').selectpicker('refresh');
}

function closesPopup(){
  $(".overlay").hide();
  $('.popupCon').removeClass("active");
}
