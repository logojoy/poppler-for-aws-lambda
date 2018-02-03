const path = require('path');

// NOTE: This modifies the LD_LIBRARY_PATH value on lambda
process.env.LD_LIBRARY_PATH = process.env.LD_LIBRARY_PATH + ':' + path.join(__dirname, 'dll');

const vendorDir = path.join(__dirname, 'vendor');

const pdfUnite = path.join(vendorDir, 'pdfunite');
const pdfToPs = path.join(vendorDir, 'pdftops');
const pdfSeperate = path.join(vendorDir, 'pdfseparate');

module.exports = {
    pdfUnite,
    pdfToPs,
    pdfSeperate
};