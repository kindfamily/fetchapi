(function () {
    const menu = document.querySelector('.menu');
    const menuItem = document.querySelector('.menu-item');

//$(document).on('click', '.like', function(){
//    var pk = $(this).attr('name');
//    $.ajax({ // .like 버튼을 클릭하면 <새로고침> 없이 ajax로 서버와 통신하겠다.
//      type: "POST", // 데이터를 전송하는 방법을 지정
//      url: "{% url 'post:post_like' %}", // 통신할 url을 지정
//      data: {'pk': pk, 'csrfmiddlewaretoken': '{{ csrf_token }}'}, // 서버로 데이터 전송시 옵션
//      dataType: "json", // 서버측에서 전송한 데이터를 어떤 형식의 데이터로서 해석할 것인가를 지정, 없으면 알아서 판단
//
//      // 서버측에서 전송한 Response 데이터 형식 (json)
//      // {'likes_count': post.like_count, 'message': message }
//
//      success: function(response){ // 통신 성공시 - 좋아요 갯수 변경, 유저 목록 변경
//
//
//        $("#count-"+pk).html("좋아요 "+response.like_count+"개");
//
//        var users = $("#like-user-"+pk).text();
//
//        if(users.indexOf(response.nickname) != -1){
//          if(response.like_count == 0){
//            $("#like-user-"+pk).text("");
//          }else{
//          $("#like-user-"+pk).text(users.replace(response.nickname, ""));
//          }
//          $("input.like[name="+pk+"]").toggleClass('liked to-like');
//        }else{
//          $("#like-user-"+pk).text(response.nickname+users);
//          $("input.like[name="+pk+"]").toggleClass('to-like liked');
//        }
//      },
//      error: function(request, status, error){ // 통신 실패시 - 로그인 페이지 리다이렉트
//        alert("로그인이 필요합니다.");
//        window.location.replace("/accounts/login/");
//        //  alert("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
//      },
//    });
//  });









    menu.addEventListener('click', function () {
            console.log('1');

            var myInit ={
//                method: "put",
//                credentials: "same-origin",
//                headers: {
//                    "X-CSRFToken": "csrftoken",
//                    "Accept": "application/json",
//                    "Content-Type": "application/json"
//                },
////                body: JSON.stringify(context)
//            }




            fetch("/article/reporterlist", {
                method: "put",
                credentials: "same-origin",
                headers: {
                    "X-CSRFToken": "csrftoken",
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(context)
            }).then(function(response) {
                return response.json();
            }).then(function(data) {
                console.log("Data is ok", data);
            }).catch(function(ex) {
                console.log("parsing failed", ex);
            });

//            fetch('/article/reporterlist').then(function (response){
//                console.log(response);
//
//                if(response.status == '404'){
//                    alert('not found')
//                }else{
//                    console.log(context)
//                }
//            });
//            console.log(1);
//            console.log(2);

//            fetch('/article/reporterlist', {
//            method: 'get',
//            credentials: "same-origin",
//            headers: {
//                'Accept': 'application/json',
//                'Content-Type': 'application/json'
//            },
//            body: JSON.stringify(context)
//            }).then(function(response) {
//              if(response.ok) {
//                response.blob().then(function(myBlob) {
//                  var objectURL = URL.createObjectURL(myBlob);
//                  myImage.src = objectURL;
//                });
//              } else {
//                console.log('Network response was not ok.');
//              }
//            })
//            .catch(function(error) {
//                console.log("There has been a problem with your fetch operation", error.message);
//            })



        })
})();
