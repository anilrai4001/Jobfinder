const express = require('express');
const router = express.Router();
const isUserVerified = require('../middlewares/isUserVerified.js');
const Job = require('../models/Job.js')

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

module.exports = router;