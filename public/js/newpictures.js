

window.addEventListener('load', () =>{
        
    var files = ''
    const fileInput = document.getElementById('input');
        fileInput.onchange = () => {
            const selectedFile = fileInput.files[0];
            files = selectedFile
            console.log(selectedFile);
        }
    const submitBtn = document.querySelector("#submitbtn")
    
    submitBtn.addEventListener('click', async (e) =>{
        e.preventDefault()
    
  console.log(files)
        const data = new FormData()

        data.append('creator', localStorage.getItem('USERID'))
        data.append('images', files)
        
        try {
            const newData = await axios.post('/eaglex/pictures/uploadimages', data, {
                headers:{
                    'Content-Type': 'multipart/form-data'
                }
                
            })
            window.location = '../success'
           
        } catch (error) {
            console.log(error)
            
        }

    })
})