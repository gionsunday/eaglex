

window.addEventListener('load', () =>{
    const submitBtn = document.querySelector('#submitbtn')
    const form = document.querySelector('#form')
    const briefInfoIn = document.getElementById('briefinfo')
    const positionIn = document.getElementById('position')
    const expertiseIn = document.getElementById('expertise')


    form.addEventListener("submit", (e) =>{
        e.preventDefault()
    })

    submitBtn.addEventListener('click', async (e) =>{
         e.preventDefault()
         const briefinfo = briefInfoIn.value
         const position = positionIn.value
         const expertise = expertiseIn.value
        
         try {
            const data = await axios.post('/eaglex/positions/createposition',{
                about_yourself:briefinfo,
                position:position,
                expertise:expertise,
                creator:localStorage.getItem('USERID')
                
            })
            console.log(data)
            submitBtn.textContent = "Saving..."
            submitBtn.textContent ="Saved!"
            window.location = '../experience'
         } catch (error) {
            console.log(error)
            
         }
    })


})