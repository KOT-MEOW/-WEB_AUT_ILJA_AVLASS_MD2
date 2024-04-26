import { BasePage } from "../pageObject/base.page";
import { HomePage } from "../pageObject/home.page";



describe("Katalon-demo-cura.herokuapp scenarios 1 and 2", () => {
  context("Scenarios", () => {

    beforeEach(() => {
      BasePage.visit();
    })

    it('Make an Appointment', () => {
        //Click - Make Appointment
        HomePage.makeAppontmentButton.click();
        //Set username and password fields with the demo account credentials
        HomePage.setUsername.type('John Doe');
        HomePage.setPassword.type('ThisIsNotAPassword');
        //Click - Login
        HomePage.loginButton.click();
        /*
        Set the following values:
        1. Facility - Seoul CURA Healthcare Center
        2. Check - Apply for hospital readmission
        3. Select - Medicaid
        4. Set Date value by using the widget - 30
        5. Set comment - CURA Healthcare Service
        6. Click - Book Appointment
        */

        // 1. Facility - Seoul CURA Healthcare Center
        HomePage.selectFacility.select("Seoul CURA Healthcare Center");
        // 2. Check - Apply for hospital readmission
        HomePage.checkBoxApply.click();
        // 3. Select - Medicaid
        HomePage.selectMedicalProgram.contains("Medicaid").click();
        // 4. Set Date value by using the widget - 30
        HomePage.selectCalendar.click();
        HomePage.setDateByDay.contains("30").click();
        // 5. Set comment - CURA Healthcare Service
        HomePage.textField.type("CURA Healthcare Service");
        // 6. Click - Book Appointment
        HomePage.bookApointmentButton.click();

        // Validate that previously set values are correct
        HomePage.valFacility.should('contain','Seoul CURA Healthcare Center');
        HomePage.valHospitalReadmission.should('contain', 'Yes');
        HomePage.valHealthcareProgram.should('contain', 'Medicaid');
        HomePage.valCalendar.should('contain', '30');
        HomePage.valComment.should('contain', 'CURA Healthcare Service');
    })

    it('Appointment history empty', () => {
      // Click - Make Appointment
      HomePage.makeAppontmentButton.click();
      // Set username and password fields with the demo account credentials
      HomePage.setUsername.type('John Doe');
      HomePage.setPassword.type('ThisIsNotAPassword');
      // Click - Login
      HomePage.loginButton.click();      
      // Click - Menu/Stack/Burger icon
      HomePage.menuButton.click();
      // Validate that the sidebar is active
      HomePage.valMebuIsActive.should('have.class', 'active');
      // Click - History
      HomePage.sidebar.contains("History").click();
      // Validate that - No appointment - is visible
      HomePage.valNoAppointment.should('contain', 'No appointment');
    })

    
  })
})
