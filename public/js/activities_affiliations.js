

window.addEventListener('load', () =>{
    const submitBtn = document.querySelector('#submitbtn')
    const form = document.querySelector('#form')
    const activitiesIn = document.getElementById('activities')
    // const affiliationsIn = document.getElementById('affiliations')
    // const expertiseIn = document.getElementById('expertise')


    form.addEventListener("submit", (e) =>{
        e.preventDefault()
    })

    submitBtn.addEventListener('click', async (e) =>{
         e.preventDefault()
         const activities = activitiesIn.value
        // const affiliations = affiliationsIn.value
        //  const expertise = expertiseIn.value
        
         try {
            const data = await axios.post('/eaglex/activities_affiliations/create/activities_affiliations',{
                activities:activities,
               
               
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
