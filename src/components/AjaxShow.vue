<template>
  <div>
      <!-- task6 show area -->
      <div class="ajaxData">
          <h1>{{name}} {{time}}</h1>
      </div>
      <!-- task5 show area -->
      <css-media></css-media>
      
  </div>
</template>

<script>
import CssMedia from './CssMedia.vue'

export default {
    name:'AjaxShow',
    components:{CssMedia},
    data(){
        return{
            name:'',
            time:new Date().toDateString()
        }
    },
    mounted(){
        //  task6 AJAX get Data from json-server: 
        //  请用npm安装json-server 否则可能无法运行
                new Promise((resolve,reject)=>{
                  let url = 'http://localhost:3000/person/1'
                  let method = 'GET'
                    function sendAjax(url,method,data){
                        const xhr = new XMLHttpRequest()
                        xhr.open(method,url)
                        xhr.onreadystatechange = function(){
                            if(xhr.readyState == 4){
                                if(xhr.status == 200){
                                    resolve(xhr.responseText)                                 
                                }else{                   
                                    reject(xhr.status)
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
                    sendAjax(url,method)  
                }).then((res)=>{    
                    res = JSON.parse(res)
                    this.name = res.name
                    
                }).catch((reason)=>{
                    console.log(reason)
                })
                
    }
}
</script>

<style>

</style>