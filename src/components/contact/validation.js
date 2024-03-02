import { ref } from 'vue'


export const validationStatus = ref({
    name: true,
    emailFrom: true,
    subject: true,
    message: true
})

export const validationChecker = async (formData) => {
    for (const field of Object.keys(validationStatus.value)) {
        if (formData[field].trim().length === 0) {
            validationStatus.value[field] = false
        }else{
            validationStatus.value[field] = true
        }
    }
}

export const validateFields = async (toast, formData, isWatch) => {
    

    const requiredFields = [
        { payload: 'name', message: 'Name is required' },
        { payload: 'emailFrom', message: 'Email is required' },
        { payload: 'subject', message: 'Subject is required' },
        { payload: 'message', message: 'Message is required' },
    ]

    validationChecker(formData)

    let errors = 0;


    requiredFields.every((field) => {
        if (formData[field.payload].trim().length === 0) {
            errors++;
            if (isWatch != 1) {
                console.log('Field Required', field.message)
            }
            return false;
        }

        return true;
    })

    return errors;
}