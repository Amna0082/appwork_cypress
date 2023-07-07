export class maintenancetab{
  //Locators

maintenancetab_locator = ':nth-child(3) > .sc-gKclnd'
workorder_block_locator = ':nth-child(1) > .sc-kDTinF'
export_switch_locator = ':nth-child(1) > .sc-hFFXrT > .sc-Galmp'
allow_sms_locator = ':nth-child(2) > .sc-hFFXrT > .sc-Galmp'
save_locator  = '.sc-fotOHu'

tech_block_locator = ':nth-child(2) > .sc-kDTinF'
tech_maps_locator = ':nth-child(1) > .sc-hFFXrT > .sc-Galmp'
tech_time_locator = ':nth-child(2) > .sc-hFFXrT > .sc-Galmp'
tech_tipping_locator = ':nth-child(3) > .sc-hFFXrT > .sc-Galmp'
save_tech_locator = '.sc-fotOHu'

// Create New Badge
badges_block_locator = ':nth-child(3) > .sc-kDTinF'
new_badge_locator = ':nth-child(2) > .sc-hKumaY > .sc-iJCbQK'
style_locator = '.sc-eZKLwX'
badge_style_locator = '.sc-cAerGf > :nth-child(1)'
badge_title_locator = '.sc-hIagIn'
icon_locator = '.sc-gQQhUU'
select_icon_locator = '.sc-kvfEvX.fegAoE > .sc-cEotUS:nth-child(45)' // cutom Selector
days_locator = '.sc-dAQVOH'
add_badge_locator = '.sc-wkwDy > .sc-hKumaY > .sc-iJCbQK'

// Create new badge by using temlate
use_temlate_locator = '.sc-bXRjm > .sc-gLDmcm'






//Methods
navigator(url){
    cy.visit(url);
    }

    maintenanceTab(){
        cy.get(this.maintenancetab_locator).click().should('be.visible')
        cy.get(this.workorder_block_locator).click()
        cy.get('.sc-giYglK').should('contain', 'Export Work Orders')
    }
    exportButton(){
        cy.get(this.export_switch_locator).click()
    } 
    allowSms(){
        cy.get(this.allow_sms_locator).click()
    }
    saveButton(){
        cy.get(this.save_locator).click()
    }
    techBlock(){
        cy.get(this.tech_block_locator).click()
    }
    techMaps(){
        cy.get(this.tech_maps_locator).click()
    }
    techTime(){
        cy.get(this.tech_time_locator).click()
    }
    techTipping(){
        cy.get(this.tech_tipping_locator).click()
    }
    saveTechs(){
        cy.get(this.save_tech_locator).click()
    }

    badgeBlock(){
        cy.get(this.badges_block_locator).click()
    }
    newBadge(){
        cy.get(this.new_badge_locator).click()
    }
    badgeStyle(){
        cy.get(this.style_locator).click()
        cy.get(this.badge_style_locator).click()
    }
    badgeTitle(){
        cy.get(this.badge_title_locator).type('Active Time')
    }
    selectIcon(){
        cy.get(this.icon_locator).click()
        cy.get(this.select_icon_locator).trigger('mouseover').click()
    }
    amountDays(){
        cy.get(this.days_locator).type('5')
    }
    addBadgeButton(){
        cy.get(this.add_badge_locator).click()
    }




} 