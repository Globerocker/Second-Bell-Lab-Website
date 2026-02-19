/**
 * HubSpot CRM Service
 * Handles lead submission and conversion tracking.
 */

const PORTAL_ID = import.meta.env.VITE_HUBSPOT_PORTAL_ID;

export interface LeadData {
    email: string;
    firstName: string;
    lastName: string;
    phone?: string;
    studentName: string;
    studentDob: string;
    studentGender: string;
    studentSchool: string;
    studentInterests: string[];
    studentDeficits: string;
    gpaStatus: string;
    hasSuspension: string;
    lawInteraction: string;
    pickupType: 'pickup' | 'alone';
    pickupTime?: string;
    parentWorkUntil?: string;
    nutritionType: string;
    allergies: string;
    specialWishes: string;
    preferredLocation: string;
    parentStatement: string;
    lastStepCompleted?: string;
}

export const hubspotService = {
    /**
     * Submit lead to HubSpot via Forms API
     * This is preferred for frontend to associate sessions/cookies.
     */
    submitLead: async (data: LeadData, formId: string, status: 'Partial' | 'Submitted' = 'Submitted') => {
        if (!PORTAL_ID || !formId) {
            console.warn('HubSpot Portal ID or Form ID missing.');
            return;
        }

        // Get the HubSpot visitor cookie
        const hubspotutk = document.cookie
            .split('; ')
            .find(row => row.startsWith('hubspotutk='))
            ?.split('=')[1];

        const payload = {
            submittedAt: Date.now(),
            fields: [
                { name: 'email', value: data.email },
                { name: 'firstname', value: data.firstName },
                { name: 'lastname', value: data.lastName },
                { name: 'phone', value: data.phone || '' },
                { name: 'student_name', value: data.studentName },
                { name: 'student_dob', value: data.studentDob },
                { name: 'student_gender', value: data.studentGender },
                { name: 'student_school', value: data.studentSchool },
                { name: 'student_interests', value: data.studentInterests.join(', ') },
                { name: 'student_deficits', value: data.studentDeficits },
                { name: 'gpa_status', value: data.gpaStatus },
                { name: 'has_suspension', value: data.hasSuspension },
                { name: 'law_interaction', value: data.lawInteraction },
                { name: 'pickup_type', value: data.pickupType },
                { name: 'pickup_time', value: data.pickupTime || '' },
                { name: 'parent_work_until', value: data.parentWorkUntil || '' },
                { name: 'nutrition_type', value: data.nutritionType },
                { name: 'allergies', value: data.allergies },
                { name: 'special_wishes', value: data.specialWishes },
                { name: 'preferred_location', value: data.preferredLocation },
                { name: 'parent_statement', value: data.parentStatement },
                { name: 'application_status', value: status },
                { name: 'last_step_completed', value: data.lastStepCompleted || '1' }
            ],
            context: {
                hutk: hubspotutk,
                pageUri: window.location.href,
                pageName: document.title,
            },
        };

        try {
            const response = await fetch(
                `https://api.hsforms.com/submissions/v3/integration/submit/${PORTAL_ID}/${formId}`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(payload),
                }
            );

            return response.status === 200;
        } catch (error) {
            console.error('HubSpot Form Submission Error:', error);
            return false;
        }
    },
};
