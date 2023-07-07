import { maintenancetab } from "./pages/maintenanceWO"
const maintenance = new maintenancetab()

describe('staff test',()=>{
    before(()=>{
        maintenance.navigator('https://admin.appworkco-beta.com/sessions')
        cy.login('email@example.com', 'appw0rkd3vs!')  
        cy.wait(2000)
        maintenance.navigator('https://admin.appworkco-beta.com/application_settings')
    })

    beforeEach(()=> {
        cy.viewport(1320, 768)
        cy.wait(3000)
    })

    // it('Click on manintenace tab',()=>{
    //     cy.loginSession
    //     maintenance.maintenanceTab()
    //     cy.wait(3000)
    // })
    // it('Click to export switch button',()=>{
    //     maintenance.exportButton()
    // })
    // it('Click to allow sms by default',()=>{
    //     maintenance.allowSms()
    // })
    
    // it('Click on save button',()=>{
    //     maintenance.saveButton()
    // })


    // it('Back to manintenace tab ',()=>{
    //     maintenance.maintenanceTab()
    //     cy.wait(4000)
    // })
    // it('Click on tech block ',()=>{
    //     maintenance.techBlock()  
    // })
    // it('Click to switch tech maps ',()=>{
    //     maintenance.techMaps()  
    // })
    // it('Click to switch tech timer ',()=>{
    //     maintenance.techTime()  
    // })
    // it('Click on save tech settings button ',()=>{
    //     maintenance.saveTechs()  
    // })


    it('Click on badge block' , ()=>{
        maintenance.maintenanceTab()
        cy.wait(4000)
        maintenance.badgeBlock()
    })
    it('Click on new badge button' , ()=>{
        maintenance.newBadge()
    })
    it('Click on badge style dropdown' , ()=>{
        maintenance.badgeStyle()
    })
    it('Click and type badge title' , ()=>{
        maintenance.badgeTitle()
    })
    it('Click on add icon' , ()=>{
        maintenance.selectIcon()
    })
    it('Click on add days' ,()=>{
        maintenance.amountDays()
    })
    it('Click on add bade button' , ()=>{
        maintenance.addBadgeButton()
    })
    








})
