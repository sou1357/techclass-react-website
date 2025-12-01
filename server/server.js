const express = require('express');
const multer = require('multer');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const XLSX = require('xlsx');

const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Create uploads directory if it doesn't exist
const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadsDir);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({ 
  storage: storage,
  fileFilter: function (req, file, cb) {
    // Allow specific file types
    const allowedTypes = /jpeg|jpg|png|pdf|doc|docx/;
    const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = allowedTypes.test(file.mimetype);
    
    if (mimetype && extname) {
      return cb(null, true);
    } else {
      cb(new Error('Only images, PDFs, and documents are allowed'));
    }
  },
  limits: {
    fileSize: 5 * 1024 * 1024 // 5MB limit
  }
});

// Function to create or update Excel file
function saveToExcel(formData, files) {
  const excelPath = path.join(__dirname, 'admissions.xlsx');
  let workbook;
  let worksheet;

  // Check if file exists
  if (fs.existsSync(excelPath)) {
    workbook = XLSX.readFile(excelPath);
    worksheet = workbook.Sheets['Admissions'];
  } else {
    // Create new workbook
    workbook = XLSX.utils.book_new();
    const headers = [
      'Timestamp', 'Full Name', 'Personal Mobile', 'Gender', 'Aadhar Card No',
      'College', 'Stream', 'Course', 'Address', 'Father Name', 'Father Mobile',
      'Email', 'Education', 'Experience', 'Course Fee', 'Resume File', 
      'Aadhar Card File', 'Signature File'
    ];
    worksheet = XLSX.utils.aoa_to_sheet([headers]);
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Admissions');
  }

  // Prepare data row
  const newRow = [
    new Date().toISOString(),
    formData.fullName,
    formData.personalMobile,
    formData.gender,
    formData.aadharCard,
    formData.college,
    formData.stream,
    formData.course,
    formData.address,
    formData.fatherName,
    formData.fatherMobile,
    formData.email,
    formData.education,
    formData.experience,
    formData.courseFee,
    files.resume || '',
    files.aadharCardFile || '',
    files.signature || ''
  ];

  // Add row to worksheet
  XLSX.utils.sheet_add_aoa(worksheet, [newRow], { origin: -1 });

  // Save file
  XLSX.writeFile(workbook, excelPath);
}

// Admission form submission endpoint
app.post('/api/admission', upload.fields([
  { name: 'resume', maxCount: 1 },
  { name: 'aadharCardFile', maxCount: 1 },
  { name: 'signature', maxCount: 1 }
]), (req, res) => {
  try {
    const formData = req.body;
    const files = {};

    // Process uploaded files
    if (req.files) {
      if (req.files.resume) files.resume = req.files.resume[0].filename;
      if (req.files.aadharCardFile) files.aadharCardFile = req.files.aadharCardFile[0].filename;
      if (req.files.signature) files.signature = req.files.signature[0].filename;
    }

    // Save to Excel
    saveToExcel(formData, files);

    // Log the submission
    console.log('New admission form submitted:', {
      name: formData.fullName,
      email: formData.email,
      course: formData.course,
      timestamp: new Date().toISOString()
    });

    res.status(200).json({ 
      success: true, 
      message: 'Application submitted successfully',
      data: {
        name: formData.fullName,
        course: formData.course
      }
    });

  } catch (error) {
    console.error('Error processing admission form:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Error processing application. Please try again.' 
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'Server is running', timestamp: new Date().toISOString() });
});

// Serve uploaded files
app.use('/uploads', express.static(uploadsDir));

// Error handling middleware
app.use((error, req, res, next) => {
  if (error instanceof multer.MulterError) {
    if (error.code === 'LIMIT_FILE_SIZE') {
      return res.status(400).json({ 
        success: false, 
        message: 'File too large. Maximum size is 5MB.' 
      });
    }
  }
  
  res.status(500).json({ 
    success: false, 
    message: 'Something went wrong!' 
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`Uploads directory: ${uploadsDir}`);
});