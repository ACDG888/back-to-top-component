<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Back to Top</title>
    <style>
        body {
            margin: 0;
            height: 2000px; /* Example height for scrolling */
        }
        #backToTop {
            position: fixed;
            bottom: 20px;
            right: 20px;
            display: none;
            z-index: 1000;
        }
    </style>
</head>
<body>
    <button id="backToTop">Back to Top</button>
    <script>
        window.onscroll = function() {
            const button = document.getElementById('backToTop');
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                button.style.display = 'block';
            } else {
                button.style.display = 'none';
            }
        };

        document.getElementById('backToTop').onclick = function() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        };
    </script>
</body>
</html>
