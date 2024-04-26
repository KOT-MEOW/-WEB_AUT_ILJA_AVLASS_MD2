import { BasePage } from "./base.page";

export class HomePage extends BasePage {
    
    static get makeAppontmentButton(){
        return cy.get("[id='btn-make-appointment']");
    }

    static get setUsername(){
        return cy.get("input[id='txt-username']");
    }

    static get setPassword(){
        return cy.get("input[id='txt-password']");
    }

    static get loginButton(){
        return cy.get("[id='btn-login']");
    }

    static get selectFacility(){
        return cy.get("[id='combo_facility']");
    }
    
    static get checkBoxApply(){
        return cy.get('[id="chk_hospotal_readmission"]');
    }
    /*
    At this point I realized that the selector had to be exactly as I was copying it
    (I had changed “aaa” to 'aaa' before and can't understand why it doesn't work). 
    */

    static get selectMedicalProgram(){
        return cy.get('[class="radio-inline"]');
    }

    static get selectCalendar(){
        return cy.get('[id="txt_visit_date"]');
    }
    
    static get setDateByDay(){
        return cy.get('[class="datepicker-days"]');
    }
    
    static get textField(){
        return cy.get('[id="txt_comment"]');
    }

    static get bookApointmentButton(){
        return cy.get('[id="btn-book-appointment"]');
    }

    // Validate

    static get valFacility(){
        return cy.get('[id="facility"]');
    }

    static get valHospitalReadmission(){
        return cy.get('[id="hospital_readmission"]');
    }

    static get valHealthcareProgram(){
        return cy.get('[id="program"]');
    }

    static get valCalendar(){
        return cy.get('[id="visit_date"]');
    }

    static get valComment(){
        return cy.get('[id="comment"]');
    }

    // scenario 2

    static get menuButton(){
        return cy.get('[id="menu-toggle"]');
    }

    static get valMebuIsActive(){
        return cy.get('[id="sidebar-wrapper"]');
    }

    static get sidebar(){
        return cy.get('[href="history.php#history"]');
    }    

    static get valNoAppointment(){
        return cy.get('[class="col-sm-12 text-center"]');
    }   


  }
