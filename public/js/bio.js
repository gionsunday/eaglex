

window.addEventListener('load', () =>{
    const submitBtn = document.querySelector('#submitbtn')
    const form = document.querySelector('#form')
    const firstNameIn = document.getElementById('firstname')
    const middleNameIn = document.getElementById('middlename')
    const lastNameIn = document.getElementById('lastname')
    const emailIn = document.getElementById('email')
    const emailIn2 = document.getElementById('email2')
    const phoneNumIn = document.getElementById('phone')
    const addressIn = document.getElementById('address')
    const addressIn2 = document.getElementById('address2')
    const linkedInIn = document.getElementById('linkedin')
    const cityIn = document.getElementById('city')
    const stateIn = document.getElementById('state')
    const zipIn = document.getElementById('zip')

    form.addEventListener("submit", (e) =>{
        e.preventDefault()
    })

    submitBtn.addEventListener('click', async (e) =>{
         e.preventDefault()
         const firstName = firstNameIn.value
         const middleName = middleNameIn.value
         const lastName = lastNameIn.value
         const email = emailIn.value
         const email2 = emailIn2.value
         const phoneNumber = phoneNumIn.value
         const address = addressIn.value
         const address2 = addressIn2.value
         const linkedIn = linkedInIn.value
         const city = cityIn.value
         const state = stateIn.value
         const zip = zipIn.value

         try {
            const data = await axios.post('/eaglex/bio/createbio',{
                firstName:firstName,
                middleName:middleName,
                lastName:lastName,
                email:email,
                email2:email2,
                phone:phoneNumber,
                address:address,
                address2:address2,
                linkedIn:linkedIn,
                city:city,
                state_of_origin:state,
                zip:zip
            })
           
            localStorage.setItem("USERID", data.data.userId )
            submitBtn.textContent = "Saving..."
            submitBtn.textContent ="Saved!"
            window.location = './position'
         } catch (error) {
            console.log(error)
            
         }
    })


})