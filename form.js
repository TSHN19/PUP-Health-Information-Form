const collegesOnCampuses = {
    manila: [
        "College of Accountancy and Finance (CAF)", 
        "College of Arts and Letters (CAL)", 
        "College of Architecture, Design and the Built Environment (CADBE)", 
        "College of Business Administration (CBA)",
        "College of Computer and Information Sciences (CCIS)",
        "College of Communication (COC)",
        "College of Education (COED)",
        "College of Engineering (CE)",
        "College of Human Kinetics (CHK)",
        "College of Political Science and Public Administration (CPSPA)",
        "College of Science (CS)",
        "College of Social Sciences and Development (CSSD)",
        "College of Tourism, Hospitality and Transportation Management (CTHTM)",
        "Open University System (OUS)",
        "Institute of Technology (ITECH)",
        "Graduate Diploma Program",
        "Master's Degree Program",
        "Doctorate Degree Program"
    ],
    quezon_city: ["Undergraduate Program", "Graduate Studies OUS"],
    san_juan: ["Undergraduate Program"],
    taguig: ["Undergraduate Program", "Graduate Studies OUS"],
    paranaque: ["Undergraduate Program"],
    bataan: ["Undergraduate Program", "Graduate Studies"],
    stmaria: ["Undergraduate Program"],
    pulilan: ["Undergraduate Program"],
    cabiao: ["Undergraduate Program"],
    lopez: ["Undergraduate Program", "Graduate Studies OUS"],
    mulanay: ["Undergraduate Program"],
    general_luna: ["Undergraduate Program"],
    unisan: ["Undergraduate Program", "Graduate Studies OUS"],
    ragay: ["Undergraduate Program"],
    sto_tomas: ["Undergraduate Program"],
    maragondon: ["Undergraduate Program", "Graduate Studies OUS"],
    alfonso: ["Undergraduate Program"],
    bansud: ["Undergraduate Program", "Graduate Studies OUS"],
    sablayan: ["Undergraduate Program", "Associate Program", "Graduate Studies OUS"],
    binan: ["Undergraduate Program"],
    san_pedro: ["Undergraduate Program"],
    sta_rosa: ["Undergraduate Program"],
    calauan: ["Undergraduate Program"]
};

