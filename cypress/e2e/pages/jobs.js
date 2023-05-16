export class Jobs{

//Locators

jobs_block_locator = ':nth-child(5) > .sc-kDTinF'
award_tech_locator = '.sc-gAcjFF > :nth-child(1)'
add_jobs_locator = '.sc-lgquFt > .sc-jefHZX > .sc-fvpsdx'
minutes_locator = ':nth-child(2) > .sc-cOLXoO > .sc-bexQF'
select_minutes_locator = ':nth-child(3) > .sc-brSvTw'
hours_locator = ':nth-child(4) > .sc-cOLXoO > .sc-bexQF' 
select_hour_locator = '.sc-izUTpy > :nth-child(3)'

remove_everyday_locator  = ':nth-child(6) > .sc-cOLXoO > .sc-bexQF > .sc-iQLbEm > .sc-kZJZaN > .sc-bOTDDd > .sc-jUosCB'
days_locator = ':nth-child(6) > .sc-cOLXoO > .sc-bexQF'
select_days_locator = '.sc-izUTpy > :nth-child(1)'

remove_wdays_locator = ':nth-child(8) > .sc-cOLXoO > .sc-bexQF > .sc-iQLbEm > .sc-kZJZaN > .sc-bOTDDd'
wdays_locator = ':nth-child(8) > .sc-cOLXoO > .sc-bexQF'
select_wdays_locator = '.sc-izUTpy > :nth-child(1)'

remove_months_locator = ':nth-child(10) > .sc-cOLXoO > .sc-bexQF > .sc-iQLbEm > .sc-kZJZaN > .sc-bOTDDd > .sc-jUosCB'
months_locator = ':nth-child(10) > .sc-cOLXoO > .sc-bexQF'
select_month_locator = '.sc-izUTpy > :nth-child(1)'
save_jobs_locator = ':nth-child(1) > .sc-fvpsdx'
delete_jobs_locator = ':nth-child(2) > .sc-fvpsdx'


//Methods
    navigator(url){
    cy.visit(url)
    }

    jobsBlock(){
        cy.get(this.jobs_block_locator).click()
    }
    awardtechJob(){
        cy.get(this.award_tech_locator).click()
    }
    addJobs(){
        cy.get(this.add_jobs_locator).click()
    }
    minutes(){
        cy.get(this.minutes_locator).click()
    }
    selectminutes(){
        cy.get(this.select_minutes_locator).click()
        // cy.xpath('').should('include', '5')
        cy.url().should('include', '/application_settings')

    }
    hours(){
        cy.get(this.hours_locator).click({force: true})
    }
    selectHours(){
        cy.get(this.select_hour_locator).click()
    }
    days(){
        cy.get(this.remove_everyday_locator).click({force: true})
        cy.get(this.days_locator).click( {force: true})
    }
    selectDays(){
        cy.get(this.select_days_locator).click()
    }
    wDays(){
        cy.get(this.remove_wdays_locator).click({force: true})
        cy.get(this.wdays_locator).click({force: true})
    }
    selectWdays(){
        cy.get(this.select_wdays_locator).click()
    }
    Months(){
        cy.get(this.remove_months_locator).click({force: true})
        cy.get(this.months_locator).click({force: true})
    }
    selectMonths(){
        cy.get(this.select_month_locator).click()
    }
    saveButton(){
        cy.get(this.save_jobs_locator).click({force: true})
    }
    deleteJob(){
        cy.get(this.delete_jobs_locator).click({force: true})
    }




}