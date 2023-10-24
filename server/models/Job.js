const mongoose = require('mongoose');

const jobSchema = mongoose.Schema({
    company_name: {type:String, required:true},
    logo_url: {type:String, required:true},
    job_position: {type:String, required:true},
    monthly_salary: {type:Number, required:true},
    job_type: {type:String, required:true},
    remote_or_office: {type:String, required:true},
    location: {type:String, required:true},
    job_description: {type:String, required:true},
    about_company: {type:String, required:true},
    skills_required: {type:String, required:true},
    additional_information: {type:String, required:true}
})

const Job = mongoose.model('Job',jobSchema);

module.exports = Job