const coursesOnColleges = {
    "manila": {
        "College of Accountancy and Finance (CAF)": [
            "Bachelor of Science in Accountancy (BSA)", 
            "Bachelor of Science in Management Accounting (BSMA)",
            "BSBA Major in Financial Management (BSBAFM)"
        ],
        "College of Arts and Letters (CAL)": [
            "Bachelor of Arts in English Language Studies (ABELS)",
            "Bachelor of Arts in Literature and Cultural Studies (ABLCS)",
            "Batsilyer ng Artes sa Filipinolohiya (ABF)",
            "Bachelor of Arts in Philosophy (AB- PHILO)",
            "Bachelor of Performing Arts major in Theater Arts (BPEA) (formerly BA Theater Arts)"
        ], 
        "College of Architecture, Design and the Built Environment (CADBE)": [
            "Bachelor of Science in Architecture (BS ARCHI)",
            "Bachelor of Science in Interior Design (BSID)",
            "Bachelor of Science in Environmental Planning (BSEP)"
        ], 
        "College of Business Administration (CBA)": [
            "Bachelor of Science in Entrepreneurship (BSENTREP)",
            "Bachelor of Science in in Business Administration major in Human Resource Management (BSBAHRM)",
            "Bachelor of Science in in Business Administration major in Marketing Management (BSBA-MM)",
            "Bachelor of Science in Office Administration (BSOA)"
        ],
        "College of Computer and Information Sciences (CCIS)": [
            "Bachelor in Science in Information Technology (BSIT)",
            "Bachelor of Science in Computer Science (BSCS)"
        ],
        "College of Communication (COC)": [
            "Bachelor of Arts in Broadcasting (BABR)",
            "Bachelor in Advertising and Public Relations (BAPR)",
            "Bachelor of Arts in Journalism (BAJ)",
            "Bachelor of Arts in COmmunication Research (BACR)"
        ],
        "College of Education (COED)": [
            "Bachelor of Business Technology and Livelihood Education Major in Information and Communication Technology (BBTLEd-ICT)",
            "Bachelor of Business Technology and Livelihood Education major in Home Economics (BBTLEd-HE)",
            "Bachelor of Business Technology and Livelihood Education major in Industrial Arts (BBTLEd-IA)",
            "Bachelor of Technical- Vocational Teacher Education major in Food Service Management (BTVTEd-FSM)",
            "Bachelor in Elementary Education (BEED)",
            "Bachelor OF Early Chilhood Education (BECED)",
            "Bachelor of Science in Secondary Education major in English (BSSEDEN)",
            "Bachelor of Science in Secondary Education major in Math (BSSED MT)",
            "Bachelor of Science in Secondary Education major in Science (BSSEDSC)",
            "Bachelor of Science in Secondary Education major in Filipino (BSSEDFL)",
            "Bachelor of Science in Secondary Education major in Social Studies (BSSEDSS)",
            "Bachelor in Library and Information Science (BLIS)"
        ],
        "College of Engineering (CE)": [
            "Bachelor of Science in Civil Engineering (BSCE)",
            "Bachelor of Science in Computer Engineering (BSCpE)",
            "Bachelor of Science in Electrical Engineering (BSEE)",
            "Bachelor of Science in Electronics Engineering (BSECE)",
            "Bachelor of Science in Industrial Engineering (BSIE)",
            "Bachelor of Science in Mechanical Engineering (BSME)",
            "Bachelor of Science in Railway Engineering (BSRE)"
        ],
        "College of Human Kinetics (CHK)": [
            "Bachelor of Physical Education (BPED)",
            "Bachelor of Science in Exercise and Sports Science (BSESS)"
        ],
        "College of Political Science and Public Administration (CPSPA)": [
            "Bachelor of Arts in Political Science (BAPS)",
            "Bachelor of Arts in International Studies (BAIS)",
            "Bachelor of Public Administration (BPA)",
            "Bachelor of Arts in Political Economy (BAPE)"
        ],
        "College of Science (CS)": [
            "Bachelor of Science in Applied Mathematics (BSAPMath)",
            "Bachelor of Science in Biology (BSBio)",
            "Bachelor of Science in Chemistry (BSChem)",
            "Bachelor of Science in Food Technology (BSFT)",
            "Bachelor of Science in Mathematics (BSMath)",
            "Bachelor of Science in Nutrition and Dietetics (BSND)",
            "Bachelor of Science in Physics (BSPhysics)",
            "Bachelor of Science in Statistics (BSStat)"
        ],
        "College of Social Sciences and Development (CSSD)": [
            "Bachelor of Arts In Sociology (ABS)",
            "Bachelor of Sciences in Cooperatives (BSC)",
            "Bachelor of Science in Economics (BSE)",
            "Bachelor of Arts in History (BAH)",
            "Bachelor of Science in Psychology (BSPSY)"
        ],
        "College of Tourism, Hospitality and Transportation Management (CTHTM)": [
            "Bachelor of Science in Tourism Management (BSTM)",
            "Bachelor of Science in Transportation Management (BSTrM)",
            "Bachelor of Science in Hospitality Management (BSHM) formerly BSHRM"
        ],
        "Open University System (OUS)": [
            "Bachelor of Science in Office Administration (BSOAOUMN)",
            "Bachelor of Science in Entrepreneurship (BSENTOUMN)",
            "Bachelor of Science in Business Administration major in Human Resource Management(BSBAHRMOUMN)",
            "Bachelor of Science in Business Administration major in Marketing Management (BSBAMMOUMN)",
            "Bachelor of Arts in Broadcasting (BABROUMN)",
            "Bachelor of Public Administration (BPAOUMN)",
            "Bachelor of Science in Tourism Management (BSTMOUMN)"
        ],
        "Institute of Technology (ITECH)": [
            "Diploma in Information Communication Technology (DICT)",
            "Diploma in Office Management Technology (DOMT)",
            "Diploma in Computer Engineering Technology (DCET)",
            "Diploma in Mechanical Engineering Technology (DMET)",
            "Diploma in Electrical Engineering Technology (DEET)",
            "Diploma in Electronics Engineering Technology (DECET)",
            "Diploma in Civil Engineering Technology (DCVET)",
            "Diploma in Railway Engineering Technology (DRET)"
        ],
        "Graduate Diploma Program": ["Graduate Diploma in Project Management (GDipPM)"],
        "Master's Degree Program": [
            "Master in Applied Statistics (MAS) Specialization in Data Analytics",
            "Master in Applied Statistics (MAS) Specialization in Official Statistics",
            "Master in Applied Statistics (MAS) Specialization in Statistical Methods",
            "Master of Arts in Communication (MAC)",
            "Master of Arts in English Language Studies (MAELS)",
            "Master of Arts in Filipino (MAF) Major in Wika",
            "Master of Arts in Filipino (MAF) Major in Panitikan",
            "Master of Arts in Philippine Studies (MAPhilS)",
            "Master of Arts in Philippine Studies (MAPhilS)",
            "Master of Arts in Psychology (MAP) Major in Clinical Psychology",
            "Master of Arts in Psychology (MAP) Major in Industrial Psychology",
            "Master of Arts in Sociology (MASocio)",
            "Master of Science in Biology (MSBio)",
            "Master of Science in Civil Engineering (MSCE) Specialization in Structural Engineering",
            "Master of Science in Civil Engineering (MSCE) Specialization in Transport Engineering",
            "Master of Science in Civil Engineering (MSCE) Specialization in Geotechnical Engineering",
            "Master of Science in Civil Engineering (MSCE) Specialization in Water Resources Engineering",
            "Master of Science in Computer Engineering (MSCpE) Specialization in Applied Security and Digital Forensics",
            "Master of Science in Computer Engineering (MSCpE) Specialization in Data Science and Engineering",
            "Master of Science in Economics (MSEcon)",
            "Master of Science in Electronics Engineering (MSEcE) Specialization in Artificial Intelligence and Automation",
            "Master of Science in Electronics Engineering (MSEcE) Specialization in Telecommunications",
            "Master of Science in Industrial Engineering (MSIE)",
            "Master of Science in Information Technology (MSIT) Specialization in Data Analytics",
            "Master of Science in Information Technology (MSIT) Specialization in Information Security",
            "Master of Science in International Tourism and Hospitality Management (MSITHM) Specialization in Hotel Operations",
            "Master of Science in International Tourism and Hospitality Management (MSITHM) Specialization in Travel and Tourism Operations",
            "Master of Science in Mathematics (MSMath)",
            "Master of Science in Mechanical Engineering (MSME)",
            "Master of Science in Nutrition and Dietetics (MSND)",
            "Professional Science Masters in Railway Engineering Management (PSMREM)"
        ],
        "Doctorate Degree Program": [
            "Doctor of Philosophy in Communication (PhD Com)",
            "Doctor of Philosophy in Economics (PhD Econ)",
            "Doctor of Philosophy in English Language Studies (PhD ELS)",
            "Doctor of Philosophy in Filipino (PhD Fil) Major in Wika",
            "Doctor of Philosophy in Filipino (PhD Fil) Major in Panitikan",
            "Doctor of Philosophy in Psychology (PhD Psy)"
        ]
    },
    "quezon_city": {
        "Undergraduate Program": [
            "Bachelor of Science in Information Technology (BSIT)",
            "Bachelor of Business Technology and Livelihood Education major in Home Economics (BBTLEDHE)",
            "Bachelor of Business Technology and Livelihood Education major in Information Communication and Technology (BTLEDICT)",
            "Bachelor of Science in Business Administration major in Human Resource Management (BSBAHRM)",
            "Bachelor of Science in Business Administration major in Marketing Management (BSBA-MM)",
            "Bachelor of Science in Entrepreneurship (BSENTREP)",
            "Bachelor of Public Administration with specialization in Fiscal Administration (BPAFA)",
            "Diploma in Office Management Technology Medical Office Management (DOMTMOM)"
        ],
        "Graduate Studies OUS": [
            "Master in Information Technology",
            "Master in Educational Management",
            "Master in Public Administration"
        ]
    },
    "san_juan": {
        "Undergraduate Program": [
            "Bachelor of Science in Accountancy (BSA)",
            "Bachelor of Science in Entrepreneurship (BSE)",
            "Bachelor of Science in Information Technology (BSIT)",
            "Bachelor in Secondary Education major in English (BSEDEN)",
            "Bachelor of Science in Business Administration major in Financial Management (BSBA-FM)",
            "Bachelor of Science and Hospitality Management (BSHM)",
            "Bachelor of Science in Psychology (BSP)"
        ]
    },
    "taguig": {
        "Undergraduate Program": [
            "Bachelor of Science in Electronics Engineering (BSECE)",
            "Bachelor of Science in Mechanical Engineering (BSME)",
            "Bachelor of Science in Accountancy (BSA)",
            "Bachelor of Science in Business Administration (BSBA) major in Human Resource Development Management, Marketing Management",
            "Bachelor of Science in Applied Mathematics (BSAM)",
            "Bachelor of Science in Information Technology (BSIT)",
            "Bachelor of Science in Entrepreneurship (BSENTREP)",
            "Bachelor in Secondary Education (BSED) major in English, Mathematics",
            "Bachelor of Science in Office Administration (BSOA)",
            "Diploma in Information Communication Technology (DICT)",
            "Diploma in Office Management Technology (DOMT)"
        ],
        "Graduate Studies OUS": ["Master in Education Management (MEM)"]
    },
    "paranaque": {
        "Undergraduate Program": [
            "Bachelor of Science in Computer Engineering (BSCPE)",
            "Bachelor of Science in Hospitality Management (BSHM)",
            "Bachelor of Science in Information Technology (BSIT)",
            "Bachelor of Science in Office Administration (BSOA)",
            "Diploma in Office Management Technology - Legal Office Management (DOMT-LOM)"
        ]
    },
    "bataan": {
        "Undergraduate Program": [
            "Bachelor of Science in Accountancy (BSA)",
            "Bachelor of Science in Business Administration (BSBA-HRDM)",
            "Bachelor of Science in Electronics and Communication Engineering (BSECE)",
            "Bachelor of Science in Entrepreneurial Management (BSEntrep)",
            "Bachelor of Science in Industrial Engineering (BSIE)",
            "Bachelor of Science in Information Technology (BSIT)",
            "Bachelor in Secondary Education Major in English (BSEDEN)",
            "Bachelor in Elementary Education (BEED)",
            "Diploma in Information Communication Management Technology (DICMT)"
        ],
        "Graduate Studies": ["Post-Baccalaureate in Teacher Education (PBTE)"]
    },
    "stmaria": {
        "Undergraduate Program": [
            "Bachelor of Science in Accountancy (BSA)",
            "Bachelor of Science in Computer Engineering (BSCpE)",
            "Bachelor of Science in Entrepreneurship (BSENTREP)",
            "Bachelor of Science in Hospitality Management (BSHM)",
            "Bachelor of Science in Information Technology (BSIT)",
            "Bachelor of Secondary Education major in English (BSEDEN)",
            "Bachelor of Secondary Education major in Mathematics (BSEDMT)",
            "Diploma in Office Management Technology- Legal Office Management (DOMTLOM)"
        ]
    },
    "pulilan": {
        "Undergraduate Program": [
            "Bachelor of Science in Entrepreneurial Management",
            "Bachelor of Public Administration major in Public Financial Management (BPAPFM)"
        ]
    },
    "cabiao": {
        "Undergraduate Program": [
            "Bachelor in Elementary Education (BEED)",
            "Bachelor of Science in Business Administration major in Marketing Management (BSBA-MM)"
        ]
    },
    "lopez": {
        "Undergraduate Program": [
            "Bachelor of Public Administration major in Public Financial Management (BPAPFM)",
            "Bachelor of Science in Accountancy (BSA)",
            "Bachelor of Science in Agri-Business Management (BSAM)",
            "Bachelor of Science in Business Administration (BSBA) major in Marketing Management",
            "Bachelor of Science in Civil Engineering (BSCE) major in Construction Management",
            "Bachelor in Secondary Education (BSE) major in Mathematics",
            "Bachelor of Science in Electrical Engineering (BSEE)",
            "Bachelor of Science in Hospitality Management (BSHM)",
            "Bachelor of Science in Office Administration (BSOA) major in Corporate Transcription",
            "Diploma in Electrical Engineering Technology (DEET)",
            "Diploma in Information Communication Technology (DICT)",
            "Diploma in Office Management Technology (DOMT) majors in Medical Office Management and Legal Office Management"
        ],
        "Graduate Studies OUS": [
            "Master in Education Management (MEM)",
            "Master in Public Administration (MPA)"
        ]
    },
    "mulanay": {
        "Undergraduate Program": [
            "Bachelor in Elementary Education (BEED)",
            "Bachelor of Public Administration major in Public Financial Management (BPAPFM)",
            "Bachelor of Science in Office Administration (BSOA) major in Corporate Transcription",
            "Bachelor of Science in Entrepreneurship (BSENTREP)",
            "Bachelor of Science in Agri-Business Management (BSAM)",
            "Diploma in Office Management Technology (DOMT) majors in Medical Office Management"
        ]
    },
    "general_luna": {
        "Undergraduate Program": [
            "Bachelor in Elementary Education (BEED)",
            "Bachelor of Science in Business Administration (BSBA) major in Marketing Management"
        ]
    },
    "unisan": {
        "Undergraduate Program": [
            "Bachelor in Elementary Education (BEED)",
            "Bachelor of Science in Entrepreneurship (BSENTREP)",
            "Bachelor of Science in Information Technology (BSIT)",
            "Diploma in Information Communication Technology (DICT)",
            "Diploma in Office Management Technology (DOMT)"
        ],
        "Graduate Studies OUS":[
            "Masters in Educational Management (MEM)",
            "Masters in Public Administration (MPA)"
        ]
    },
    "ragay": {
        "Undergraduate Program": [
            "Bachelor of Secondary Education major in English",
            "Bachelor of Elementary Education",
            "Bachelor of Science in Information Technology",
            "Bachelor of Science in Office Administration",
            "Bachelor of Science in Business Administration majors in Marketing Management and Human Resource Management"
        ]
    },
    "sto_tomas": {
        "Undergraduate Program": [
            "Bachelor of Science in Accountancy",
            "Bachelor of Science in Entrepreneurial Management",
            "Bachelor of Science in Information Technology",
            "Bachelor of Public Administration major in Public Financial Management",
            "Bachelor of Science in Hotel & Restaurant Management",
            "Bachelor in Business Teacher Education",
            "Bachelor of Science in Secondary Education",
            "Bachelor of Science in Industrial and Organizational Psychology",
            "Bachelor of Science in  Electronics and Communication Engineering",
            "Bachelor of Science in Industrial Engineering",
            "Bachelor of Science in Electrical Engineering",
            "Diploma in Office Management Technology "
        ]
    },
    "maragondon": {
        "Undergraduate Program": [
            "Bachelor of Science in Accountancy (BSA)",
            "Bachelor of Science in Business Administration major in Human Resource Management (BSBA-HRM)",
            "Bachelor of Secondary Education major in English (BSEDEN)",
            "Bachelor of Science in Electrical Engineering (BSEE)",
            "Bachelor of Science in Electronics Engineering (BS-ECE)",
            "Bachelor of Science in Entrepreneurship (Open University) (BSENTREP)",
            "Bachelor of Science in Mechanical Engineering (BSME)",
            "Diploma in Information Communication Technology (DICT)",
            "Diploma in Office Management Technology Legal Office Management (DOMTLOM)",
            "Diploma in Office Management Technology Medical Office Management (DOMTMOM)"
        ],
        "Graduate Studies OUS": [
            "Master in Education Management (MEM)",
            "Post Baccalaureate in Teacher Education (PBTE)"
        ]
    },
    "alfonso": {
        "Undergraduate Program": [
            "Bachelor in Secondary Education (BSED) Major in English, Mathematics",
            "Bachelor of Science in Accountancy (BSA)",
            "Bachelor of Science in Mechanical Engineering (BSME)"
        ]
    },
    "bansud": {
        "Undergraduate Program": [
            "Bachelor of Science in Information Technology (BSIT)",
            "Bachelor in Secondary Education major in English (BSEDEN)",
            "Bachelor in Secondary Education major in Mathematics (BSEDMT)",
            "Diploma in Office Management Technology (DOMT)"
        ],
        "Graduate Studies OUS": [
            "Master in Education Management (MEM)",
            "Master in Public Administration (MPA)"
        ]
    },
    "sablayan": {
        "Undergraduate Program": [
            "Bachelor in Cooperatives (BCOOP)",
            "Bachelor in Secondary Education major in Mathematics (BSEDMT)",
            "Bachelor of Science in Entrepreneurship (BSENTREP)"
        ], 
        "Associate Program": [
            "Associate in Tourism Management (ATM)"
        ], 
        "Graduate Studies OUS": [
            "Master in Educational Management (MEM)",
            "Master in Public Administration (MPA)"
        ]
    },
    "binan": {
        "Undergraduate Program": [
            "Bachelor of Science in Psychology",
            "Bachelor of Secondary Education Major in English",
            "Bachelor of Secondary Education Major in Social Studies",
            "Bachelor of Elementary Education",
            "Bachelor of Science in Information Technology",
            "Bachelor of Science in Computer Engineering",
            "Bachelor of Science in lndustrial Engineering",
            "Bachelor of Science in Business Administration Major in Human Resource Management",
            "Diploma in Computer Engineering Technology",
            "Diploma in Information Technology"
        ]
    },
    "san_pedro": {
        "Undergraduate Program": [
            "Bachelor of Science in Accountancy (BSA)",
            "Bachelor of Science in Business Administration major in Human Resource Management (BSBA-HRM)",
            "Bachelor of Science in Business Administration major in Marketing Management (BSBA-MM)",
            "Bachelor of Science in Entrepreneurship (BSENTREP)",
            "Bachelor of Science in Information Technology (BSIT)",
            "Bachelor of Secondary Education major in English (BSEDEN)",
            "Bachelor of Secondary Education major in Mathematics (BSEDMT)"
        ]
    },
    "sta_rosa": {
        "Undergraduate Program": [
            "Bachelor of Science in Accountancy",
            "Bachelor of Science in Electronics and Communication Engineering",
            "Bachelor of Science in Industrial Engineering",
            "Bachelor of Science in Clinical Psychology",
            "Bachelor of Science in Information Technology",
            "Bachelor of Science in Education major in English",
            "Bachelor of Science in Education major in Mathematics",
            "Bachelor of Science in Business Administration major in Marketing Management",
            "Bachelor of Science in Entrepreneurial Management"
        ]
    },
    "calauan": {
        "Undergraduate Program": [
            "Bachelor of Science in Entrepreneurship (BSENTREP)",
            "Bachelor in Business Teacher Education (BBTE) major in Business Technology and Livelihood Education"
        ]
    }
};

