
// Function to calculate GPA
function calculateGPA() {
    let totalCredits = 0;
    let totalGradePoints = 0;

  
    let courseNames = [
        "CSC-104",
        "CSC-106",
        "CSC-112",
        "CSC-102",
        "CSC-110",
        "GST-112",
        "PHY-108",
        "PHY-102",
        "CMS-142",
        "MTH-102",
    ];

    
    for (let i = 0; i < courseNames.length; i++) {
        let  grade = prompt("Enter your grade (A, B, C, D, F) for " + courseNames[i] + ":");
        let credits = 2; 

       
       let gradePoint;
        switch (grade.toUpperCase()) {
            case 'A':
                gradePoint = 4.0;
                break;
            case 'B':
                gradePoint = 3.0;
                break;
            case 'C':
                gradePoint = 2.0;
                break;
            case 'D':
                gradePoint = 1.0;
                break;
            case 'F':
                gradePoint = 0.0;
                break;
            default:
                alert("Invalid grade entered for " + courseNames[i] + "!");
                i--; 
                continue; 
        }

        
        totalCredits += credits;
        totalGradePoints += (gradePoint * credits);
    }

    
    let gpa = totalGradePoints / totalCredits;

    
    alert("Your GPA is: " + gpa.toFixed(2));
}


calculateGPA();
