const express = require('express');
const router = express.Router();
const isUserVerified = require('../middlewares/isUserVerified.js');
const Job = require('../models/Job.js')

router.get('/job', async (req, res, next) => {
    try {
        let filters = {};
        if (req.query.title) {
            // console.log(req.query.title);
            filters.title = { $in: req.query.title.map(title => new RegExp(title, 'i')) };
        }
        if (req.query.skills) {
            // console.log(req.query.skills);
            filters.skills = { $in: req.query.skills.map(skill => new RegExp(skill, 'i')) };
        }
        if (!req.query.title && !req.query.skills) {
            filters = { title: [/.*/], skills: [/.*/] }
        }
        // console.log(filters);
        const jobs = await Job.find(
            { $or: [{ job_position: filters.title }, { skills_required: filters.skills }] },
            { company_name: 0, job_description: 0, about_company: 0, additional_information: 0 }
        );
        // console.log(jobs);
        res.status(200).json(jobs);
    }
    catch (error) {
        next(error);
    }
})

router.post('/job', isUserVerified, async (req, res, next) => {
    try {
        const { company_name, logo_url, job_position, monthly_salary, job_type, remote_or_office, location, job_description, about_company, skills_required, additional_information } = req.body;

        if (!company_name || !logo_url || !job_position || !monthly_salary || !job_type || !remote_or_office || !location || !job_description || !about_company || !skills_required || !additional_information) {
            throw { message: 'All feilds are required' };
        }
        const newJob = { company_name, logo_url, job_position, monthly_salary, job_type, remote_or_office, location, job_description, about_company, skills_required, additional_information };
        await Job.create(newJob);

        res.status(200).json({ message: 'Job created Successfully' });
    }
    catch (error) {
        next(error);
    }
})
router.put('/job', isUserVerified, async (req, res, next) => {
    try {
        const { _id, company_name, logo_url, job_position, monthly_salary, job_type, remote_or_office, location, job_description, about_company, skills_required, additional_information } = req.body;

        if (!company_name || !logo_url || !job_position || !monthly_salary || !job_type || !remote_or_office || !location || !job_description || !about_company || !skills_required || !additional_information) {
            throw { message: 'All feilds are required' };
        }
        const editedJob = { company_name, logo_url, job_position, monthly_salary, job_type, remote_or_office, location, job_description, about_company, skills_required, additional_information };
        await Job.findByIdAndUpdate({ _id }, editedJob);

        res.status(200).json({ message: 'Job edited Successfully' });
    }
    catch (error) {
        next(error);
    }
})

router.get('/job/:id', async (req,res,next)=>{
    try{
        const id = req.params.id;
        const jobDetails = await Job.findById(id);
        if(!jobDetails){
            throw {status:404, message:'Job not found'};
        }
        res.status(200).json({data: jobDetails});
    }
    catch(error){
        next(error);
    }
})




module.exports = router;