const branch_campus = document.getElementById('branch_campus');
const college = document.getElementById('college');
const course = document.getElementById('course');

// Function to populate options in the second dropdown based on the first dropdown's selection
function populateCollege() {
    const selectedCategory = branch_campus.value;
    const options = collegesOnCampuses[selectedCategory] || [];
    // Clear existing options
    college.innerHTML = '';

    // Add new options
    options.forEach(option => {
        const optionElem = document.createElement('option');
        optionElem.textContent = option;
        college.appendChild(optionElem);
    });

    // Trigger population of the course dropdown when college dropdown changes
    populateCourse();
}

// Function to populate options in the third dropdown based on the second dropdown's selection
function populateCourse() {
    const selectedCategory = branch_campus.value;
    const selectedCollege = college.value;

    // Clear existing options
    course.innerHTML = '';

    // Check if courses are available for the selected college and campus combination
    if (coursesOnColleges[selectedCategory] && coursesOnColleges[selectedCategory][selectedCollege]) {
        const subOptions = coursesOnColleges[selectedCategory][selectedCollege];
        
        // Add new options
        subOptions.forEach(subOption => {
            const subOptionElem = document.createElement('option');
            subOptionElem.textContent = subOption;
            subOptionElem.value = subOption; // Set the value attribute
            course.appendChild(subOptionElem);
        });
    } else {
        // If no courses found, display a default message or handle as needed
        const defaultOption = document.createElement('option');
        course.appendChild(defaultOption);
    }
}

