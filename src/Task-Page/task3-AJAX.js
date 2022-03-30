
// task1 in public/index.html title
// task2 in https://github.com/AnnCY1/garena-test.git

// task3 AJAX Request:
     function sendAjax(url,method,data){
            const xhr = new XMLHttpRequest()
            xhr.open(method,url)
            xhr.onreadystatechange = function(){
                if(xhr.readyState == 4 ){
                    if(xhr.status == 200){
                         // console.log('success!')
                         return xhr.responseText
                    }else{
                        // console.log('error!')
                        return xhr.status
                     }      
                }
            }
            if(method == 'post'){
                xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;charset-UTF-8");
                xhr.send(data)
            }else{
                xhr.send()
            }
    }
