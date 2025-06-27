<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Tamil Nadu Education Map</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
  <style>
    .info-panel {
      background-color: #f8f9fa;
      padding: 20px;
      margin-top: 20px;
      border-radius: 10px;
    }
    .district-button {
      margin: 5px;
    }
    iframe {
      width: 100%;
      max-width: 100%;
      height: 500px;
      border: none;
    }
  </style>
</head>
<body class="bg-light">

  <div class="container mt-4">
    <h1 class="text-center mb-4">Tamil Nadu Education Map</h1>

    <!-- Embed the Datawrapper Map -->
    <div class="mb-4 text-center">
      <iframe title="Tamil Nadu District Map" src="https://datawrapper.dwcdn.net/Il2VG/1/" scrolling="no"></iframe>
    </div>

    <!-- Select Districts -->
    <div class="text-center mb-4">
      <h4>Select a District:</h4>
      <div id="district-buttons" class="d-flex flex-wrap justify-content-center">
        <!-- Buttons will be generated here -->
      </div>
    </div>

    <!-- Info Panel -->
    <div class="info-panel text-center" id="district-info">
      <h3>Select a district to view details</h3>
    </div>
  </div>

  <script>
    const districtData = {
      "Ariyalur": { schools: 490, colleges: 45 },
      "Chengalpattu": { schools: 1120, colleges: 110 },
      "Chennai": { schools: 1250, colleges: 180 },
      "Coimbatore": { schools: 1350, colleges: 160 },
      "Cuddalore": { schools: 950, colleges: 90 },
      "Dharmapuri": { schools: 700, colleges: 65 },
      "Dindigul": { schools: 870, colleges: 75 },
      "Erode": { schools: 980, colleges: 100 },
      "Kallakurichi": { schools: 650, colleges: 50 },
      "Kanchipuram": { schools: 1100, colleges: 120 },
      "Kanyakumari": { schools: 920, colleges: 95 },
      "Karur": { schools: 600, colleges: 55 },
      "Krishnagiri": { schools: 800, colleges: 70 },
      "Madurai": { schools: 1080, colleges: 130 },
      "Mayiladuthurai": { schools: 520, colleges: 40 },
      "Nagapattinam": { schools: 560, colleges: 35 },
      "Namakkal": { schools: 760, colleges: 60 },
      "Nilgiris": { schools: 450, colleges: 30 },
      "Perambalur": { schools: 430, colleges: 25 },
      "Pudukkottai": { schools: 670, colleges: 50 },
      "Ramanathapuram": { schools: 700, colleges: 55 },
      "Ranipet": { schools: 810, colleges: 70 },
      "Salem": { schools: 1150, colleges: 140 },
      "Sivaganga": { schools: 620, colleges: 50 },
      "Tenkasi": { schools: 680, colleges: 45 },
      "Thanjavur": { schools: 1020, colleges: 100 },
      "Theni": { schools: 740, colleges: 60 },
      "Thoothukudi": { schools: 890, colleges: 85 },
      "Tiruchirappalli": { schools: 1110, colleges: 120 },
      "Tirunelveli": { schools: 980, colleges: 90 },
      "Tirupathur": { schools: 620, colleges: 45 },
      "Tiruppur": { schools: 950, colleges: 95 },
      "Tiruvallur": { schools: 1050, colleges: 110 },
      "Tiruvannamalai": { schools: 910, colleges: 80 },
      "Tiruvarur": { schools: 580, colleges: 40 },
      "Vellore": { schools: 1030, colleges: 100 },
      "Viluppuram": { schools: 870, colleges: 70 },
      "Virudhunagar": { schools: 790, colleges: 65 }
    };

    const buttonContainer = document.getElementById('district-buttons');
    const panel = document.getElementById('district-info');

    for (const district in districtData) {
      const btn = document.createElement('button');
      btn.className = 'btn btn-primary district-button';
      btn.textContent = district;
      btn.onclick = () => {
        const info = districtData[district];
        panel.innerHTML = `
          <h3>${district} District</h3>
          <p><strong>Schools:</strong> ${info.schools}</p>
          <p><strong>Colleges:</strong> ${info.colleges}</p>
        `;
      };
      buttonContainer.appendChild(btn);
    }
  </script>

</body>
</html>
