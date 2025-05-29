# Descargar WaveSurfer.js
Invoke-WebRequest -Uri "https://cdnjs.cloudflare.com/ajax/libs/wavesurfer.js/7.7.3/wavesurfer.min.js" -OutFile "assets/libs/wavesurfer/wavesurfer.min.js"

# Descargar Font Awesome CSS
Invoke-WebRequest -Uri "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" -OutFile "assets/libs/fontawesome/css/all.min.css"

# Descargar Font Awesome Webfonts
$webfonts = @(
    "fa-solid-900.woff2",
    "fa-solid-900.woff",
    "fa-regular-400.woff2",
    "fa-regular-400.woff"
)

foreach ($font in $webfonts) {
    Invoke-WebRequest -Uri "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/webfonts/$font" -OutFile "assets/libs/fontawesome/webfonts/$font"
}

# Descargar fuentes Roboto
$weights = @(300, 400, 500, 700)
$variants = @("normal")

foreach ($weight in $weights) {
    foreach ($variant in $variants) {
        $filename = "roboto-v30-latin-$weight.woff2"
        Invoke-WebRequest -Uri "https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmEU9fBBc4.woff2" -OutFile "assets/fonts/roboto/$filename"
    }
} 