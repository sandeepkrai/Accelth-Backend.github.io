const patientroute = require('../controllers/patient')
const express = require('express')
const router = express.Router()


router.post('/sendOTP/:Email_id',patientroute.sendOTP)
router.post('/verifyOtp/:Email_id',patientroute.verifyOtp)
router.get('/getAllPatients',patientroute.getAllPatients)
router.post('/signup',patientroute.registerPatient)
router.post('/signin',patientroute.loginPatient)
router.post('/changePassword',patientroute.changePassword)
router.post('/addimaging/:Email_id',patientroute.addImaging)
// router.put('/onboard1update/:Email_id',patientroute.onBoard1Patientupdate)
// router.post('/onboard2add/:Email_id',patientroute.onBoard2Patientadd)
router.post('/addLifestyle/:Email_id',patientroute.addLifestyle)
router.post('/addmedications/:Email_id',patientroute.addmedications)
router.get('/getasinglepatient/:Email_id',patientroute.getasinglepatient)
router.post('/addHeartRateInfo/:Email_id',patientroute.addHeartRateInfo)
router.post('/addBloodPressureInfo/:Email_id',patientroute.addBloodPressureInfo)
router.post('/adddOxygenInfo/:Email_id',patientroute.adddOxygenInfo)
router.post('/addrespiratoryInfo/:Email_id',patientroute.addrespiratoryInfo)
router.post('/addTemperatureInfo/:Email_id',patientroute.addTemperatureInfo)
router.post('/addHaemoglobinInfo/:Email_id',patientroute.addHaemoglobinInfo)
router.post('/addGlucoseInfo/:Email_id',patientroute.addGlucoseInfo)
router.post('/addThyroidInfo/:Email_id',patientroute.addThyroidInfo)
router.post('/addFitbitinfo/:Email_id',patientroute.addFitbitinfo)
router.post('/addGlucometerinfo/:Email_id',patientroute.addGlucometerinfo)
router.post('/addOngoing/:Email_id',patientroute.addOngoing)
router.post('/addIssues/:Email_id',patientroute.addIssues)
router.post('/updateWalletBalance/:Email_id',patientroute.updateWalletBalance)
router.post('/addVisits/:Email_id',patientroute.addVisits)
router.post('/addHospitalization/:Email_id',patientroute.addHospitalization)
router.post('/OrderPlace/:Email_id',patientroute.OrderPlace)
router.post('/addCovidReport/:Email_id',patientroute.addCovidReport)
router.post('/addDengueReport/:Email_id',patientroute.addDengueReport)
router.post('/addCBCReport/:Email_id',patientroute.addCBCReport)
router.post('/addBMPReport/:Email_id',patientroute.addBMPReport)
router.post('/addCMPReport/:Email_id',patientroute.addCMPReport)
router.post('/addTPReport/:Email_id',patientroute.addTPReport)
router.post('/addLPReport/:Email_id',patientroute.addLPReport)
router.post('/updatePatientProfilePersonal/:Email_id',patientroute.updatePatientProfilePersonal)
router.post('/updatePatientProfileMedical/:Email_id',patientroute.updatePatientProfileMedical)
router.post('/updatePatientProfileLifestyle/:Email_id',patientroute.updatePatientProfileLifestyle)
router.post('/addDoctor/:Email_id',patientroute.adddoctors)
router.post('/addItemtoCart/:Email_id',patientroute.addItemtoCart)
router.post('/changequantity/:Email_id',patientroute.ChangeQuantity)
module.exports = router
