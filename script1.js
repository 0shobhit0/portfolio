
document.getElementById('downloadBtn').addEventListener('click', function() {
    // Capture the content area as a canvas using html2canvas
    html2canvas(document.getElementById('content')).then(function(canvas) {
        // Convert canvas to a data URL
        var imgData = canvas.toDataURL('C:\Users\Shobhit\OneDrive\Pictures\Screenshots');


        // Initialize jsPDF
        var pdf = new jsPDF();

        // Add image to PDF
        pdf.addImage(imgData, 'PNG', 10, 10);

        // Save the PDF
        pdf.save('document.pdf');
    });
});
