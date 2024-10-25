document.getElementById('home-btn').addEventListener('click', function() {
            const link = document.createElement('a');
            link.href = pdfUrl;
            link.download = 'emmanuel-baraka-portfolio.pdf'; // This is the name of the downloaded file
            link.click();
        });