// Event listeners to populate the dropdowns dynamically
branch_campus.addEventListener('change', populateCollege);
college.addEventListener('change', populateCourse);

// Initial population of the college dropdown based on the default selection of the branch_campus dropdown
populateCollege();

document.addEventListener('DOMContentLoaded', function () {
    const noMedicalAttentionRadio = document.getElementById('no_medical-attention');
    const yesMedicalAttentionRadio = document.getElementById('yes_medical-attention');
    const checkboxes = document.querySelectorAll('.checkbox_group input[type="checkbox"]');
    const textInput = document.getElementById('other_illness');

    function toggleInputs(disable) {
        checkboxes.forEach(checkbox => {
            checkbox.disabled = disable;
            checkbox.closest('.checkbox_group').classList.toggle('disabled', disable);
        });
        textInput.disabled = disable;
        textInput.classList.toggle('disabled', disable);
    }

    noMedicalAttentionRadio.addEventListener('click', function () {
        if (this.checked) {
            toggleInputs(true);
        }
    });

    yesMedicalAttentionRadio.addEventListener('click', function () {
        if (this.checked) {
            toggleInputs(false);
        }
    });

    if (noMedicalAttentionRadio.checked) {
        toggleInputs(true);
    }
});

document.addEventListener('DOMContentLoaded', function () {
    var uploadFile = document.getElementById('uploadFile');
    var previewImage = document.getElementById('previewImage');

    uploadFile.addEventListener('change', function () {
        var file = this.files[0];
        if (file) {
            var reader = new FileReader();
            reader.onload = function (event) {
                previewImage.src = event.target.result;
                previewImage.style.display = 'block';
            };
            reader.readAsDataURL(file);
        } else {
            previewImage.src = '#';
            previewImage.style.display = 'none';
        }
    });
});

