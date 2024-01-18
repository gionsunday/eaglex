

window.addEventListener('load', () =>{
    const submitBtn = document.querySelector('#submitbtn')
    const form = document.querySelector('#form')
    const insightIn = document.getElementById('insights')
    const publicationsIn = document.getElementById('publications')
    // const expertiseIn = document.getElementById('expertise')


    form.addEventListener("submit", (e) =>{
        e.preventDefault()
    })

    submitBtn.addEventListener('click', async (e) =>{
         e.preventDefault()
         const insight = insightIn.value
        const publications = publicationsIn.value
        //  const expertise = expertiseIn.value
        
         try {
            const data = await axios.post('/eaglex/insight_publications/create/insight_publications',{
                insights:insight,
                publications:publications,
               
                creator:localStorage.getItem('USERID')
                
            })
            console.log(data)
            submitBtn.textContent = "Saving..."
            submitBtn.textContent ="Saved!"
            window.location = '../activities_affiliations'
         } catch (error) {
            console.log(error)
            
         }
    })


})