$(document).ready(() =>{
    
    const userjson = localStorage.getItem("dtl")
    // const user = JSON.parse(userjson)
    // const {email, name, id} = user
    // const image = $("#avatarID")
    const fileInput1 = $("#file1")
    // const fileInput2 = $("#file2")
    // $("#setting").click(() =>{
    //     $("#profile_image").toggle()
    // })
    $("#profile_image_btn").click( async (e) =>{
       $("#profile_image_btn").text('Saving...')
        console.log(fileInput1)
       
    const images = []
        const files1= fileInput1[0].files
        // const files2= fileInput2[0].files
       
        e.preventDefault() 
        try {
          
         
  
        const new_data1 = new FormData()
        // new_data.append('name', name)
        new_data1.append('creator', localStorage.getItem('USERID'))
        new_data1.append('images', files1[0])
        var settings1 = {
            "url": "/eaglex/pictures/uploadimages",
            "method": "POST",
            "timeout": 0,
            "processData": false,
            "mimeType": "multipart/form-data",
            "contentType": false,
            "data": new_data1
          };
       await $.ajax(settings1).done(function (response) {
            console.log(response);
          });
          $("#profile_image_btn").text('Saved!')
          window.location = '../success'


        

        //   window.location="dashboard.html"
        
        } catch (error) {
          console.log(error)
        }

      })
    })           