document.getElementById('file-input-picture').addEventListener('change', function() {
    const fileName = this.files.length > 0 ? this.files[0].name : 'No file chosen';
    document.getElementById('file-name-picture').textContent = fileName;
});

document.getElementById('file-input-signpar').addEventListener('change', function() {
    const fileName = this.files.length > 0 ? this.files[0].name : 'No file chosen';
    document.getElementById('file-name-signpar').textContent = fileName;
});

document.getElementById('file-input-signstud').addEventListener('change', function() {
    const fileName = this.files.length > 0 ? this.files[0].name : 'No file chosen';
    document.getElementById('file-name-signstud').textContent = fileName;
});

function validatePart(partId) {
    var part = document.getElementById(partId);
    var inputs = part.querySelectorAll('input, select, textarea');

    // Check validity of each input in the part
    for (var i = 0; i < inputs.length; i++) {
        if (!inputs[i].checkValidity()) {
            inputs[i].reportValidity();
            return false; // Return false if any input is invalid
        }
    }
    return true; // Return true if all inputs are valid
}

// Event listeners to show different parts and update styling
document.getElementById('showPart1').addEventListener('click', function() {
    document.getElementById('part1').style.display = 'block';
    document.getElementById('part2').style.display = 'none';
    document.getElementById('part3').style.display = 'none';
    document.getElementById('rectangle1').style.backgroundColor = '#B9B9B9';
    document.getElementById('rectangle2').style.backgroundColor = '#B9B9B9';
    document.getElementById('circle2').style.backgroundColor = '#B9B9B9';
    document.getElementById('circle3').style.backgroundColor = '#B9B9B9';
});

