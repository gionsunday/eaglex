

window.addEventListener('load', () =>{
    const submitBtn = document.querySelector('#submitbtn')
    const form = document.querySelector('#form')
    const experienceIn = document.getElementById('experience')
    // const positionIn = document.getElementById('position')
    // const expertiseIn = document.getElementById('expertise')


    form.addEventListener("submit", (e) =>{
        e.preventDefault()
    })

    submitBtn.addEventListener('click', async (e) =>{
         e.preventDefault()
         const experience = experienceIn.value
        //  const position = positionIn.value
        //  const expertise = expertiseIn.value
        
         try {
            const data = await axios.post('/eaglex/experience/create/experience',{
                experience:experience,
               
                creator:localStorage.getItem('USERID')
                
            })
            console.log(data)
            submitBtn.textContent = "Saving..."
            submitBtn.textContent ="Saved!"
            window.location = '../pictures'
         } catch (error) {
            console.log(error)
            
         }
    })


})