const pdfUrl = 'emmanuel_baraka_portfolio.pdf'; // The PDF file is in the same directory as your HTML file
        
document.getElementById('home-btn').addEventListener('click', function() {
            const link = document.createElement('a');
            link.href = pdfUrl;
            link.download = 'emmanuel-baraka-portfolio.pdf'; // This is the name of the downloaded file
            link.click();
        });