document.getElementById('showPart2').addEventListener('click', function() {
    if (validatePart('part1')) {
        document.getElementById('part2').style.display = 'block';
        document.getElementById('part1').style.display = 'none';
        document.getElementById('part3').style.display = 'none';
        document.getElementById('rectangle1').style.backgroundColor = '#810000';
        document.getElementById('rectangle2').style.backgroundColor = '#B9B9B9';
        document.getElementById('circle2').style.backgroundColor = '#810000';
        document.getElementById('circle3').style.backgroundColor = '#B9B9B9';
    }
});

document.getElementById('showPart2-2').addEventListener('click', function() {
    document.getElementById('part2').style.display = 'block';
    document.getElementById('part1').style.display = 'none';
    document.getElementById('part3').style.display = 'none';
    document.getElementById('rectangle1').style.backgroundColor = '#810000';
    document.getElementById('rectangle2').style.backgroundColor = '#B9B9B9';
    document.getElementById('circle2').style.backgroundColor = '#810000';
    document.getElementById('circle3').style.backgroundColor = '#B9B9B9';
    
});

document.getElementById('showPart3').addEventListener('click', function() {
    if (validatePart('part2')) {
        document.getElementById('part3').style.display = 'block';
        document.getElementById('part1').style.display = 'none';
        document.getElementById('part2').style.display = 'none';
        document.getElementById('rectangle1').style.backgroundColor = '#810000';
        document.getElementById('rectangle2').style.backgroundColor = '#810000';
        document.getElementById('circle2').style.backgroundColor = '#810000';
        document.getElementById('circle3').style.backgroundColor = '#810000';
    }
});
